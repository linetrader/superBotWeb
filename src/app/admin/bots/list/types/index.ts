// src/app/admin/bots/list/types/index.ts
export type BotModeStr = "SINGLE" | "MULTI";
export type RuntimeStatus =
  | "STOPPED"
  | "STARTING"
  | "RUNNING"
  | "STOPPING"
  | "ERROR";

export type BotRow = {
  id: string;
  userId: string;
  username: string; // 표시용 사용자명
  name: string;
  mode: BotModeStr;
  status: RuntimeStatus; // BotRuntime.status (없으면 STOPPED로 취급)
  running: boolean; // status가 STARTING/RUNNING이면 true
};

export type ListOk = {
  ok: true;
  data: BotRow[];
  page: number;
  pageSize: number;
  total: number;
};
export type ListErr = { ok: false; error: string };
export type ListResponse = ListOk | ListErr;

export type BulkAction = "START" | "STOP";

export type BulkUpdatePayload = {
  action: BulkAction;
  botIds: string[]; // length >= 1
};

export type BulkUpdateOk = { ok: true; data: { updated: number } };
export type BulkUpdateErr = { ok: false; error: string };
export type BulkUpdateResponse = BulkUpdateOk | BulkUpdateErr;

export type UseBotsListReturn = {
  loading: boolean;
  error: string | null;
  rows: BotRow[];

  // 선택 상태
  selected: Record<string, boolean>;
  toggleOne: (botId: string) => void;
  toggleAll: (checked: boolean) => void;
  clearSelection: () => void;

  // 동작
  refresh: () => void;
  starting: boolean;
  stopping: boolean;
  startSelected: () => void;
  stopSelected: () => void;

  // 페이지네이션
  page: number;
  pageSize: number;
  total: number;
  setPage: (p: number) => void;
};
