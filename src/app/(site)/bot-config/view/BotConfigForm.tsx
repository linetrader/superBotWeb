// src/app/(site)/bot-config/view/BotConfigForm.tsx
"use client";

import { useToast } from "@/components/ui";
import { postJson } from "../lib/fetcher";
import { useBotConfigForm } from "../hooks/useBotConfigForm";
import { useBots } from "../hooks/useBots";
import {
  ApiResponse,
  BotConfigPayload,
  BotMode,
  GroupKey,
  MarketKind,
} from "@/types/bot-config";

export default function BotConfigForm() {
  const { toast } = useToast();

  // 폼 상태 훅
  const form = useBotConfigForm({});

  // 봇/메타 훅
  const {
    strategies,
    loadingStrategies,
    markets,
    exchangeNames,
    loadingMarkets,
    marketsError,
    marketsByExchangeName,

    bots,
    loadingBots,
    botsError,
    hasBots,
    loadBots,
    startBot,
    stopBot,

    // 선택/삭제 관련
    selectedBotId,
    setSelectedBotId,
    deleteBot,
    deletingId,
  } = useBots();

  async function onSubmit() {
    const v = form.validate();
    if (!v.ok) {
      toast({ title: "유효성 오류", description: v.message, variant: "error" });
      return;
    }

    const payload = form.composePayload();
    form.setSubmit({ submitting: true });
    try {
      const res = await postJson<BotConfigPayload, ApiResponse<unknown>>(
        "/api/bot-config",
        payload
      );
      if (res.ok) {
        toast({ title: "저장 완료", description: "봇 구성이 저장되었습니다." });
        form.setSubmit({ submitting: false, success: true });
        await loadBots();
      } else {
        toast({
          title: "저장 실패",
          description: `${res.error}${typeof res.code === "string" ? ` (${res.code})` : ""}`,
          variant: "error",
        });
        form.setSubmit({ submitting: false, error: res.error });
      }
    } catch {
      toast({
        title: "네트워크 오류",
        description: "저장 중 오류가 발생했습니다.",
        variant: "error",
      });
      form.setSubmit({ submitting: false, error: "network" });
    }
  }

  // 선택된 봇 삭제
  const onDeleteSelected = async () => {
    if (!selectedBotId) return;
    const ok = window.confirm(
      "선택한 봇을 삭제할까요? 이 동작은 되돌릴 수 없습니다."
    );
    if (!ok) return;
    const res = await deleteBot(selectedBotId);
    if (res.ok) {
      if (selectedBotId) setSelectedBotId(null);
      toast({ title: "삭제 완료", description: "봇이 삭제되었습니다." });
      await loadBots();
    } else {
      toast({
        title: "삭제 실패",
        description: res.error ?? "삭제 중 오류가 발생했습니다.",
        variant: "error",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* 설정 카드 */}
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <h2 className="card-title">트레이딩 봇 설정</h2>

          {marketsError ? (
            <div className="alert alert-error">메타 로드 실패</div>
          ) : null}

          {/* 공통 필드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">봇 이름</span>
              </label>
              <input
                className="input input-bordered"
                value={form.name}
                onChange={(e) => form.setName(e.target.value)}
                placeholder="name"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">심볼</span>
              </label>
              <input
                className="input input-bordered"
                value={form.symbol}
                onChange={(e) => form.setSymbol(e.target.value)}
                placeholder="e.g. BTCUSDT"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">전략</span>
              </label>
              <select
                className="select select-bordered"
                value={form.strategyConfigId}
                onChange={(e) => form.setStrategyConfigId(e.target.value)}
                disabled={loadingStrategies}
              >
                <option value="">전략 선택</option>
                {strategies.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 모드 탭 */}
          <div role="tablist" className="tabs tabs-bordered mt-4">
            <input
              type="radio"
              role="tab"
              className="tab"
              name="bot-mode"
              aria-label="SINGLE"
              checked={form.mode === BotMode.SINGLE}
              onChange={form.setModeSingle}
            />
            <div role="tabpanel" className="tab-content p-4">
              {/* SINGLE 전용 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">거래소-마켓</span>
                  </label>
                  <select
                    className="select select-bordered"
                    value={form.exchangeMarketId}
                    onChange={(e) => form.setExchangeMarketId(e.target.value)}
                    disabled={loadingMarkets}
                  >
                    <option value="">선택</option>
                    {markets.map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.exchangeName} / {m.marketName} / {m.symbol}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">마켓 종류</span>
                  </label>
                  <select
                    className="select select-bordered"
                    value={form.singleMarketKind}
                    onChange={(e) =>
                      form.setSingleMarketKind(e.target.value as MarketKind)
                    }
                  >
                    <option value={MarketKind.SPOT}>SPOT</option>
                    <option value={MarketKind.FUTURES}>FUTURES</option>
                  </select>
                </div>
              </div>
            </div>

            <input
              type="radio"
              role="tab"
              className="tab"
              name="bot-mode"
              aria-label="MULTI"
              checked={form.mode === BotMode.MULTI}
              onChange={form.setModeMulti}
            />
            <div role="tabpanel" className="tab-content p-4">
              {/* MULTI 전용: A/B 그룹 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Group A */}
                <div className="card bg-base-200">
                  <div className="card-body">
                    <h3 className="card-title">그룹 A</h3>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => form.addExchangeToGroup(GroupKey.A)}
                    >
                      거래소 추가
                    </button>

                    <div className="mt-3 space-y-3">
                      {form.groupA.exchanges.map((row, idx) => {
                        const selectedExName =
                          form.groupAExchangeNames[idx] ?? "";
                        const options = marketsByExchangeName(selectedExName);
                        return (
                          <div
                            key={`A-${idx}`}
                            className="p-3 rounded bg-base-100 border"
                          >
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">거래소</span>
                              </label>
                              <select
                                className="select select-bordered"
                                value={selectedExName}
                                onChange={(e) =>
                                  form.setRowExchangeName(
                                    GroupKey.A,
                                    idx,
                                    e.target.value
                                  )
                                }
                                disabled={loadingMarkets}
                              >
                                <option value="">선택</option>
                                {exchangeNames.map((name) => (
                                  <option key={name} value={name}>
                                    {name}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div className="form-control mt-2">
                              <label className="label">
                                <span className="label-text">마켓</span>
                              </label>
                              <select
                                className="select select-bordered"
                                value={row.exchangeMarketId}
                                onChange={(e) =>
                                  form.updateExchangeRow(GroupKey.A, idx, {
                                    exchangeMarketId: e.target.value,
                                  })
                                }
                                disabled={
                                  loadingMarkets || selectedExName.length === 0
                                }
                              >
                                <option value="">선택</option>
                                {options.map((m) => (
                                  <option key={m.id} value={m.id}>
                                    {m.symbol} / {m.marketName}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div className="form-control mt-2">
                              <label className="label">
                                <span className="label-text">
                                  배분(bps, 10000=100%)
                                </span>
                              </label>
                              <input
                                type="number"
                                className="input input-bordered"
                                value={row.allocationBps}
                                min={0}
                                max={10000}
                                onChange={(e) =>
                                  form.updateExchangeRow(GroupKey.A, idx, {
                                    allocationBps: Number(e.target.value),
                                  })
                                }
                              />
                            </div>

                            <div className="form-control mt-2">
                              <label className="cursor-pointer label">
                                <span className="label-text">활성화</span>
                                <input
                                  type="checkbox"
                                  className="toggle"
                                  checked={
                                    typeof row.enabled === "boolean"
                                      ? row.enabled
                                      : true
                                  }
                                  onChange={(e) =>
                                    form.updateExchangeRow(GroupKey.A, idx, {
                                      enabled: e.target.checked,
                                    })
                                  }
                                />
                              </label>
                            </div>

                            <div className="mt-2">
                              <button
                                className="btn btn-sm btn-error"
                                onClick={() =>
                                  form.removeExchangeRow(GroupKey.A, idx)
                                }
                              >
                                삭제
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Group B */}
                <div className="card bg-base-200">
                  <div className="card-body">
                    <h3 className="card-title">그룹 B</h3>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => form.addExchangeToGroup(GroupKey.B)}
                    >
                      거래소 추가
                    </button>

                    <div className="mt-3 space-y-3">
                      {form.groupB.exchanges.map((row, idx) => {
                        const selectedExName =
                          form.groupBExchangeNames[idx] ?? "";
                        const options = marketsByExchangeName(selectedExName);
                        return (
                          <div
                            key={`B-${idx}`}
                            className="p-3 rounded bg-base-100 border"
                          >
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">거래소</span>
                              </label>
                              <select
                                className="select select-bordered"
                                value={selectedExName}
                                onChange={(e) =>
                                  form.setRowExchangeName(
                                    GroupKey.B,
                                    idx,
                                    e.target.value
                                  )
                                }
                                disabled={loadingMarkets}
                              >
                                <option value="">선택</option>
                                {exchangeNames.map((name) => (
                                  <option key={name} value={name}>
                                    {name}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div className="form-control mt-2">
                              <label className="label">
                                <span className="label-text">마켓</span>
                              </label>
                              <select
                                className="select select-bordered"
                                value={row.exchangeMarketId}
                                onChange={(e) =>
                                  form.updateExchangeRow(GroupKey.B, idx, {
                                    exchangeMarketId: e.target.value,
                                  })
                                }
                                disabled={
                                  loadingMarkets || selectedExName.length === 0
                                }
                              >
                                <option value="">선택</option>
                                {options.map((m) => (
                                  <option key={m.id} value={m.id}>
                                    {m.symbol} / {m.marketName}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div className="form-control mt-2">
                              <label className="label">
                                <span className="label-text">
                                  배분(bps, 10000=100%)
                                </span>
                              </label>
                              <input
                                type="number"
                                className="input input-bordered"
                                value={row.allocationBps}
                                min={0}
                                max={10000}
                                onChange={(e) =>
                                  form.updateExchangeRow(GroupKey.B, idx, {
                                    allocationBps: Number(e.target.value),
                                  })
                                }
                              />
                            </div>

                            <div className="form-control mt-2">
                              <label className="cursor-pointer label">
                                <span className="label-text">활성화</span>
                                <input
                                  type="checkbox"
                                  className="toggle"
                                  checked={
                                    typeof row.enabled === "boolean"
                                      ? row.enabled
                                      : true
                                  }
                                  onChange={(e) =>
                                    form.updateExchangeRow(GroupKey.B, idx, {
                                      enabled: e.target.checked,
                                    })
                                  }
                                />
                              </label>
                            </div>

                            <div className="mt-2">
                              <button
                                className="btn btn-sm btn-error"
                                onClick={() =>
                                  form.removeExchangeRow(GroupKey.B, idx)
                                }
                              >
                                삭제
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 액션 */}
          <div className="card-actions justify-end mt-6">
            <button
              className="btn btn-primary"
              onClick={onSubmit}
              disabled={
                form.submit.submitting || loadingMarkets || loadingStrategies
              }
            >
              {form.submit.submitting ? "저장중..." : "저장"}
            </button>
          </div>
        </div>
      </div>

      {/* 봇 리스트 */}
      <div className="card bg-base-100 shadow mt-8">
        <div className="card-body">
          <div className="flex items-center justify-between">
            <h3 className="card-title">봇 리스트</h3>
            <div className="flex items-center gap-2">
              <button
                className="btn btn-sm"
                onClick={loadBots}
                disabled={loadingBots}
              >
                {loadingBots ? "새로고침..." : "새로고침"}
              </button>
              <button
                className="btn btn-sm btn-error"
                onClick={onDeleteSelected}
                disabled={
                  loadingBots || !selectedBotId || deletingId === selectedBotId
                }
              >
                {deletingId === selectedBotId ? "삭제중..." : "선택 삭제"}
              </button>
            </div>
          </div>

          {botsError ? (
            <div className="alert alert-error mt-3">{botsError}</div>
          ) : null}

          {!loadingBots && !hasBots ? (
            <div className="text-sm opacity-70">등록된 봇이 없습니다.</div>
          ) : null}

          <div className="overflow-x-auto mt-2">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th></th>
                  <th>이름</th>
                  <th>모드</th>
                  <th>심볼</th>
                  <th>상태</th>
                  <th className="text-right">액션</th>
                </tr>
              </thead>
              <tbody>
                {bots.map((b) => {
                  const badgeClass =
                    b.status === "RUNNING"
                      ? "badge-success"
                      : b.status === "STOPPED"
                        ? "badge-ghost"
                        : "badge-warning";
                  const rowDeleting = deletingId === b.id;
                  return (
                    <tr key={b.id} className="hover">
                      <td>
                        <input
                          type="radio"
                          name="selected-bot"
                          className="radio"
                          checked={selectedBotId === b.id}
                          onChange={() => setSelectedBotId(b.id)}
                        />
                      </td>
                      <td>{b.name}</td>
                      <td>{b.mode}</td>
                      <td>{b.symbol}</td>
                      <td>
                        <span className={`badge ${badgeClass}`}>
                          {b.status}
                        </span>
                      </td>
                      <td>
                        <div className="flex gap-2 justify-end">
                          <button
                            className="btn btn-xs btn-primary"
                            onClick={() => void startBot(b.id)}
                            disabled={b.status === "RUNNING" || rowDeleting}
                          >
                            시작
                          </button>
                          <button
                            className="btn btn-xs btn-warning"
                            onClick={() => void stopBot(b.id)}
                            disabled={b.status === "STOPPED" || rowDeleting}
                          >
                            종료
                          </button>
                          <button
                            className="btn btn-xs btn-error"
                            onClick={async () => {
                              const ok = window.confirm("이 봇을 삭제할까요?");
                              if (!ok) return;
                              const res = await deleteBot(b.id);
                              if (res.ok) {
                                if (selectedBotId === b.id)
                                  setSelectedBotId(null);
                                await loadBots();
                              } else {
                                toast({
                                  title: "삭제 실패",
                                  description:
                                    res.error ?? "삭제 중 오류가 발생했습니다.",
                                  variant: "error",
                                });
                              }
                            }}
                            disabled={rowDeleting}
                          >
                            {rowDeleting ? "삭제중..." : "삭제"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {loadingBots ? (
                  <tr>
                    <td colSpan={6}>
                      <div className="flex justify-center p-3">
                        <span className="loading loading-spinner loading-sm" />
                      </div>
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
