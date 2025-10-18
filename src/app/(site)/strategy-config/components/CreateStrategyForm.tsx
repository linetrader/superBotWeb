// src/features/strategy-configs/components/CreateStrategyForm.tsx
"use client";

import { ChangeEvent, useState } from "react";
import { Timeframe, StrategyKind } from "@/generated/prisma";
import { StrategyCreateBody } from "@/types/strategy-config";
import CommonSettingsSection, {
  CommonFormSlice,
} from "./CommonSettingsSection";
import { useToast } from "@/components/ui";

type Props = {
  onCreate: (body: StrategyCreateBody) => Promise<void>;
  error: string;
  setError: (msg: string) => void;
};

type CreateForm = CommonFormSlice & {
  // BOX
  lowerTh: string;
  upperTh: string;
  boxTouchPct: string;
  // TREND
  trendRsiUpperPullback: string;
  trendRsiLowerPullback: string;
};

function parseFloatOrNull(s: string): number | null {
  return s.trim() === "" ? null : Number.parseFloat(s);
}
function parseFloatOrUndefined(s: string): number | undefined {
  return s.trim() === "" ? undefined : Number.parseFloat(s);
}

export default function CreateStrategyForm({
  onCreate,
  error,
  setError,
}: Props) {
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
    leverage: "15",
    timeframe: Timeframe.T5m,
    enabled: true,
    rsiLength: "14",

    lowerTh: "30",
    upperTh: "70",
    boxTouchPct: "1.0",

    trendRsiUpperPullback: "60",
    trendRsiLowerPullback: "40",
  });

  async function handleCreate(): Promise<void> {
    setError("");
    setCreating(true);
    try {
      const body: StrategyCreateBody = {
        kind: form.kind,
        // name: 비어있으면 서버가 보정(ensureNonEmptyName)하지만,
        // 사용자 입력을 저장하려면 유효하면 함께 보냄
      };

      const nameTrim = form.name.trim();
      if (nameTrim.length > 0) body.name = nameTrim;

      // 공통(숫자 변환)
      body.useMartin = form.useMartin;
      body.martinMultiplier = Number.parseFloat(form.martinMultiplier);
      body.defaultSize = Number.parseInt(form.defaultSize, 10);
      body.maxSize = Number.parseInt(form.maxSize, 10);
      body.targetProfit = Number.parseFloat(form.targetProfit);
      body.leverage = Number.parseInt(form.leverage, 10);
      body.timeframe = form.timeframe;
      body.enabled = form.enabled;
      body.rsiLength = Number.parseInt(form.rsiLength, 10);

      const showTrend =
        form.kind === StrategyKind.TREND || form.kind === StrategyKind.BOTH;
      const showBox =
        form.kind === StrategyKind.BOX || form.kind === StrategyKind.BOTH;

      if (showTrend) {
        body.trend = {
          trendRsiUpperPullback: parseFloatOrNull(form.trendRsiUpperPullback),
          trendRsiLowerPullback: parseFloatOrNull(form.trendRsiLowerPullback),
        };
      }
      if (showBox) {
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

  const showTrend =
    form.kind === StrategyKind.TREND || form.kind === StrategyKind.BOTH;
  const showBox =
    form.kind === StrategyKind.BOX || form.kind === StrategyKind.BOTH;

  return (
    <div className="card mb-4 bg-base-100 shadow">
      <div className="card-body space-y-6">
        <h2 className="text-base font-semibold">새 전략 생성</h2>

        <CommonSettingsSection
          form={form}
          setForm={(updater) =>
            setForm((prev) => ({ ...prev, ...updater(prev) }))
          }
          disabled={creating}
        />

        {/* Trend 섹션 */}
        {showTrend && (
          <section className="rounded-2xl border border-base-300 p-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold">Trend 설정</h3>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="form-control">
                <label htmlFor="trend-upper" className="label">
                  <span className="label-text">Trend RSI Pullback Upper</span>
                </label>
                <input
                  id="trend-upper"
                  className="input input-bordered"
                  placeholder="실수 또는 공란(null)"
                  inputMode="decimal"
                  value={form.trendRsiUpperPullback}
                  disabled={creating}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setForm((s) => ({
                      ...s,
                      trendRsiUpperPullback: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="form-control">
                <label htmlFor="trend-lower" className="label">
                  <span className="label-text">Trend RSI Pullback Lower</span>
                </label>
                <input
                  id="trend-lower"
                  className="input input-bordered"
                  placeholder="실수 또는 공란(null)"
                  inputMode="decimal"
                  value={form.trendRsiLowerPullback}
                  disabled={creating}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setForm((s) => ({
                      ...s,
                      trendRsiLowerPullback: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
          </section>
        )}

        {/* Box 섹션 */}
        {showBox && (
          <section className="rounded-2xl border border-base-300 p-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold">Box 설정</h3>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              <div className="form-control">
                <label htmlFor="box-lower" className="label">
                  <span className="label-text">RSI Lower</span>
                </label>
                <input
                  id="box-lower"
                  className="input input-bordered"
                  inputMode="decimal"
                  value={form.lowerTh}
                  disabled={creating}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setForm((s) => ({ ...s, lowerTh: e.target.value }))
                  }
                />
              </div>
              <div className="form-control">
                <label htmlFor="box-upper" className="label">
                  <span className="label-text">RSI Upper</span>
                </label>
                <input
                  id="box-upper"
                  className="input input-bordered"
                  inputMode="decimal"
                  value={form.upperTh}
                  disabled={creating}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setForm((s) => ({ ...s, upperTh: e.target.value }))
                  }
                />
              </div>
              <div className="form-control">
                <label htmlFor="box-touch" className="label">
                  <span className="label-text">Box Touch %</span>
                </label>
                <input
                  id="box-touch"
                  className="input input-bordered"
                  placeholder="실수 또는 공란(null)"
                  inputMode="decimal"
                  value={form.boxTouchPct}
                  disabled={creating}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setForm((s) => ({ ...s, boxTouchPct: e.target.value }))
                  }
                />
              </div>
            </div>
          </section>
        )}

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="btn btn-primary"
            disabled={creating}
            onClick={() => void handleCreate()}
          >
            {creating ? "생성 중…" : "생성"}
          </button>
          {error && <p className="text-xs text-error">{error}</p>}
        </div>
      </div>
    </div>
  );
}
