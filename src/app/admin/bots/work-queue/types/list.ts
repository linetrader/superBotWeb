// src/app/admin/bots/work-queue/types/list.ts

// 상태 필터 값 ("ALL" 포함)
export type StatusFilter =
  | "ALL"
  | "QUEUED"
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "FAILED"
  | "CANCELED";

// 서버에서 내려오는 1줄(work item 1건 요약)
export type WorkQueueRow = {
  id: string;
  userId: string;
  username: string | null;

  botId: string | null;
  botName: string | null;

  type: string;
  status: string;
  attempts: number;

  dedupeKey: string | null;
  sqsGroupId: string | null;

  createdAt: string;
  updatedAt: string;

  lastAttemptStartedAt: string | null;
  lastAttemptFinishedAt: string | null;
  lastAttemptExitCode: number | null;
  lastAttemptError: string | null;
  lastAttemptWorkerTaskArn: string | null;
  queueDelaySec: number | null;
};

export type WorkQueueListResponseOk = {
  ok: true;
  data: WorkQueueRow[];
  total: number;
};

export type WorkQueueListResponseErr = {
  ok: false;
  error: string;
};

export type WorkQueueListResponse =
  | WorkQueueListResponseOk
  | WorkQueueListResponseErr;

// cleanup API 응답
export type CleanupResponseOk = {
  ok: true;
  deleted: number;
  cutoffIso: string;
};

export type CleanupResponseErr = {
  ok: false;
  error: string;
};

export type CleanupResponse = CleanupResponseOk | CleanupResponseErr;

// 훅이 view로 주는 데이터/액션 묶음
export type UseWorkQueueListReturn = {
  loading: boolean;
  error: string | null;

  rows: WorkQueueRow[];
  page: number;
  pageSize: number;
  total: number;

  statusFilter: StatusFilter;
  setStatusFilter: (s: StatusFilter) => void;

  setPage: (next: number) => void;
  refresh: () => void;

  baseDate: string;
  keepDays: string;
  setBaseDate: (v: string) => void;
  setKeepDays: (v: string) => void;

  cleanupLoading: boolean;
  runCleanup: () => void;
};
