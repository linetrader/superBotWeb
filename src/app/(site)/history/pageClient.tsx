"use client";

import { useEffect, useState } from "react";
import type { LogLevel } from "@/generated/prisma";
import { useBotLogs } from "./hooks/useBotLogs";
import { HistoryFilters } from "./components/HistoryFilters";
import { LogsTable } from "./components/LogsTable";
import { LoadMoreBar } from "./components/LoadMoreBar";

const PAGE_SIZE = 50;

export default function HistoryPageClient() {
  const vm = useBotLogs();
  const [botId, setBotId] = useState<string>("");
  const [level, setLevel] = useState<LogLevel | undefined>(undefined);

  useEffect(() => {
    // 최초 로드
    vm.loadFirst({
      botId: botId.trim().length > 0 ? botId.trim() : undefined,
      level,
      limit: PAGE_SIZE,
    }).catch(() => void 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 첫 마운트 1회

  const onRefresh = () =>
    vm.loadFirst({
      botId: botId.trim().length > 0 ? botId.trim() : undefined,
      level,
      limit: PAGE_SIZE,
    });

  return (
    <div className="p-4 space-y-4">
      <div className="navbar bg-base-100 shadow-sm rounded-box">
        <div className="flex-1">
          <span className="text-xl font-bold px-2">슈퍼봇 History</span>
        </div>
      </div>

      <HistoryFilters
        botId={botId}
        level={level}
        loading={vm.loading}
        onBotIdChange={setBotId}
        onLevelChange={setLevel}
        onRefresh={onRefresh}
      />

      <LogsTable items={vm.rows} loading={vm.loading} error={vm.error} />

      <LoadMoreBar
        hasMore={vm.hasMore}
        loading={vm.loading}
        onLoadMore={vm.loadMore}
      />
    </div>
  );
}
