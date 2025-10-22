"use client";

import { useEffect, useMemo } from "react";
import { useToast } from "@/components/ui";
import type { StrategyItem } from "@/types/strategy-config";
import type { StrategyRow } from "../types/table";

type Params = {
  items: StrategyItem[];
  selectedIds: Set<string>;
  onToggleRow: (idx: number, checked: boolean) => void;
  onToggleAll: (checked: boolean) => void;
  onDeleteSelected: () => void;
  onRowClick: (idx: number) => void;
  loading?: boolean;
  error?: string;
};

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
  const low = it.lowerTh ?? "-";
  const up = it.upperTh ?? "-";
  const touch = it.boxTouchPct ?? "-";
  const upper = it.trendRsiUpperPullback ?? "-";
  const lower = it.trendRsiLowerPullback ?? "-";
  return `BOX: ${low}~${up}, touch:${touch} | TREND: len:${it.rsiLength}, U:${upper}/L:${lower}`;
}

export function useStrategyConfigsTable(params: Params) {
  const {
    items,
    selectedIds,
    onToggleRow,
    onToggleAll,
    onDeleteSelected,
    onRowClick,
    loading = false,
    error = "",
  } = params;

  const { toast } = useToast();

  useEffect(() => {
    if (error && error.trim().length > 0) {
      toast({ title: "에러", description: error, variant: "error" });
    }
  }, [error, toast]);

  const allSelected =
    items.length > 0 && items.every((it) => selectedIds.has(it.id));
  const selectedCount = selectedIds.size;

  const rows: StrategyRow[] = useMemo(
    () =>
      items.map((it, idx) => ({
        idx,
        checked: selectedIds.has(it.id),
        updatedAt: new Date(it.updatedAt).toLocaleString(),
        name: it.name,
        kind: it.kind,
        detail: detailText(it),
      })),
    [items, selectedIds]
  );

  function handleDeleteSelected(): void {
    if (selectedCount === 0) return;
    onDeleteSelected();
    toast({
      title: "삭제 요청",
      description: `선택한 ${selectedCount}개 전략 삭제를 요청했습니다.`,
    });
  }

  return {
    rows,
    allSelected,
    selectedCount,
    loading,
    onToggleAll,
    onRowClick,
    onToggleRow,
    onDeleteSelected: handleDeleteSelected,
  };
}
