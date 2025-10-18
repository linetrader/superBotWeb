// src/features/strategy-configs/components/CommonSettingsSection.tsx
"use client";

import { ChangeEvent } from "react";
import { Timeframe, StrategyKind } from "@/generated/prisma";

export type CommonFormSlice = {
  name: string;
  kind: StrategyKind;

  // 공통
  useMartin: boolean;
  martinMultiplier: string;
  defaultSize: string;
  maxSize: string;
  targetProfit: string;
  leverage: string;
  timeframe: Timeframe;
  enabled: boolean;

  // 숫자 입력(문자) — 서버 전송 시 숫자로 변환
  rsiLength: string;
};

type Props = {
  form: CommonFormSlice;
  /** 부분 갱신만 돌려주면 부모에서 병합합니다 */
  setForm: (
    updater: (prev: CommonFormSlice) => Partial<CommonFormSlice>
  ) => void;
  timeframeOptions?: readonly Timeframe[];
  strategyKindOptions?: readonly StrategyKind[];
  disabled?: boolean;
};

const DEFAULT_TF_OPTIONS: readonly Timeframe[] = Object.values(Timeframe);
const DEFAULT_KIND_OPTIONS: readonly StrategyKind[] = [
  StrategyKind.TREND,
  StrategyKind.BOX,
  StrategyKind.BOTH,
] as const;

export default function CommonSettingsSection({
  form,
  setForm,
  timeframeOptions = DEFAULT_TF_OPTIONS,
  strategyKindOptions = DEFAULT_KIND_OPTIONS,
  disabled = false,
}: Props) {
  return (
    <section className="rounded-2xl border border-base-300 p-4">
      <h3 className="mb-3 text-sm font-semibold">공통 설정</h3>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {/* Name */}
        <div className="form-control">
          <label htmlFor="name" className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            id="name"
            className="input input-bordered"
            placeholder="전략 이름"
            value={form.name}
            disabled={disabled}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setForm(() => ({ name: e.target.value }))
            }
          />
        </div>

        {/* Strategy Kind */}
        <div className="form-control">
          <label htmlFor="kind" className="label">
            <span className="label-text">Strategy Kind</span>
          </label>
          <select
            id="kind"
            className="select select-bordered"
            value={form.kind}
            disabled={disabled}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setForm(() => ({ kind: e.target.value as StrategyKind }))
            }
          >
            {strategyKindOptions.map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
        </div>

        {/* RSI Length (공통) */}
        <div className="form-control">
          <label htmlFor="rsi-length" className="label">
            <span className="label-text">RSI Length (공통)</span>
          </label>
          <input
            id="rsi-length"
            className="input input-bordered"
            inputMode="numeric"
            value={form.rsiLength}
            disabled={disabled}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setForm(() => ({ rsiLength: e.target.value }))
            }
          />
        </div>

        {/* Timeframe */}
        <div className="form-control">
          <label htmlFor="timeframe" className="label">
            <span className="label-text">Timeframe</span>
          </label>
          <select
            id="timeframe"
            className="select select-bordered"
            value={form.timeframe}
            disabled={disabled}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setForm(() => ({ timeframe: e.target.value as Timeframe }))
            }
          >
            {timeframeOptions.map((tf) => (
              <option key={tf} value={tf}>
                {tf}
              </option>
            ))}
          </select>
        </div>

        {/* Target Profit / Leverage */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Target Profit / Leverage</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              id="target-profit"
              className="input input-bordered"
              placeholder="실수"
              inputMode="decimal"
              value={form.targetProfit}
              disabled={disabled}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setForm(() => ({ targetProfit: e.target.value }))
              }
            />
            <input
              id="leverage"
              className="input input-bordered"
              placeholder="정수"
              inputMode="numeric"
              value={form.leverage}
              disabled={disabled}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setForm(() => ({ leverage: e.target.value }))
              }
            />
          </div>
        </div>

        {/* Default / Max Size */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Default / Max Size</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              id="default-size"
              className="input input-bordered"
              placeholder="정수"
              inputMode="numeric"
              value={form.defaultSize}
              disabled={disabled}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setForm(() => ({ defaultSize: e.target.value }))
              }
            />
            <input
              id="max-size"
              className="input input-bordered"
              placeholder="정수"
              inputMode="numeric"
              value={form.maxSize}
              disabled={disabled}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setForm(() => ({ maxSize: e.target.value }))
              }
            />
          </div>
        </div>

        {/* Martin Multiplier */}
        <div className="form-control">
          <label htmlFor="martin-multiplier" className="label">
            <span className="label-text">Martin Multiplier</span>
          </label>
          <input
            id="martin-multiplier"
            className="input input-bordered"
            placeholder="실수"
            inputMode="decimal"
            value={form.martinMultiplier}
            disabled={disabled}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setForm(() => ({ martinMultiplier: e.target.value }))
            }
          />
        </div>

        {/* 토글들 */}
        <div className="md:col-span-2 flex flex-wrap gap-x-6 gap-y-2">
          <label className="label cursor-pointer gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-sm"
              checked={form.useMartin}
              disabled={disabled}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setForm(() => ({ useMartin: e.target.checked }))
              }
            />
            <span className="label-text">Use Martin</span>
          </label>

          <label className="label cursor-pointer gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-sm"
              checked={form.enabled}
              disabled={disabled}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setForm(() => ({ enabled: e.target.checked }))
              }
            />
            <span className="label-text">Enabled</span>
          </label>
        </div>
      </div>
    </section>
  );
}
