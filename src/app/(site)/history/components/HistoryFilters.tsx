"use client";

import type { LogLevel } from "@/generated/prisma";

type Props = {
  botId: string;
  level?: LogLevel;
  loading: boolean;
  onBotIdChange: (v: string) => void;
  onLevelChange: (v: LogLevel | undefined) => void;
  onRefresh: () => void;
};

export function HistoryFilters({
  botId,
  level,
  loading,
  onBotIdChange,
  onLevelChange,
  onRefresh,
}: Props) {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body p-4 gap-3">
        <div className="flex flex-col md:flex-row md:items-end gap-2">
          <label className="form-control w-full md:w-64">
            <div className="label">
              <span className="label-text">botId</span>
            </div>
            <input
              type="text"
              value={botId}
              onChange={(e) => onBotIdChange(e.target.value)}
              placeholder="botId 입력"
              className="input input-bordered input-sm"
            />
          </label>

          <label className="form-control w-full md:w-48">
            <div className="label">
              <span className="label-text">레벨</span>
            </div>
            <select
              className="select select-bordered select-sm"
              value={level ?? ""}
              onChange={(e) => {
                const v = e.target.value;
                onLevelChange(v.length > 0 ? (v as LogLevel) : undefined);
              }}
            >
              <option value="">전체</option>
              <option value="DEBUG">DEBUG</option>
              <option value="INFO">INFO</option>
              <option value="WARN">WARN</option>
              <option value="ERROR">ERROR</option>
            </select>
          </label>

          <button
            className="btn btn-sm md:ml-2"
            onClick={onRefresh}
            disabled={loading}
          >
            새로고침
          </button>
        </div>
      </div>
    </div>
  );
}
