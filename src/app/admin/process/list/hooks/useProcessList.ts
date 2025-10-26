// src/app/admin/process/list/hooks/useProcessList.ts
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useToast } from "@/components/ui";
import {
  parseProcessListResponse,
  parseBulkDeleteResponse,
  parseStopAllResponse,
} from "../gaurd/process";

import type {
  AliveFilter,
  ProcessRow,
  UseProcessListReturn,
  ProcessListResponse,
  BulkDeleteResponse,
  StopAllResponse,
} from "../types";

export function useProcessList(): UseProcessListReturn {
  const { toast } = useToast();

  const [loading, setLoading] = useState<boolean>(false);
  const [deleting, setDeleting] = useState<boolean>(false);

  const [error, setError] = useState<string | null>(null);

  const [rows, setRows] = useState<ProcessRow[]>([]);

  const [page, setPage] = useState<number>(1);
  const [pageSize] = useState<number>(20);
  const [total, setTotal] = useState<number>(0);

  const [aliveFilter, setAliveFilterState] = useState<AliveFilter>("ALL");

  // workerId별 stop-all in-flight 여부
  const [stopLoadingMap, setStopLoadingMap] = useState<Record<string, boolean>>(
    {}
  );

  // 선택된 process rows
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  const idsSelected = useMemo(() => {
    return Object.keys(selected).filter((id) => selected[id]);
  }, [selected]);

  const setAliveFilter = useCallback((f: AliveFilter) => {
    setAliveFilterState(f);
    setPage(1);
    setSelected({});
  }, []);

  const toggleOne = useCallback((id: string) => {
    setSelected((prev) => {
      const next: Record<string, boolean> = { ...prev };
      next[id] = !next[id];
      return next;
    });
  }, []);

  const toggleAll = useCallback((currentRows: ProcessRow[]) => {
    setSelected((prev) => {
      const allSelected = currentRows.every((r) => prev[r.id]);
      const next: Record<string, boolean> = { ...prev };

      if (allSelected) {
        for (const r of currentRows) {
          next[r.id] = false;
        }
      } else {
        for (const r of currentRows) {
          next[r.id] = true;
        }
      }

      return next;
    });
  }, []);

  const clearSelection = useCallback(() => {
    setSelected({});
  }, []);

  const fetchList = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      params.set("page", String(page));
      params.set("pageSize", String(pageSize));
      if (aliveFilter !== "ALL") {
        params.set("alive", aliveFilter);
      }

      const res = await fetch(`/api/admin/process/list?${params.toString()}`, {
        method: "GET",
        cache: "no-store",
      });

      const json = (await res.json()) as unknown;
      const parsed: ProcessListResponse = parseProcessListResponse(json);

      if (!parsed.ok) {
        const msg = parsed.error ?? "UNKNOWN_ERROR";
        setError(msg);
        toast({
          variant: "error",
          description: msg,
        });
      } else {
        setRows(parsed.data);
        setTotal(parsed.total);
        // keep selection as-is intentionally
      }
    } catch {
      const msg = "FETCH_FAILED";
      setError(msg);
      toast({
        variant: "error",
        description: msg,
      });
    } finally {
      setLoading(false);
    }
  }, [aliveFilter, page, pageSize, toast]);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  const refresh = useCallback(() => {
    fetchList();
  }, [fetchList]);

  // 기존 bulk delete (STALE만)
  const canDeleteSelected = useMemo(() => {
    if (idsSelected.length === 0) {
      return false;
    }
    const selectedSet = new Set(idsSelected);
    return rows
      .filter((r) => selectedSet.has(r.id))
      .every((r) => r.alive === false);
  }, [idsSelected, rows]);

  const deleteSelected = useCallback(async () => {
    if (!canDeleteSelected || idsSelected.length === 0) {
      toast({
        variant: "error",
        description: "삭제할 수 없는 항목입니다.",
      });
      return;
    }

    setDeleting(true);
    try {
      const res = await fetch(`/api/admin/process/list`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          processIds: idsSelected,
        }),
      });

      const json = (await res.json()) as unknown;
      const parsed: BulkDeleteResponse = parseBulkDeleteResponse(json);

      if (!parsed.ok) {
        const msg = parsed.error ?? "UNKNOWN_ERROR";
        toast({
          variant: "error",
          description: msg,
        });
      } else {
        clearSelection();
        fetchList();
      }
    } catch {
      toast({
        variant: "error",
        description: "DELETE_FAILED",
      });
    } finally {
      setDeleting(false);
    }
  }, [canDeleteSelected, idsSelected, toast, clearSelection, fetchList]);

  /**
   * 특정 workerId가 현재 붙잡고 있는 봇들을 모두 STOP시키도록
   * /api/admin/process/[workerId]/stop-all POST 호출
   */
  const stopAllBotsForWorker = useCallback(
    async (workerId: string) => {
      // 중복 클릭 방지
      setStopLoadingMap((prev) => {
        const next: Record<string, boolean> = { ...prev };
        next[workerId] = true;
        return next;
      });

      try {
        const res = await fetch(`/api/admin/process/${workerId}/stop-all`, {
          method: "POST",
        });

        const json = (await res.json()) as unknown;
        const parsed: StopAllResponse = parseStopAllResponse(json);

        if (!parsed.ok) {
          const msg = parsed.error ?? "UNKNOWN_ERROR";
          toast({
            variant: "error",
            description: msg,
          });
        } else {
          // 성공 케이스: 몇 개 요청 들어갔는지 알려주기
          const stoppedCount = parsed.data.stoppedOkIds.length;
          toast({
            // 성공 토스트는 error variant 아님
            description: `정지 요청 완료 (${stoppedCount} bots)`,
          });
          // 상태 갱신
          fetchList();
        }
      } catch {
        toast({
          variant: "error",
          description: "STOP_ALL_FAILED",
        });
      } finally {
        setStopLoadingMap((prev) => {
          const next: Record<string, boolean> = { ...prev };
          next[workerId] = false;
          return next;
        });
      }
    },
    [toast, fetchList]
  );

  const value: UseProcessListReturn = useMemo(
    () => ({
      loading,
      error,

      rows,

      page,
      pageSize,
      total,
      setPage,

      aliveFilter,
      setAliveFilter,

      idsSelected,
      toggleOne,
      toggleAll,
      clearSelection,

      deleting,
      deleteSelected,

      stopLoadingMap,
      stopAllBotsForWorker,

      refresh,
    }),
    [
      loading,
      error,
      rows,
      page,
      pageSize,
      total,
      setPage,
      aliveFilter,
      setAliveFilter,
      idsSelected,
      toggleOne,
      toggleAll,
      clearSelection,
      deleting,
      deleteSelected,
      stopLoadingMap,
      stopAllBotsForWorker,
      refresh,
    ]
  );

  return value;
}
