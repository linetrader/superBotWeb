// src/app/(site)/strategy-config/hooks/useCreateStrategyForm.ts
"use client";

import { useState } from "react";
import { Timeframe, StrategyKind } from "@/generated/prisma";
import { useToast } from "@/components/ui";
import { StrategyCreateBody } from "@/types/strategy-config";
import type { CreateForm } from "../types/common";

function parseFloatOrNull(s: string): number | null {
  return s.trim() === "" ? null : Number.parseFloat(s);
}
function parseFloatOrUndefined(s: string): number | undefined {
  return s.trim() === "" ? undefined : Number.parseFloat(s);
}

type Params = {
  onCreate: (body: StrategyCreateBody) => Promise<void>;
  error: string;
  setError: (msg: string) => void;
};

export function useCreateStrategyForm(params: Params) {
  const { onCreate, error, setError } = params;
  const { toast } = useToast();

  const [creating, setCreating] = useState<boolean>(false);

  const [form, setForm] = useState<CreateForm>({
    name: "",
    kind: StrategyKind.TREND,
    useMartin: false,
    martinMultiplier: "2.0",
    defaultSize: "20",
    maxSize: "500",
    targetProfit: "20",
    targetLoss: "5", // ✅ 예시 기본값
    leverage: "15",
    timeframe: Timeframe.T5m,
    rsiLength: "14",
    lowerTh: "30",
    upperTh: "70",
    boxTouchPct: "1.0",
    trendRsiUpperPullback: "60",
    trendRsiLowerPullback: "40",
  });

  async function onCreateClick(): Promise<void> {
    setError("");
    setCreating(true);
    try {
      const body: StrategyCreateBody = {
        kind: form.kind,
      };

      const nameTrim = form.name.trim();
      if (nameTrim.length > 0) body.name = nameTrim;

      body.useMartin = form.useMartin;
      body.martinMultiplier = Number.parseFloat(form.martinMultiplier);
      body.defaultSize = Number.parseInt(form.defaultSize, 10);
      body.maxSize = Number.parseInt(form.maxSize, 10);
      body.targetProfit = Number.parseFloat(form.targetProfit);
      body.targetLoss = Number.parseFloat(form.targetLoss); // ✅ 추가
      body.leverage = Number.parseInt(form.leverage, 10);
      body.timeframe = form.timeframe;
      body.rsiLength = Number.parseInt(form.rsiLength, 10);

      const trendNeeded =
        form.kind === StrategyKind.TREND || form.kind === StrategyKind.BOTH;
      const boxNeeded =
        form.kind === StrategyKind.BOX || form.kind === StrategyKind.BOTH;

      if (trendNeeded) {
        body.trend = {
          trendRsiUpperPullback: parseFloatOrNull(form.trendRsiUpperPullback),
          trendRsiLowerPullback: parseFloatOrNull(form.trendRsiLowerPullback),
        };
      }
      if (boxNeeded) {
        body.box = {
          lowerTh: parseFloatOrUndefined(form.lowerTh),
          upperTh: parseFloatOrUndefined(form.upperTh),
          boxTouchPct: parseFloatOrNull(form.boxTouchPct),
        };
      }

      await onCreate(body);
      toast({ title: "생성 완료", description: "전략이 생성되었습니다." });
    } catch {
      toast({
        title: "생성 실패",
        description: "입력을 확인해주세요.",
        variant: "error",
      });
    } finally {
      setCreating(false);
    }
  }

  return { form, setForm, creating, error, onCreateClick };
}
