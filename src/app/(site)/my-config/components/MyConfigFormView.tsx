// src/app/(site)/my-config/components/MyConfigFormView.tsx
"use client";

import type React from "react";
import {
  Button,
  Checkbox,
  InputField,
  LabeledField,
  SelectField,
} from "@/components/ui";
//import { EXCHANGES, type ExchangeOption } from "@/app/_config/options";
import type { UseMyConfigReturn } from "../hooks/useMyConfig";
import { ExchangeOption, EXCHANGES } from "@/types/options";

type Props = { vm: UseMyConfigReturn };

export function MyConfigFormView({ vm }: Props) {
  const {
    form,
    setForm,
    saving,
    deleting,
    wallstLoggingIn,
    errorMsg,
    exchangeLabel,
    selectedIds,
    handleSave,
    handleDeleteSelected,
    handleUidChange,
    handleApiKeyChange,
    handleApiSecretChange,
    handleWallstUsernameChange,
    handleWallstPasswordChange,
    handleWallstLogin,
  } = vm;

  const wallStExchange: ExchangeOption | undefined = EXCHANGES.find(
    (ex: ExchangeOption) => ex.code === "WALLST"
  );
  const isWallStSelected: boolean =
    wallStExchange !== undefined && form.exchangeId === wallStExchange.id;

  return (
    <div className="grid grid-cols-1 gap-3">
      <h2 className="mb-3 text-base font-semibold">봇 상태 & 자격 증명</h2>

      <Checkbox
        id="enabled"
        checked={form.enabled}
        onChange={(e) => setForm((s) => ({ ...s, enabled: e.target.checked }))}
        label="봇 활성화"
      />

      <LabeledField label="거래소">
        <SelectField
          id="exchange"
          value={form.exchangeId}
          onChange={(e) =>
            setForm((s) => ({ ...s, exchangeId: e.target.value }))
          }
        >
          <option value="" disabled>
            거래소 선택
          </option>
          {EXCHANGES.map((ex: ExchangeOption) => (
            <option key={ex.id} value={ex.id}>
              {ex.name}
            </option>
          ))}
        </SelectField>
      </LabeledField>

      {isWallStSelected && (
        <div className="mt-1 rounded-md border border-base-300 p-3">
          <p className="mb-2 text-sm font-medium">wallST 계정 로그인</p>

          <div className="grid grid-cols-1 gap-2">
            <InputField
              id="wallstUsername"
              label="wallST 아이디"
              value={form.wallstUsername}
              placeholder="wallST 계정 아이디"
              onChange={
                handleWallstUsernameChange as React.ChangeEventHandler<HTMLInputElement>
              }
            />

            <InputField
              id="wallstPassword"
              label="wallST 비밀번호"
              type="password"
              value={form.wallstPassword}
              placeholder="wallST 계정 비밀번호"
              onChange={
                handleWallstPasswordChange as React.ChangeEventHandler<HTMLInputElement>
              }
            />

            <div className="mt-1 flex items-center justify-between gap-2">
              <p className="text-[11px] text-base-content/70">
                로그인 후 발급받은 토큰이 API Key 에 자동 저장됩니다.
              </p>
              <Button
                type="button"
                size="sm"
                disabled={wallstLoggingIn}
                onClick={() => void handleWallstLogin()}
              >
                {wallstLoggingIn ? "로그인 중…" : "로그인 후 토큰 받기"}
              </Button>
            </div>
          </div>
        </div>
      )}

      <InputField
        id="uid"
        label="거래소 UID"
        value={form.uid}
        placeholder="거래소 계정 UID (필수)"
        onChange={handleUidChange as React.ChangeEventHandler<HTMLInputElement>}
      />

      <InputField
        id="apiKey"
        label={isWallStSelected ? "API Key (Bearer 토큰)" : "API Key"}
        value={form.apiKey}
        placeholder={
          isWallStSelected
            ? "로그인 후 토큰이 여기 자동 입력됩니다."
            : "거래소 API Key"
        }
        onChange={
          handleApiKeyChange as React.ChangeEventHandler<HTMLInputElement>
        }
      />

      <InputField
        id="apiSecret"
        label={
          isWallStSelected ? "API Secret (wallST는 더미 값)" : "API Secret"
        }
        value={form.apiSecret}
        placeholder={
          isWallStSelected
            ? "자동으로 더미 값이 채워집니다."
            : "거래소 API Secret"
        }
        onChange={
          handleApiSecretChange as React.ChangeEventHandler<HTMLInputElement>
        }
      />

      <div className="mt-2 flex gap-2">
        <Button
          type="button"
          disabled={saving}
          onClick={() => void handleSave()}
        >
          {saving ? "저장 중…" : "저장"}
        </Button>

        <Button
          type="button"
          disabled={deleting || selectedIds.size === 0}
          onClick={() => void handleDeleteSelected()}
        >
          {deleting ? "삭제 중…" : `선택 삭제 (${selectedIds.size})`}
        </Button>
      </div>

      <p className="mt-2 text-xs text-base-content/60">선택: {exchangeLabel}</p>

      {errorMsg && <p className="mt-1 text-xs text-error">{errorMsg}</p>}
    </div>
  );
}
