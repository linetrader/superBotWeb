// src/app/strategy-configs/page.tsx
"use client";

import { useCallback, useMemo, useState } from "react";
import { Section, Caption } from "@/components/ui";
import type {
  StrategyItem,
  StrategyCreateBody,
  StrategyUpdateBody,
} from "@/types/strategy-config";
import { useStrategyConfigs } from "./hooks/useStrategyConfigs";
import { StrategyConfigsTable } from "./components/StrategyConfigsTable";
import CreateStrategyForm from "./components/CreateStrategyForm";
import EditStrategyForm from "./components/EditStrategyForm";

export default function StrategyConfigsPage() {
  const {
    items,
    loading,
    error,
    list,
    createOne,
    updateOne,
    deleteOne,
    setError,
  } = useStrategyConfigs();

  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [editTarget, setEditTarget] = useState<StrategyItem | null>(null);

  const onCreate = useCallback(
    async (body: StrategyCreateBody): Promise<void> => {
      const created = await createOne(body);
      if (created) {
        await list();
        setSelectedIds(new Set());
      }
    },
    [createOne, list]
  );

  const onUpdate = useCallback(
    async (body: StrategyUpdateBody): Promise<void> => {
      const updated = await updateOne(body);
      if (updated) {
        await list();
        setEditTarget(null);
      }
    },
    [updateOne, list]
  );

  const onToggleRow = useCallback(
    (idx: number, checked: boolean): void => {
      const id = items[idx]?.id;
      if (!id) return;
      setSelectedIds((prev) => {
        const next = new Set(prev);
        if (checked) next.add(id);
        else next.delete(id);
        return next;
      });
    },
    [items]
  );

  const onToggleAll = useCallback(
    (checked: boolean): void => {
      if (checked) setSelectedIds(new Set(items.map((i) => i.id)));
      else setSelectedIds(new Set());
    },
    [items]
  );

  const onRowClick = useCallback(
    (idx: number): void => {
      const it = items[idx];
      if (it) setEditTarget(it);
    },
    [items]
  );

  const onDeleteSelected = useCallback(async (): Promise<void> => {
    if (selectedIds.size === 0) return;
    for (const id of selectedIds) {
      const ok = await deleteOne({ id });
      if (!ok) break;
    }
    await list();
    setSelectedIds(new Set());
  }, [selectedIds, deleteOne, list]);

  const selectedCount = useMemo(() => selectedIds.size, [selectedIds]);

  return (
    <Section className="mx-auto max-w-5xl p-4">
      <Caption className="mb-3">Strategy Configs</Caption>

      <CreateStrategyForm
        onCreate={onCreate}
        error={error}
        setError={setError}
      />

      <StrategyConfigsTable
        items={items}
        selectedIds={selectedIds}
        onToggleRow={onToggleRow}
        onToggleAll={onToggleAll}
        onDeleteSelected={onDeleteSelected}
        onRowClick={onRowClick}
        loading={loading}
        error={error}
      />

      {editTarget && (
        <EditStrategyForm
          item={editTarget}
          onUpdate={onUpdate}
          onClose={() => setEditTarget(null)}
        />
      )}

      {/* 선택된 개수 보조 표기 (선택사항) */}
      {selectedCount > 0 && (
        <p className="mt-2 text-xs text-base-content/60">
          선택: {selectedCount}개
        </p>
      )}
    </Section>
  );
}
