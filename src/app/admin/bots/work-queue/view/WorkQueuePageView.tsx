// src/app/admin/bots/work-queue/view/WorkQueuePageView.tsx
"use client";

import { StatusFilter, WorkQueueRow } from "../types/list";
import { CleanupPanel } from "./CleanupPanel";
import { ListTable } from "./ListTable";

type WorkQueuePageViewProps = {
  loading: boolean;
  error: string | null;
  rows: WorkQueueRow[];

  page: number;
  pageSize: number;
  total: number;
  setPage: (n: number) => void;

  statusFilter: StatusFilter;
  setStatusFilter: (s: StatusFilter) => void;

  refresh: () => void;

  baseDate: string;
  keepDays: string;
  setBaseDate: (v: string) => void;
  setKeepDays: (v: string) => void;

  cleanupLoading: boolean;
  runCleanup: () => void;
};

export function WorkQueuePageView(props: WorkQueuePageViewProps) {
  const {
    loading,
    error,
    rows,
    page,
    pageSize,
    total,
    setPage,
    statusFilter,
    setStatusFilter,
    refresh,
    baseDate,
    keepDays,
    setBaseDate,
    setKeepDays,
    cleanupLoading,
    runCleanup,
  } = props;

  return (
    <main className="max-w-7xl mx-auto p-6 space-y-6">
      <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">작업 큐 모니터링</h1>
          <div className="text-xs text-base-content/60">
            WorkItem / WorkAttempt 현황
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <label className="form-control w-full md:w-auto">
            <div className="label">
              <span className="label-text text-xs font-semibold">
                상태 필터
              </span>
            </div>
            <select
              className="select select-bordered select-sm w-full md:w-40"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
            >
              <option value="ALL">ALL</option>
              <option value="QUEUED">QUEUED</option>
              <option value="IN_PROGRESS">IN_PROGRESS</option>
              <option value="SUCCEEDED">SUCCEEDED</option>
              <option value="FAILED">FAILED</option>
              <option value="CANCELED">CANCELED</option>
            </select>
          </label>

          <button
            type="button"
            className={`btn btn-sm ${loading ? "btn-disabled loading" : ""}`}
            disabled={loading}
            onClick={refresh}
          >
            {loading ? "갱신 중..." : "필터 적용"}
          </button>
        </div>
      </header>

      <CleanupPanel
        baseDate={baseDate}
        keepDays={keepDays}
        setBaseDate={setBaseDate}
        setKeepDays={setKeepDays}
        cleanupLoading={cleanupLoading}
        runCleanup={runCleanup}
      />

      <ListTable
        loading={loading}
        error={error}
        rows={rows}
        page={page}
        pageSize={pageSize}
        total={total}
        setPage={setPage}
        refresh={refresh}
      />
    </main>
  );
}
