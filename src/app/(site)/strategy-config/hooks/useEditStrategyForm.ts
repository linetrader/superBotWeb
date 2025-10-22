"use client";

import { useMemo, useState } from "react";
import { StrategyKind } from "@/generated/prisma";
import { useToast } from "@/components/ui";
import { StrategyItem, StrategyUpdateBody } from "@/types/strategy-config";
import type { EditForm } from "../types/common";

function parseFloatOrNull(s: string): number | null {
  return s.trim() === "" ? null : Number.parseFloat(s);
}
function parseFloatOrUndefined(s: string): number | undefined {
  return s.trim() === "" ? undefined : Number.parseFloat(s);
}

type Params = {
  item: StrategyItem;
  onUpdate: (body: StrategyUpdateBody) => Promise<void>;
  onClose: () => void;
  disabled?: boolean;
};

export function useEditStrategyForm(params: Params) {
  const { item, onUpdate, onClose, disabled = false } = params;
  const { toast } = useToast();

  const init: EditForm = useMemo(
    () => ({
      id: item.id,
      name: item.name,
      kind: item.kind,
      useMartin: item.useMartin,
      martinMultiplier: String(item.martinMultiplier),
      defaultSize: String(item.defaultSize),
      maxSize: String(item.maxSize),
      targetProfit: String(item.targetProfit),
      leverage: String(item.leverage),
      timeframe: item.timeframe,
      rsiLength: String(item.rsiLength),
      lowerTh: item.lowerTh === null ? "" : String(item.lowerTh),
      upperTh: item.upperTh === null ? "" : String(item.upperTh),
      boxTouchPct: item.boxTouchPct === null ? "" : String(item.boxTouchPct),
      trendRsiUpperPullback:
        item.trendRsiUpperPullback === null
          ? ""
          : String(item.trendRsiUpperPullback),
      trendRsiLowerPullback:
        item.trendRsiLowerPullback === null
          ? ""
          : String(item.trendRsiLowerPullback),
    }),
    [item]
  );

  const [form, setForm] = useState<EditForm>(init);
  const [updating, setUpdating] = useState<boolean>(false);

  async function onUpdateClick(): Promise<void> {
    setUpdating(true);
    try {
      const body: StrategyUpdateBody = {
        id: form.id,
        kind: form.kind,
      };

      const nameTrim = form.name.trim();
      if (nameTrim.length > 0) body.name = nameTrim;

      body.useMartin = form.useMartin;
      body.martinMultiplier = Number.parseFloat(form.martinMultiplier);
      body.defaultSize = Number.parseInt(form.defaultSize, 10);
      body.maxSize = Number.parseInt(form.maxSize, 10);
      body.targetProfit = Number.parseFloat(form.targetProfit);
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

      await onUpdate(body);
      toast({ title: "수정 완료", description: "전략이 수정되었습니다." });
    } catch {
      toast({
        title: "수정 실패",
        description: "입력을 확인해주세요.",
        variant: "error",
      });
    } finally {
      setUpdating(false);
    }
  }

  return { form, setForm, updating, disabled, onUpdateClick, onClose };
}
