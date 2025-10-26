// src/app/admin/process/list/types/index.ts
export type AliveFilter = "ALL" | "ACTIVE" | "STALE";

export interface ProcessRow {
  id: string;
  taskArn: string | null;
  revision: string | null;
  createdAt: string;
  lastHeartbeat: string | null;
  updatedAt: string;
  botCount: number;
  alive: boolean;

  // 동일 botId가 2개 이상의 workerId에 붙어 있는 충돌 의심 bot 목록
  conflictBotIds: string[];

  // 살아있는데(bot heartbeat OK) botCount가 0인 워커 → 좀비 의심
  isZombieSuspect: boolean;
}

export type ProcessListResponse =
  | {
      ok: true;
      data: ProcessRow[];
      page: number;
      pageSize: number;
      total: number;
    }
  | {
      ok: false;
      error: string;
    };

export interface BulkDeletePayload {
  processIds: string[];
}

export type BulkDeleteResponse =
  | {
      ok: true;
      data: {
        deleted: number;
      };
    }
  | {
      ok: false;
      error: string;
    };

/**
 * stop-all (POST /api/admin/process/[workerId]/stop-all) 응답
 *
 * 예:
 * {
 *   ok: true,
 *   data: {
 *     requested: number;
 *     eligible: number;
 *     updated: number;
 *     stoppedOkIds: string[];
 *   }
 * }
 */
export type StopAllResponse =
  | {
      ok: true;
      data: {
        requested: number;
        eligible: number;
        updated: number;
        stoppedOkIds: string[];
      };
    }
  | {
      ok: false;
      error: string;
    };

export interface UseProcessListReturn {
  loading: boolean;
  error: string | null;

  rows: ProcessRow[];

  page: number;
  pageSize: number;
  total: number;
  setPage: (page: number) => void;

  aliveFilter: AliveFilter;
  setAliveFilter: (f: AliveFilter) => void;

  /** 현재 선택된 processIds */
  idsSelected: string[];
  toggleOne: (id: string) => void;
  toggleAll: (currentRows: ProcessRow[]) => void;
  clearSelection: () => void;

  deleting: boolean;
  deleteSelected: () => Promise<void>;

  /** workerId -> true if stop-all in progress */
  stopLoadingMap: Record<string, boolean>;
  stopAllBotsForWorker: (workerId: string) => Promise<void>;

  refresh: () => void;
}
