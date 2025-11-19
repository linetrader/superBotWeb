// src/app/(site)/my-config/hooks/useMyConfig.ts
"use client";

import type React from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { EXCHANGES } from "@/types/options";
import {
  type MyConfigForm,
  type SaveHistoryItem,
  type ErrorResponse,
  type PostBody,
  type WallstLoginResult,
  WallstLoginResultSchema,
  assertHistoryList,
} from "../types/index";
import {
  apiLoadHistory,
  apiSaveConfig,
  apiDeleteByExchangeCode,
  apiWallstLogin,
} from "../services/myConfigApi";
import { pickValue } from "../utils/dom";

export type UseMyConfigReturn = {
  form: MyConfigForm;
  setForm: React.Dispatch<React.SetStateAction<MyConfigForm>>;
  history: SaveHistoryItem[];
  saving: boolean;
  deleting: boolean;
  wallstLoggingIn: boolean;
  errorMsg: string;

  exchangeLabel: string;
  selectedIds: Set<string>;
  selectedRowIndexes: Set<number>;

  loadHistory: () => Promise<void>;
  handleSave: () => Promise<void>;
  handleDeleteSelected: () => Promise<void>;
  handleUidChange: (v: string | React.ChangeEvent<HTMLInputElement>) => void;
  handleApiKeyChange: (v: string | React.ChangeEvent<HTMLInputElement>) => void;
  handleApiSecretChange: (
    v: string | React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleWallstUsernameChange: (
    v: string | React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleWallstPasswordChange: (
    v: string | React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleWallstLogin: () => Promise<void>;
  onToggleRow: (idx: number, checked: boolean) => void;
  onToggleAll: (checked: boolean) => void;
};

function findExchangeCodeById(id: string): string {
  const x = EXCHANGES.find((e) => e.id === id);
  return x ? x.code : "";
}

function isWallstExchangeId(exchangeId: string): boolean {
  const ex = EXCHANGES.find((e) => e.id === exchangeId);
  return ex !== undefined && ex.code === "WALLST";
}

export function useMyConfig(): UseMyConfigReturn {
  const [form, setForm] = useState<MyConfigForm>({
    enabled: true,
    exchangeId: EXCHANGES[0]?.id ?? "",
    uid: "",
    apiKey: "",
    apiSecret: "",
    wallstUsername: "",
    wallstPassword: "",
  });

  const [history, setHistory] = useState<SaveHistoryItem[]>([]);
  const [saving, setSaving] = useState<boolean>(false);
  const [deleting, setDeleting] = useState<boolean>(false);
  const [wallstLoggingIn, setWallstLoggingIn] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const exchangeLabel = useMemo(() => {
    const ex = EXCHANGES.find((e) => e.id === form.exchangeId);
    return ex ? `${ex.name} (${ex.code})` : "-";
  }, [form.exchangeId]);

  const loadHistory = useCallback(async (): Promise<void> => {
    setErrorMsg("");
    try {
      const res = await apiLoadHistory();

      const ct = res.headers.get("content-type") ?? "";
      if (!ct.includes("application/json")) {
        throw new Error(
          `Unexpected content-type: ${ct} (status ${res.status})`
        );
      }

      const dataUnknown = (await res.json()) as unknown;
      assertHistoryList(dataUnknown);
      setHistory(dataUnknown);
      setSelectedIds(new Set());
    } catch (e) {
      let errText = "Load failed";
      if (e instanceof Response) {
        errText = `Load failed (${e.status})`;
        try {
          const ej = (await e.json()) as ErrorResponse;
          if (typeof ej?.error === "string") errText = ej.error;
        } catch {
          // noop
        }
      } else if (e instanceof Error) {
        errText = e.message;
      }
      setErrorMsg(errText);
    }
  }, []);

  useEffect(() => {
    void loadHistory();
  }, [loadHistory]);

  const handleSave = useCallback(async (): Promise<void> => {
    setErrorMsg("");

    const exchangeCode = findExchangeCodeById(form.exchangeId);
    if (!exchangeCode) {
      setErrorMsg("거래소를 선택하세요.");
      return;
    }
    if (!form.uid.trim()) {
      setErrorMsg("거래소 UID를 입력하세요.");
      return;
    }

    const payload: PostBody = {
      exchangeCode,
      uid: form.uid,
      apiKey: form.apiKey,
      apiSecret: form.apiSecret,
    };

    setSaving(true);
    try {
      const res = await apiSaveConfig(payload);
      if (res.ok) {
        await loadHistory();

        setForm((s) => ({
          ...s,
          uid: "",
          apiKey: "",
          apiSecret: "",
          wallstPassword: "",
        }));
      } else {
        let errText = `Save failed (${res.status})`;
        try {
          const ej = (await res.json()) as ErrorResponse;
          if (typeof ej?.error === "string") errText = ej.error;
        } catch {
          // noop
        }
        setErrorMsg(errText);
      }
    } finally {
      setSaving(false);
    }
  }, [form.apiKey, form.apiSecret, form.exchangeId, form.uid, loadHistory]);

  const handleDeleteSelected = useCallback(async (): Promise<void> => {
    if (selectedIds.size === 0) return;
    setErrorMsg("");
    setDeleting(true);
    try {
      const selectedItems: SaveHistoryItem[] = history.filter((h) =>
        selectedIds.has(h.id)
      );

      const results = await Promise.all(
        selectedItems.map(async (item) => {
          const res = await apiDeleteByExchangeCode(item.exchangeCode);
          if (res.ok) return { ok: true as const };
          let errText = `Delete failed (${res.status})`;
          try {
            const ej = (await res.json()) as ErrorResponse;
            if (typeof ej?.error === "string") errText = ej.error;
          } catch {
            // noop
          }
          return { ok: false as const, errText };
        })
      );

      const firstErr = results.find((r) => !r.ok);
      if (firstErr !== undefined && "errText" in firstErr) {
        setErrorMsg(firstErr.errText);
      } else {
        await loadHistory();
      }
    } finally {
      setDeleting(false);
    }
  }, [history, selectedIds, loadHistory]);

  const selectedRowIndexes: Set<number> = useMemo(() => {
    const s = new Set<number>();
    history.forEach((h, idx) => {
      if (selectedIds.has(h.id)) s.add(idx);
    });
    return s;
  }, [history, selectedIds]);

  function indexToId(idx: number): string | null {
    return history[idx]?.id ?? null;
  }

  function onToggleRow(idx: number, checked: boolean): void {
    const id = indexToId(idx);
    if (!id) return;
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (checked) next.add(id);
      else next.delete(id);
      return next;
    });
  }

  function onToggleAll(checked: boolean): void {
    if (checked) setSelectedIds(new Set(history.map((h) => h.id)));
    else setSelectedIds(new Set());
  }

  function handleUidChange(
    v: string | React.ChangeEvent<HTMLInputElement>
  ): void {
    const value = pickValue(v);
    setForm((s) => ({ ...s, uid: value }));
  }

  function handleApiKeyChange(
    v: string | React.ChangeEvent<HTMLInputElement>
  ): void {
    const value = pickValue(v);
    setForm((s) => ({ ...s, apiKey: value }));
  }

  function handleApiSecretChange(
    v: string | React.ChangeEvent<HTMLInputElement>
  ): void {
    const value = pickValue(v);
    setForm((s) => ({ ...s, apiSecret: value }));
  }

  function handleWallstUsernameChange(
    v: string | React.ChangeEvent<HTMLInputElement>
  ): void {
    const value = pickValue(v);
    setForm((s) => ({ ...s, wallstUsername: value }));
  }

  function handleWallstPasswordChange(
    v: string | React.ChangeEvent<HTMLInputElement>
  ): void {
    const value = pickValue(v);
    setForm((s) => ({ ...s, wallstPassword: value }));
  }

  const handleWallstLogin = useCallback(async (): Promise<void> => {
    setErrorMsg("");

    if (!isWallstExchangeId(form.exchangeId)) {
      setErrorMsg("wallST 거래소를 선택했을 때만 로그인할 수 있습니다.");
      return;
    }

    const username = form.wallstUsername.trim();
    const password = form.wallstPassword;
    if (username === "" || password === "") {
      setErrorMsg("wallST 아이디와 비밀번호를 모두 입력하세요.");
      return;
    }

    setWallstLoggingIn(true);
    try {
      const res = await apiWallstLogin({ username, password });

      if (!res.ok) {
        let errText = `wallST 로그인 실패 (${res.status})`;
        try {
          const ej = (await res.json()) as ErrorResponse;
          if (typeof ej.error === "string") {
            errText = ej.error;
          }
          if (ej.details !== undefined) {
            errText += ` ${JSON.stringify(ej.details)}`;
          }
        } catch {
          // noop
        }
        setErrorMsg(errText);
        return;
      }

      const dataUnknown = (await res.json()) as unknown;
      const result: WallstLoginResult =
        WallstLoginResultSchema.parse(dataUnknown);

      setForm((prev) => ({
        ...prev,
        uid: prev.uid !== "" ? prev.uid : username,
        apiKey: result.accessToken,
        apiSecret: prev.apiSecret !== "" ? prev.apiSecret : "wallst-no-secret",
        wallstPassword: "",
      }));
    } catch (e) {
      let errText = "wallST 로그인 실패";
      if (e instanceof Error) {
        errText = e.message;
      }
      setErrorMsg(errText);
    } finally {
      setWallstLoggingIn(false);
    }
  }, [form.exchangeId, form.wallstUsername, form.wallstPassword]);

  return {
    form,
    setForm,
    history,
    saving,
    deleting,
    wallstLoggingIn,
    errorMsg,

    exchangeLabel,
    selectedIds,
    selectedRowIndexes,

    loadHistory,
    handleSave,
    handleDeleteSelected,
    handleUidChange,
    handleApiKeyChange,
    handleApiSecretChange,
    handleWallstUsernameChange,
    handleWallstPasswordChange,
    handleWallstLogin,
    onToggleRow,
    onToggleAll,
  };
}
