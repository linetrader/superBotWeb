"use client";

import { ChangeEvent, useEffect } from "react";
import { useToast } from "@/components/ui";
import type { StrategyItem } from "@/types/strategy-config";

type Props = {
  items: StrategyItem[];
  selectedIds: Set<string>;
  onToggleRow: (idx: number, checked: boolean) => void;
  onToggleAll: (checked: boolean) => void;
  onDeleteSelected: () => void;
  onRowClick: (idx: number) => void;
  loading?: boolean;
  error?: string;
};

export function StrategyConfigsTable({
  items,
  selectedIds,
  onToggleRow,
  onToggleAll,
  onDeleteSelected,
  onRowClick,
  loading = false,
  error = "",
}: Props) {
  const { toast } = useToast();

  useEffect(() => {
    if (error && error.trim().length > 0) {
      toast({ title: "에러", description: error, variant: "error" });
    }
  }, [error, toast]);

  const allSelected =
    items.length > 0 && items.every((it) => selectedIds.has(it.id));

  const headLabels = ["수정시각", "시장", "이름", "종류", "세부설정"] as const;

  function detailText(it: StrategyItem): string {
    if (it.kind === "TREND") {
      const upper = it.trendRsiUpperPullback ?? "-";
      const lower = it.trendRsiLowerPullback ?? "-";
      return `len:${it.rsiLength}, pullback U:${upper}/L:${lower}`;
    }
    if (it.kind === "BOX") {
      const low = it.lowerTh ?? "-";
      const up = it.upperTh ?? "-";
      const touch = it.boxTouchPct ?? "-";
      return `RSI ${low}~${up}, touch:${touch}`;
    }
    // BOTH
    const low = it.lowerTh ?? "-";
    const up = it.upperTh ?? "-";
    const touch = it.boxTouchPct ?? "-";
    const upper = it.trendRsiUpperPullback ?? "-";
    const lower = it.trendRsiLowerPullback ?? "-";
    return `BOX: ${low}~${up}, touch:${touch} | TREND: len:${it.rsiLength}, U:${upper}/L:${lower}`;
  }

  const rows = items.map((it, idx) => ({
    idx,
    checked: selectedIds.has(it.id),
    updatedAt: new Date(it.updatedAt).toLocaleString(),
    name: it.name,
    kind: it.kind,
    detail: detailText(it),
  }));

  return (
    <div className="card bg-base-100 shadow mb-4">
      <div className="card-body p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-base font-semibold">전략 목록</h2>
          <div className="flex gap-2">
            <button
              type="button"
              className={`btn btn-primary btn-sm ${
                selectedIds.size === 0 ? "btn-disabled" : ""
              }`}
              onClick={() => {
                if (selectedIds.size === 0) return;
                onDeleteSelected();
                toast({
                  title: "삭제 요청",
                  description: `선택한 ${selectedIds.size}개 전략 삭제를 요청했습니다.`,
                });
              }}
              disabled={selectedIds.size === 0}
            >
              {`선택 삭제 (${selectedIds.size})`}
            </button>
          </div>
        </div>

        <div className="overflow-x-auto rounded-box border border-base-300">
          <table className="table table-zebra table-sm">
            <thead className="bg-base-200 sticky top-0">
              <tr>
                <th className="w-10">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm"
                    checked={allSelected}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      onToggleAll(e.target.checked)
                    }
                  />
                </th>
                {headLabels.map((label) => (
                  <th key={label} className="text-left">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr
                  key={r.idx}
                  className="cursor-pointer hover"
                  onClick={() => onRowClick(r.idx)}
                >
                  <td onClick={(e) => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      checked={r.checked}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        onToggleRow(r.idx, e.target.checked)
                      }
                    />
                  </td>
                  <td>{r.updatedAt}</td>
                  <td>{r.name}</td>
                  <td>{r.kind}</td>
                  <td>{r.detail}</td>
                </tr>
              ))}

              {items.length === 0 && !loading && (
                <tr>
                  <td colSpan={headLabels.length + 1}>
                    <div className="p-4 text-sm text-base-content/60">
                      데이터가 없습니다.
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {loading && (
          <div className="mt-2 text-xs text-base-content/60 inline-flex items-center gap-2">
            <span className="loading loading-spinner loading-xs" />
            로딩 중…
          </div>
        )}
      </div>
    </div>
  );
}
