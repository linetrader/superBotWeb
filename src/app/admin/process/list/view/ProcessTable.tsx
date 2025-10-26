// src/app/admin/process/list/view/ProcessTable.tsx
"use client";

import { useMemo, useCallback } from "react";
import type { ProcessRow } from "../types";

interface ProcessTableProps {
  loading: boolean;
  error: string | null;
  rows: ProcessRow[];
  page: number;
  pageSize: number;
  total: number;
  setPage: (page: number) => void;
  refresh: () => void;

  idsSelected: string[];
  toggleOne: (id: string) => void;

  stopLoadingMap: Record<string, boolean>;
  stopAllBotsForWorker: (workerId: string) => Promise<void>;
}

function ProcessTable(props: ProcessTableProps) {
  const {
    loading,
    error,
    rows,
    page,
    pageSize,
    total,
    setPage,
    refresh,
    idsSelected,
    toggleOne,
    stopLoadingMap,
    stopAllBotsForWorker,
  } = props;

  const totalPages = useMemo(() => {
    if (pageSize <= 0) {
      return 1;
    }
    const calc = Math.ceil(total / pageSize);
    return calc > 0 ? calc : 1;
  }, [total, pageSize]);

  const goPrev = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page, setPage]);

  const goNext = useCallback(() => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }, [page, totalPages, setPage]);

  function formatDate(iso: string | null): string {
    if (!iso) {
      return "-";
    }
    return iso.replace("T", " ").replace("Z", "");
  }

  function isSelected(id: string): boolean {
    return idsSelected.includes(id);
  }

  function isStopping(workerId: string): boolean {
    return Boolean(stopLoadingMap[workerId]);
  }

  return (
    <section className="card bg-base-100 shadow-md">
      <div className="card-body p-4 gap-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="text-sm text-base-content/70">
            총 {total}개 프로세스
          </div>

          <div className="flex items-center gap-2">
            <button
              className="btn btn-xs"
              disabled={page <= 1}
              onClick={goPrev}
            >
              «
            </button>
            <span className="text-sm">
              {page}/{totalPages}
            </span>
            <button
              className="btn btn-xs"
              disabled={page >= totalPages}
              onClick={goNext}
            >
              »
            </button>

            <button className="btn btn-xs btn-outline" onClick={refresh}>
              새로고침
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center gap-2 text-sm">
            <span className="loading loading-spinner loading-sm" />
            <span>로딩 중…</span>
          </div>
        ) : null}

        {error ? (
          <div className="alert alert-error text-sm">
            <span>에러: {error}</span>
          </div>
        ) : null}

        {!loading && !error && rows.length === 0 ? (
          <div className="text-sm text-base-content/70">
            표시할 프로세스가 없습니다.
          </div>
        ) : null}

        {!loading && !error && rows.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th />
                  <th>status</th>
                  <th>processId</th>
                  <th>taskArn</th>
                  <th>revision</th>
                  <th>botCount</th>
                  <th>createdAt</th>
                  <th>lastHeartbeat</th>
                  <th>updatedAt</th>
                  <th>actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => {
                  const aliveBadgeClass = row.alive
                    ? "badge badge-success"
                    : "badge badge-error";

                  const stopping = isStopping(row.id);

                  const hasConflict = row.conflictBotIds.length > 0;
                  const isZombie = row.isZombieSuspect;

                  return (
                    <tr
                      key={row.id}
                      className="hover:bg-base-200 transition-colors"
                    >
                      <td className="align-top">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs"
                          checked={isSelected(row.id)}
                          onChange={() => toggleOne(row.id)}
                        />
                      </td>

                      <td className="align-top">
                        <div className="flex flex-col gap-1">
                          <div className={aliveBadgeClass}>
                            {row.alive ? "ACTIVE" : "STALE"}
                          </div>

                          {hasConflict ? (
                            <div className="badge badge-warning text-[10px]">
                              CONFLICT
                            </div>
                          ) : null}

                          {isZombie ? (
                            <div className="badge badge-neutral text-[10px]">
                              ZOMBIE?
                            </div>
                          ) : null}
                        </div>
                      </td>

                      <td className="font-mono text-[11px] break-all align-top">
                        {row.id}
                      </td>

                      <td className="font-mono text-[11px] break-all align-top">
                        {row.taskArn ?? "-"}
                      </td>

                      <td className="text-[11px] align-top">
                        {row.revision ?? "-"}
                      </td>

                      <td className="text-[11px] align-top">{row.botCount}</td>

                      <td className="text-[11px] align-top">
                        {formatDate(row.createdAt)}
                      </td>

                      <td className="text-[11px] align-top">
                        {formatDate(row.lastHeartbeat)}
                      </td>

                      <td className="text-[11px] align-top">
                        {formatDate(row.updatedAt)}
                      </td>

                      <td className="align-top">
                        <button
                          className="btn btn-ghost btn-xs"
                          disabled={stopping}
                          onClick={() => stopAllBotsForWorker(row.id)}
                        >
                          {stopping ? (
                            <span className="loading loading-spinner loading-xs" />
                          ) : null}
                          <span>봇정지</span>
                        </button>

                        {hasConflict ? (
                          <div className="text-[10px] text-error mt-1 break-all">
                            {row.conflictBotIds.join(",")}
                          </div>
                        ) : null}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default ProcessTable;
