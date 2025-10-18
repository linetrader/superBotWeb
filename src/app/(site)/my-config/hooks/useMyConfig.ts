"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { EXCHANGES } from "@/types/options";
import {
  type MyConfigForm,
  type SaveHistoryItem,
  type ErrorResponse,
  type PostBody,
  assertHistoryList,
} from "@/types/my-config";
import {
  apiLoadHistory,
  apiSaveConfig,
  apiDeleteByExchangeCode,
} from "../services/myConfigApi";
import { pickValue } from "../utils/dom";

export type UseMyConfigReturn = {
  // state
  form: MyConfigForm;
  setForm: React.Dispatch<React.SetStateAction<MyConfigForm>>;
  history: SaveHistoryItem[];
  saving: boolean;
  deleting: boolean;
  errorMsg: string;

  // derived
  exchangeLabel: string;
  selectedIds: Set<string>;
  selectedRowIndexes: Set<number>;

  // actions
  loadHistory: () => Promise<void>;
  handleSave: () => Promise<void>;
  handleDeleteSelected: () => Promise<void>;
  handleApiKeyChange: (v: string | React.ChangeEvent<HTMLInputElement>) => void;
  handleApiSecretChange: (
    v: string | React.ChangeEvent<HTMLInputElement>
  ) => void;
  onToggleRow: (idx: number, checked: boolean) => void;
  onToggleAll: (checked: boolean) => void;
};

function findExchangeCodeById(id: string): string {
  const x = EXCHANGES.find((e) => e.id === id);
  return x ? x.code : "";
}

export function useMyConfig(): UseMyConfigReturn {
  const [form, setForm] = useState<MyConfigForm>({
    enabled: true,
    exchangeId: EXCHANGES[0]?.id ?? "",
    apiKey: "",
    apiSecret: "",
  });

  const [history, setHistory] = useState<SaveHistoryItem[]>([]);
  const [saving, setSaving] = useState<boolean>(false);
  const [deleting, setDeleting] = useState<boolean>(false);
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
          /* noop */
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

    const payload: PostBody = {
      exchangeCode,
      apiKey: form.apiKey,
      apiSecret: form.apiSecret,
    };

    setSaving(true);
    try {
      const res = await apiSaveConfig(payload);
      if (res.ok) {
        await loadHistory();
      } else {
        let errText = `Save failed (${res.status})`;
        try {
          const ej = (await res.json()) as ErrorResponse;
          if (typeof ej?.error === "string") errText = ej.error;
        } catch {
          /* noop */
        }
        setErrorMsg(errText);
      }
    } finally {
      setSaving(false);
    }
  }, [form.apiKey, form.apiSecret, form.exchangeId, loadHistory]);

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
            /* noop */
          }
          return { ok: false as const, errText };
        })
      );

      const firstErr = results.find((r) => !r.ok);
      if (firstErr && "errText" in firstErr) {
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

  return {
    form,
    setForm,
    history,
    saving,
    deleting,
    errorMsg,

    exchangeLabel,
    selectedIds,
    selectedRowIndexes,

    loadHistory,
    handleSave,
    handleDeleteSelected,
    handleApiKeyChange,
    handleApiSecretChange,
    onToggleRow,
    onToggleAll,
  };
}
