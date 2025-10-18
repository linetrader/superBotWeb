"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import type { BotLogItem, BotLogListResponse } from "@/types/bot-logs";
import type { LogLevel } from "@/generated/prisma";

type LoadParams = {
  botId?: string;
  level?: LogLevel;
  limit?: number;
  cursorTs?: string;
  cursorId?: string;
};

export function useBotLogs(initial?: {
  items: BotLogItem[];
  nextCursor: { cursorTs: string; cursorId: string } | null;
}) {
  const [rows, setRows] = useState<BotLogItem[]>(initial?.items ?? []);
  const [nextCursor, setNextCursor] = useState(initial?.nextCursor ?? null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const lastQuery = useRef<{
    botId?: string;
    level?: LogLevel;
    limit?: number;
  }>({});

  const fetchPage = useCallback(async (params: LoadParams) => {
    const qs = new URLSearchParams();
    if (params.botId) qs.set("botId", params.botId);
    if (params.level) qs.set("level", params.level);
    if (params.limit) qs.set("limit", String(params.limit));
    if (params.cursorTs) qs.set("cursorTs", params.cursorTs);
    if (params.cursorId) qs.set("cursorId", params.cursorId);

    const res = await fetch(`/api/bot-logs?${qs.toString()}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      const txt = await res.text();
      throw new Error(txt || `HTTP ${res.status}`);
    }
    const data = (await res.json()) as BotLogListResponse;
    return data;
  }, []);

  const loadFirst = useCallback(
    async (q: { botId?: string; level?: LogLevel; limit?: number }) => {
      setLoading(true);
      setError("");
      try {
        lastQuery.current = q;
        const data = await fetchPage({ ...q });
        setRows(data.items);
        setNextCursor(data.nextCursor);
      } catch (e) {
        setError(e instanceof Error ? e.message : "UNKNOWN_ERROR");
      } finally {
        setLoading(false);
      }
    },
    [fetchPage]
  );

  const loadMore = useCallback(async () => {
    if (!nextCursor) return;
    setLoading(true);
    setError("");
    try {
      const data = await fetchPage({
        ...lastQuery.current,
        cursorTs: nextCursor.cursorTs,
        cursorId: nextCursor.cursorId,
      });
      setRows((prev) => prev.concat(data.items));
      setNextCursor(data.nextCursor);
    } catch (e) {
      setError(e instanceof Error ? e.message : "UNKNOWN_ERROR");
    } finally {
      setLoading(false);
    }
  }, [fetchPage, nextCursor]);

  const hasMore = useMemo(() => nextCursor !== null, [nextCursor]);

  return {
    rows,
    loading,
    error,
    hasMore,
    loadFirst,
    loadMore,
  };
}
