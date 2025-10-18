"use client";

import type { BotLogItem } from "@/types/bot-logs";

type Props = {
  items: BotLogItem[];
  loading: boolean;
  error?: string;
};

export function LogsTable({ items, loading, error = "" }: Props) {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body p-4">
        <div className="flex items-center justify-between">
          <h2 className="card-title text-base">로그</h2>
          {loading && <span className="loading loading-spinner loading-sm" />}
        </div>

        {error && (
          <div role="alert" className="alert alert-error mt-2">
            <span className="font-medium">에러</span>
            <span className="truncate">{error}</span>
          </div>
        )}

        <div className="overflow-x-auto mt-2">
          <table className="table table-zebra table-sm">
            <thead>
              <tr>
                <th className="w-[170px]">시간</th>
                <th className="w-[90px]">레벨</th>
                <th className="w-[220px]">Bot</th>
                <th>메시지</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center text-sm">
                    {loading ? "불러오는 중…" : "로그가 없습니다."}
                  </td>
                </tr>
              ) : (
                items.map((it) => (
                  <tr key={it.id} className="align-top">
                    <td className="font-mono whitespace-pre">
                      {new Date(it.createdAt).toLocaleString()}
                    </td>
                    <td>
                      <span
                        className={[
                          "badge badge-sm",
                          it.level === "ERROR"
                            ? "badge-error"
                            : it.level === "WARN"
                              ? "badge-warning"
                              : it.level === "INFO"
                                ? "badge-info"
                                : "badge-ghost",
                        ].join(" ")}
                      >
                        {it.level}
                      </span>
                    </td>
                    <td className="font-mono">{it.botId}</td>
                    <td>
                      <pre className="whitespace-pre-wrap text-xs">
                        {it.message}
                      </pre>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
