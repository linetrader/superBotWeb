// src/app/admin/bots/list/hooks/useBotsList.ts
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { UseBotsListReturn, BotRow, RunningFilter } from "../types";
import { parseBulkUpdate, parseList } from "../gaurd/bots";
import { useToast } from "@/components/ui";

export function useBotsList(): UseBotsListReturn {
  const { toast } = useToast();

  // 로딩/에러/데이터
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [rows, setRows] = useState<BotRow[]>([]);

  // 선택 체크박스 상태: { [botId]: true }
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  // 일괄 시작/종료 중인지 플래그
  const [starting, setStarting] = useState<boolean>(false);
  const [stopping, setStopping] = useState<boolean>(false);

  // 페이지네이션
  const [page, setPage] = useState<number>(1);
  const [pageSize] = useState<number>(20); // 고정 20
  const [total, setTotal] = useState<number>(0);

  // 러닝 상태 필터 ("ALL" | "RUNNING" | "STOPPED" | "ERROR")
  const [runningFilter, setRunningFilterState] = useState<RunningFilter>("ALL");

  /**
   * 목록 조회
   * 서버 쿼리 파라미터:
   *   page, pageSize, running=[ALL|RUNNING|STOPPED|ERROR]
   */
  const fetchList = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      params.set("page", String(page));
      params.set("pageSize", String(pageSize));
      params.set("running", runningFilter); // 항상 붙여서 서버 where에 반영

      const res = await fetch(`/api/admin/bots/list?${params.toString()}`, {
        cache: "no-store",
      });

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
  }, [toast, page, pageSize, runningFilter]);

  /**
   * page / runningFilter 등이 바뀔 때마다 목록 로드
   */
  useEffect(() => {
    fetchList();
  }, [fetchList]);

  /**
   * rows가 바뀌면 기존 선택 상태가 더 이상 유효하지 않을 수 있으므로
   * 안전하게 selection 초기화
   */
  useEffect(() => {
    setSelected({});
  }, [rows]);

  /**
   * 외부에서 강제 새로고침하고 싶을 때
   */
  const refresh = useCallback(() => {
    fetchList();
  }, [fetchList]);

  /**
   * 단일 행 토글
   */
  const toggleOne = useCallback((botId: string) => {
    setSelected((prev) => ({ ...prev, [botId]: !prev[botId] }));
  }, []);

  /**
   * 현재 rows 기준 전체 선택 / 해제
   */
  const toggleAll = useCallback(
    (checked: boolean) => {
      setSelected(() => {
        const next: Record<string, boolean> = {};
        for (const r of rows) {
          next[r.id] = checked;
        }
        return next;
      });
    },
    [rows]
  );

  /**
   * 선택 비우기
   */
  const clearSelection = useCallback(() => {
    setSelected({});
  }, []);

  /**
   * 선택된 bot id 목록
   */
  const idsSelected = useMemo(
    () => Object.keys(selected).filter((k) => selected[k]),
    [selected]
  );

  /**
   * 일괄 시작
   */
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
          title: "시작 요청 완료",
          description: `${parsed.data.updated}개 봇 START_BOT enqueued`,
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

  /**
   * 일괄 종료
   */
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
          title: "종료 요청 완료",
          description: `${parsed.data.updated}개 봇 STOP_BOT enqueued`,
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

  /**
   * 러닝 상태 필터 선택 핸들러
   * 필터를 바꾸면 페이지는 1로 초기화
   */
  const setRunningFilter = useCallback((f: RunningFilter) => {
    setRunningFilterState(f);
    setPage(1);
  }, []);

  /**
   * 리턴 오브젝트 (ListView 쪽에서 그대로 props로 씀)
   */
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
      runningFilter,
      setRunningFilter,
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
      runningFilter,
      setRunningFilter,
    ]
  );

  return value;
}
