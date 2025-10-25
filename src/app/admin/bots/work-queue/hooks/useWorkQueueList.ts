// src/app/admin/bots/work-queue/hooks/useWorkQueueList.ts
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  UseWorkQueueListReturn,
  WorkQueueRow,
  StatusFilter,
} from "../types/list";
import { parseListResponse, parseCleanupResponse } from "../gaurd/workItems";
import { useToast } from "@/components/ui";

function getTodayYMD(): string {
  const d = new Date();
  const yyyy = d.getUTCFullYear();
  const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(d.getUTCDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export function useWorkQueueList(): UseWorkQueueListReturn {
  const { toast } = useToast();

  // 목록 상태
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [rows, setRows] = useState<WorkQueueRow[]>([]);

  const [page, setPage] = useState<number>(1);
  const [pageSize] = useState<number>(20);
  const [total, setTotal] = useState<number>(0);

  const [statusFilter, setStatusFilterState] = useState<StatusFilter>("ALL");

  // cleanup 폼 상태
  const [baseDate, setBaseDate] = useState<string>(getTodayYMD());
  const [keepDays, setKeepDays] = useState<string>("30");
  const [cleanupLoading, setCleanupLoading] = useState<boolean>(false);

  // 목록 fetch
  const fetchList = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      params.set("page", String(page));
      params.set("pageSize", String(pageSize));
      if (statusFilter !== "ALL") {
        params.set("status", statusFilter);
      }

      const res = await fetch(
        `/api/admin/bots/work-queue/list?${params.toString()}`,
        {
          cache: "no-store",
        }
      );

      const json = await res.json();
      const parsed = parseListResponse(json);

      if (parsed.ok === true) {
        setRows(parsed.data);
        setTotal(parsed.total);
      } else {
        setError(parsed.error);
        toast({
          title: "목록 로드 실패",
          description: parsed.error,
          variant: "error",
        });
      }
    } catch {
      setError("NETWORK_ERROR");
      toast({
        title: "네트워크 오류",
        description: "작업 큐 목록을 가져오지 못했습니다.",
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  }, [page, pageSize, statusFilter, toast]);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  const refresh = useCallback(() => {
    fetchList();
  }, [fetchList]);

  // 상태 필터 변경 시 페이지 1로
  const setStatusFilter = useCallback((f: StatusFilter) => {
    setStatusFilterState(f);
    setPage(1);
  }, []);

  // cleanup 실행
  const runCleanup = useCallback(async () => {
    const keepDaysNum = parseInt(keepDays, 10);

    if (
      !baseDate ||
      !/^\d{4}-\d{2}-\d{2}$/.test(baseDate) ||
      Number.isNaN(keepDaysNum) ||
      keepDaysNum < 0
    ) {
      toast({
        title: "입력값 오류",
        description: "기준일 또는 보관일수를 확인하세요.",
        variant: "error",
      });
      return;
    }

    setCleanupLoading(true);
    try {
      const res = await fetch("/api/admin/bots/work-queue/cleanup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          baseDate,
          keepDays: keepDaysNum,
        }),
      });

      const json = await res.json();
      const parsed = parseCleanupResponse(json);

      if (parsed.ok === true) {
        toast({
          title: "정리 완료",
          description: `${parsed.deleted}건 삭제 (cutoff ${parsed.cutoffIso})`,
        });
        // 정리 후 목록 새로고침
        fetchList();
      } else {
        toast({
          title: "정리 실패",
          description: parsed.error,
          variant: "error",
        });
      }
    } catch {
      toast({
        title: "네트워크 오류",
        description: "정리 요청에 실패했습니다.",
        variant: "error",
      });
    } finally {
      setCleanupLoading(false);
    }
  }, [baseDate, keepDays, fetchList, toast]);

  const value: UseWorkQueueListReturn = useMemo(
    () => ({
      loading,
      error,
      rows,
      page,
      pageSize,
      total,
      statusFilter,
      setStatusFilter,
      setPage,
      refresh,
      baseDate,
      keepDays,
      setBaseDate,
      setKeepDays,
      cleanupLoading,
      runCleanup,
    }),
    [
      loading,
      error,
      rows,
      page,
      pageSize,
      total,
      statusFilter,
      setStatusFilter,
      setPage,
      refresh,
      baseDate,
      keepDays,
      setBaseDate,
      setKeepDays,
      cleanupLoading,
      runCleanup,
    ]
  );

  return value;
}
