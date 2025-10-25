// src/app/admin/bots/list/hooks/useBotsList.ts
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { UseBotsListReturn, BotRow } from "../types";
import { parseBulkUpdate, parseList } from "../gaurd/bots";
import { useToast } from "@/components/ui";

export function useBotsList(): UseBotsListReturn {
  const { toast } = useToast();

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [rows, setRows] = useState<BotRow[]>([]);
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  const [starting, setStarting] = useState<boolean>(false);
  const [stopping, setStopping] = useState<boolean>(false);

  // 페이지네이션
  const [page, setPage] = useState<number>(1);
  const [pageSize] = useState<number>(20); // 고정 20
  const [total, setTotal] = useState<number>(0);

  const fetchList = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `/api/admin/bots/list?page=${page}&pageSize=${pageSize}`,
        { cache: "no-store" }
      );
      const json = await res.json();
      const parsed = parseList(json);
      if (!parsed.ok) {
        setError(parsed.error);
        toast({
          title: "목록 로드 실패",
          description: parsed.error,
          variant: "error",
        });
      } else {
        setRows(parsed.data);
        setTotal(parsed.total);
      }
    } catch {
      setError("NETWORK_ERROR");
      toast({
        title: "네트워크 오류",
        description: "잠시 후 다시 시도하세요.",
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  }, [toast, page, pageSize]);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  const refresh = useCallback(() => {
    fetchList();
  }, [fetchList]);

  const toggleOne = useCallback((botId: string) => {
    setSelected((prev) => ({ ...prev, [botId]: !prev[botId] }));
  }, []);

  const toggleAll = useCallback(
    (checked: boolean) => {
      setSelected(() => {
        const next: Record<string, boolean> = {};
        for (const r of rows) next[r.id] = checked;
        return next;
      });
    },
    [rows]
  );

  const clearSelection = useCallback(() => {
    setSelected({});
  }, []);

  const idsSelected = useMemo(
    () => Object.keys(selected).filter((k) => selected[k]),
    [selected]
  );

  const startSelected = useCallback(async () => {
    if (idsSelected.length === 0) {
      toast({ title: "선택 없음", description: "시작할 봇을 선택하세요." });
      return;
    }
    setStarting(true);
    try {
      const res = await fetch("/api/admin/bots/list", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "START", botIds: idsSelected }),
      });
      const json = await res.json();
      const parsed = parseBulkUpdate(json);
      if (!parsed.ok) {
        toast({
          title: "시작 실패",
          description: parsed.error,
          variant: "error",
        });
      } else {
        toast({
          title: "시작 완료",
          description: `${parsed.data.updated}개 봇 시작 요청`,
        });
        clearSelection();
        fetchList();
      }
    } catch {
      toast({
        title: "네트워크 오류",
        description: "시작 중 오류가 발생했습니다.",
        variant: "error",
      });
    } finally {
      setStarting(false);
    }
  }, [idsSelected, toast, clearSelection, fetchList]);

  const stopSelected = useCallback(async () => {
    if (idsSelected.length === 0) {
      toast({ title: "선택 없음", description: "종료할 봇을 선택하세요." });
      return;
    }
    setStopping(true);
    try {
      const res = await fetch("/api/admin/bots/list", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "STOP", botIds: idsSelected }),
      });
      const json = await res.json();
      const parsed = parseBulkUpdate(json);
      if (!parsed.ok) {
        toast({
          title: "종료 실패",
          description: parsed.error,
          variant: "error",
        });
      } else {
        toast({
          title: "종료 완료",
          description: `${parsed.data.updated}개 봇 종료 요청`,
        });
        clearSelection();
        fetchList();
      }
    } catch {
      toast({
        title: "네트워크 오류",
        description: "종료 중 오류가 발생했습니다.",
        variant: "error",
      });
    } finally {
      setStopping(false);
    }
  }, [idsSelected, toast, clearSelection, fetchList]);

  const value: UseBotsListReturn = useMemo(
    () => ({
      loading,
      error,
      rows,
      selected,
      toggleOne,
      toggleAll,
      clearSelection,
      refresh,
      starting,
      stopping,
      startSelected,
      stopSelected,
      page,
      pageSize,
      total,
      setPage,
    }),
    [
      loading,
      error,
      rows,
      selected,
      toggleOne,
      toggleAll,
      clearSelection,
      refresh,
      starting,
      stopping,
      startSelected,
      stopSelected,
      page,
      pageSize,
      total,
      setPage,
    ]
  );

  return value;
}
