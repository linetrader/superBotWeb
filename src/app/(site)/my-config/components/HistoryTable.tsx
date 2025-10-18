"use client";

import { Table } from "@/components/ui";
import type { UseMyConfigReturn } from "../hooks/useMyConfig";

type Props = { vm: UseMyConfigReturn };

export function HistoryTable({ vm }: Props) {
  const { history, selectedRowIndexes, onToggleRow, onToggleAll } = vm;

  const head: [string, string, string] = ["수정시각", "거래소", "생성시각"];
  const rows: [string, string, string][] = history.map((h) => [
    new Date(h.updatedAt).toLocaleString(),
    `${h.exchangeName} (${h.exchangeCode})`,
    new Date(h.createdAt).toLocaleString(),
  ]);

  return (
    <>
      <h2 className="mb-3 text-base font-semibold">API 저장 내역</h2>
      <Table
        head={head}
        rows={rows}
        stickyHeader
        zebra
        dense
        colAlign={["left", "left", "left"]}
        selectable
        selectedRowIndexes={selectedRowIndexes}
        onToggleRow={onToggleRow}
        onToggleAll={onToggleAll}
      />
    </>
  );
}
