// src/app/(site)/strategy-config/view/CommonSettingsSectionView.tsx
"use client";

import { ChangeEvent } from "react";
import { Timeframe, StrategyKind } from "@/generated/prisma";
import type { CommonFormSlice } from "../types/common";

type Props = {
  form: CommonFormSlice;
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

export default function CommonSettingsSectionView({
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
        {/* 이름 */}
        <div className="form-control">
          <label htmlFor="name" className="label">
            <span className="label-text">이름</span>
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

        {/* 전략 종류 */}
        <div className="form-control">
          <label htmlFor="kind" className="label">
            <span className="label-text">전략 종류</span>
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

        {/* RSI 길이(공통) */}
        <div className="form-control">
          <label htmlFor="rsi-length" className="label">
            <span className="label-text">분봉 분석 갯수</span>
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

        {/* 타임프레임 */}
        <div className="form-control">
          <label htmlFor="timeframe" className="label">
            <span className="label-text">타임프레임</span>
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

        {/* 목표 수익률 / 손절 (%) */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">목표 수익률 / 손절 (%)</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              id="target-profit"
              className="input input-bordered"
              placeholder="수익 % (실수)"
              inputMode="decimal"
              value={form.targetProfit}
              disabled={disabled}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setForm(() => ({ targetProfit: e.target.value }))
              }
            />
            <input
              id="target-loss"
              className="input input-bordered"
              placeholder="손절 % (실수)"
              inputMode="decimal"
              value={form.targetLoss}
              disabled={disabled}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setForm(() => ({ targetLoss: e.target.value }))
              }
            />
          </div>
        </div>

        {/* 레버리지 */}
        <div className="form-control">
          <label htmlFor="leverage" className="label">
            <span className="label-text">레버리지 (배)</span>
          </label>
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

        {/* 기본 수량 / 최대 수량 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">기본 수량 / 최대 수량 (USDT)</span>
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

        {/* 마틴 사용 토글 */}
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
            <span className="label-text">마틴 사용</span>
          </label>

          {/* enabled 토글은 제거(항상 true 고정) */}
        </div>

        {/* 마틴 배수 */}
        <div className="form-control">
          <label htmlFor="martin-multiplier" className="label">
            <span className="label-text">마틴 배수</span>
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
      </div>
    </section>
  );
}
