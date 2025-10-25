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

  status: RuntimeStatus;
  running: boolean;

  workerId: string | null;
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
  botIds: string[];
};

export type BulkUpdateOk = { ok: true; data: { updated: number } };
export type BulkUpdateErr = { ok: false; error: string };
export type BulkUpdateResponse = BulkUpdateOk | BulkUpdateErr;

// 러닝상태 필터 UI에서 쓰는 값
export type RunningFilter = "ALL" | "RUNNING" | "STOPPED";

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

  // 러닝상태 필터
  runningFilter: RunningFilter;
  setRunningFilter: (f: RunningFilter) => void;
};
