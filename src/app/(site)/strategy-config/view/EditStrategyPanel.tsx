// src/app/(site)/strategy-config/view/EditStrategyPanel.tsx
"use client";

import { useEditStrategyForm } from "../hooks/useEditStrategyForm";
import EditStrategyFormView from "./EditStrategyFormView";
import type { StrategyItem, StrategyUpdateBody } from "@/types/strategy-config";

type OuterProps = {
  editTarget: StrategyItem | null;
  onUpdate: (body: StrategyUpdateBody) => Promise<void>;
  onClose: () => void;
};

type InnerProps = {
  item: StrategyItem;
  onUpdate: (body: StrategyUpdateBody) => Promise<void>;
  onClose: () => void;
};

function EditStrategyPanelInner({ item, onUpdate, onClose }: InnerProps) {
  // ✅ 훅은 이 컴포넌트가 렌더될 때마다 항상 같은 순서로 호출됨
  const editHook = useEditStrategyForm({
    item,
    onUpdate,
    onClose,
  });

  return (
    <EditStrategyFormView
      form={editHook.form}
      setForm={editHook.setForm}
      updating={editHook.updating}
      disabled={editHook.disabled}
      onUpdateClick={editHook.onUpdateClick}
      onClose={editHook.onClose}
    />
  );
}

export default function EditStrategyPanel({
  editTarget,
  onUpdate,
  onClose,
}: OuterProps) {
  // ✅ 훅이 없는 곳에서만 조건부 처리
  if (editTarget === null) return null;
  return (
    <EditStrategyPanelInner
      item={editTarget}
      onUpdate={onUpdate}
      onClose={onClose}
    />
  );
}
