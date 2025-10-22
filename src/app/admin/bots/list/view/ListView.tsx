"use client";

import type { UseBotsListReturn, BotRow } from "../types";

function ModeBadge(props: { mode: "SINGLE" | "MULTI" }) {
  const { mode } = props;
  return (
    <div
      className={`badge ${mode === "SINGLE" ? "badge-info" : "badge-secondary"}`}
    >
      {mode}
    </div>
  );
}

function StatusBadge(props: { status: BotRow["status"]; running: boolean }) {
  const { status, running } = props;
  const cls =
    status === "ERROR"
      ? "badge-error"
      : running
        ? "badge-success"
        : "badge-ghost";
  return <div className={`badge ${cls}`}>{status}</div>;
}

function HeaderControls(props: {
  allChecked: boolean;
  onToggleAll: (checked: boolean) => void;
  onRefresh: () => void;
  onStart: () => void;
  onStop: () => void;
  starting: boolean;
  stopping: boolean;
}) {
  const {
    allChecked,
    onToggleAll,
    onRefresh,
    onStart,
    onStop,
    starting,
    stopping,
  } = props;
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <label className="label cursor-pointer">
          <span className="label-text mr-2">전체 선택</span>
          <input
            type="checkbox"
            className="checkbox"
            checked={allChecked}
            onChange={(e) => onToggleAll(e.currentTarget.checked)}
          />
        </label>
        <button className="btn" onClick={onRefresh}>
          새로고침
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button
          className={`btn btn-primary ${starting ? "btn-disabled" : ""}`}
          onClick={onStart}
          disabled={starting}
        >
          {starting ? "시작 중..." : "선택 시작"}
        </button>
        <button
          className={`btn ${stopping ? "btn-disabled" : ""}`}
          onClick={onStop}
          disabled={stopping}
        >
          {stopping ? "종료 중..." : "선택 종료"}
        </button>
      </div>
    </div>
  );
}

function BotsTable(props: {
  rows: BotRow[];
  selected: Record<string, boolean>;
  onToggle: (botId: string) => void;
}) {
  const { rows, selected, onToggle } = props;

  const headerCells = [
    <th key="_sel" />,
    <th key="username">username</th>,
    <th key="name">name</th>,
    <th key="mode">mode</th>,
    <th key="status">러닝상태</th>,
  ];

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>{headerCells}</tr>
        </thead>
        <tbody>
          {rows.map((r) => {
            const checked = selected[r.id] === true;
            const rowCells = [
              <td key="sel">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={checked}
                  onChange={() => onToggle(r.id)}
                />
              </td>,
              <td key="username">{r.username}</td>,
              <td key="name">{r.name}</td>,
              <td key="mode">
                <ModeBadge mode={r.mode} />
              </td>,
              <td key="status">
                <StatusBadge status={r.status} running={r.running} />
              </td>,
            ];
            return <tr key={r.id}>{rowCells}</tr>;
          })}
          {rows.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center">
                데이터가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function Pagination(props: {
  page: number;
  pageSize: number;
  total: number;
  setPage: (p: number) => void;
}) {
  const { page, pageSize, total, setPage } = props;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const prev = () => setPage(Math.max(1, page - 1));
  const next = () => setPage(Math.min(totalPages, page + 1));

  return (
    <div className="flex items-center justify-center gap-2 mt-3">
      <button className="btn btn-sm" onClick={prev} disabled={page <= 1}>
        « 이전
      </button>
      <span className="text-sm">
        {page} / {totalPages} (총 {total}개)
      </span>
      <button
        className="btn btn-sm"
        onClick={next}
        disabled={page >= totalPages}
      >
        다음 »
      </button>
    </div>
  );
}

export default function ListView(props: UseBotsListReturn) {
  const {
    loading,
    error,
    rows,
    selected,
    toggleOne,
    toggleAll,
    refresh,
    starting,
    stopping,
    startSelected,
    stopSelected,
    page,
    pageSize,
    total,
    setPage,
  } = props;

  const allChecked = rows.length > 0 && rows.every((r) => selected[r.id]);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">어드민 · 봇 리스트</h1>

      <HeaderControls
        allChecked={allChecked}
        onToggleAll={toggleAll}
        onRefresh={refresh}
        onStart={startSelected}
        onStop={stopSelected}
        starting={starting}
        stopping={stopping}
      />

      {error && (
        <div className="alert alert-error mt-2">
          <span>{error}</span>
        </div>
      )}

      {loading ? (
        <div className="flex items-center gap-2">
          <span className="loading loading-spinner loading-md" />
          <span>불러오는 중…</span>
        </div>
      ) : (
        <>
          <BotsTable rows={rows} selected={selected} onToggle={toggleOne} />
          <Pagination
            page={page}
            pageSize={pageSize}
            total={total}
            setPage={setPage}
          />
        </>
      )}
    </div>
  );
}
