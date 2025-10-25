// src/app/admin/bots/list/hooks/useBotsList.ts
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { UseBotsListReturn, BotRow, RunningFilter } from "../types";
import { parseBulkUpdate, parseList } from "../gaurd/bots";
import { useToast } from "@/components/ui";

export function useBotsList(): UseBotsListReturn {
  const { toast } = useToast();

  // 기본 데이터 상태
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [rows, setRows] = useState<BotRow[]>([]);

  // 선택 상태
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  // START/STOP 진행 상태
  const [starting, setStarting] = useState<boolean>(false);
  const [stopping, setStopping] = useState<boolean>(false);

  // 페이지네이션
  const [page, setPage] = useState<number>(1);
  const [pageSize] = useState<number>(20); // 고정값
  const [total, setTotal] = useState<number>(0);

  // 러닝상태 필터
  const [runningFilter, setRunningFilterState] = useState<RunningFilter>("ALL");

  // 검색 UI 인풋 (타이핑 중인 값)
  const [usernameInput, setUsernameInputState] = useState<string>("");

  // 실제 서버에 적용된 필터 값
  const [usernameFilter, setUsernameFilterState] = useState<string>("");

  /**
   * 서버 목록 조회
   * GET /api/admin/bots/list?page=&pageSize=&running=&username=
   * username에는 usernameFilter 사용 (usernameInput 아님)
   */
  const fetchList = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      params.set("page", String(page));
      params.set("pageSize", String(pageSize));
      params.set("running", runningFilter);
      params.set("username", usernameFilter);

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
  }, [toast, page, pageSize, runningFilter, usernameFilter]);

  /**
   * page / runningFilter / usernameFilter 가 바뀔 때만 목록을 새로 호출
   * usernameInput 변경만으로는 호출되지 않는다.
   */
  useEffect(() => {
    fetchList();
  }, [fetchList]);

  /**
   * rows가 바뀌면 선택 초기화
   */
  useEffect(() => {
    setSelected({});
  }, [rows]);

  /**
   * 수동 새로고침
   */
  const refresh = useCallback(() => {
    fetchList();
  }, [fetchList]);

  /**
   * 단일 선택 토글
   */
  const toggleOne = useCallback((botId: string) => {
    setSelected((prev) => ({ ...prev, [botId]: !prev[botId] }));
  }, []);

  /**
   * 현재 rows 기준 전체 선택/해제
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
   * 선택된 bot id 배열
   */
  const idsSelected = useMemo<string[]>(
    () => Object.keys(selected).filter((k) => selected[k]),
    [selected]
  );

  /**
   * 일괄 START
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
   * 일괄 STOP
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
   * 러닝상태 필터 변경 시 page=1로 초기화
   */
  const setRunningFilter = useCallback((f: RunningFilter) => {
    setRunningFilterState(f);
    setPage(1);
  }, []);

  /**
   * username 인풋(onChange) 상태 업데이트
   * 이건 fetch를 유발하지 않는다.
   */
  const setUsernameInput = useCallback((v: string) => {
    setUsernameInputState(v);
  }, []);

  /**
   * "검색" 버튼 클릭 시:
   * - 실제 필터값(usernameFilterState)을 usernameInput으로 갱신
   * - page=1로 초기화
   * 이 변경이 일어나면 useEffect(fetchList) 가 돌면서 서버 호출됨.
   */
  const applyUsernameFilter = useCallback(() => {
    setUsernameFilterState(() => {
      // prevCurrent는 기존 서버 적용값. 우리는 항상 usernameInput으로 교체
      return usernameInput;
    });
    setPage(1);
  }, [usernameInput]);

  /**
   * 훅 결과(뷰에서 그대로 props로 쓴다)
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
      usernameInput,
      setUsernameInput,
      applyUsernameFilter,
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
      usernameInput,
      setUsernameInput,
      applyUsernameFilter,
    ]
  );

  return value;
}
