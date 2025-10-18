// src/features/strategy-configs/components/EditStrategyForm.tsx
"use client";

import { ChangeEvent, useMemo, useState } from "react";
import { StrategyKind } from "@/generated/prisma";
import { StrategyItem, StrategyUpdateBody } from "@/types/strategy-config";
import CommonSettingsSection, {
  CommonFormSlice,
} from "./CommonSettingsSection";
import { useToast } from "@/components/ui";

type Props = {
  item: StrategyItem;
  onUpdate: (body: StrategyUpdateBody) => Promise<void>;
  onClose: () => void;
  disabled?: boolean;
};

type EditForm = CommonFormSlice & {
  id: string;

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

export default function EditStrategyForm({
  item,
  onUpdate,
  onClose,
  disabled = false,
}: Props) {
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
      enabled: item.enabled,
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

  async function handleUpdate(): Promise<void> {
    setUpdating(true);
    try {
      const body: StrategyUpdateBody = {
        id: form.id,
        kind: form.kind,
      };

      const nameTrim = form.name.trim();
      if (nameTrim.length > 0) body.name = nameTrim;

      // 공통
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

  const showTrend =
    form.kind === StrategyKind.TREND || form.kind === StrategyKind.BOTH;
  const showBox =
    form.kind === StrategyKind.BOX || form.kind === StrategyKind.BOTH;

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body space-y-6">
        <h2 className="text-base font-semibold">전략 수정</h2>

        {/* ID 읽기전용 */}
        <section className="rounded-2xl border border-base-300 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="form-control">
              <label htmlFor="id" className="label">
                <span className="label-text">ID</span>
              </label>
              <input
                id="id"
                className="input input-bordered"
                readOnly
                value={form.id}
              />
            </div>
          </div>
        </section>

        <CommonSettingsSection
          form={form}
          setForm={(updater) =>
            setForm((prev) => ({ ...prev, ...updater(prev) }))
          }
          disabled={updating || disabled}
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
                  inputMode="decimal"
                  value={form.trendRsiUpperPullback}
                  disabled={updating || disabled}
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
                  inputMode="decimal"
                  value={form.trendRsiLowerPullback}
                  disabled={updating || disabled}
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
                  disabled={updating || disabled}
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
                  disabled={updating || disabled}
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
                  disabled={updating || disabled}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setForm((s) => ({ ...s, boxTouchPct: e.target.value }))
                  }
                />
              </div>
            </div>
          </section>
        )}

        <div className="flex gap-2">
          <button
            type="button"
            className="btn btn-primary"
            disabled={updating || disabled}
            onClick={() => void handleUpdate()}
          >
            {updating ? "수정 중…" : "수정 저장"}
          </button>
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
