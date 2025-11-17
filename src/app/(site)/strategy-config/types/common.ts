// src/app/(site)/strategy-config/types/common.ts
import { Timeframe, StrategyKind } from "@/generated/prisma";

export type CommonFormSlice = {
  name: string;
  kind: StrategyKind;

  // 공통
  useMartin: boolean;
  martinMultiplier: string;
  defaultSize: string;
  maxSize: string;
  targetProfit: string;
  targetLoss: string; // ✅ 추가
  leverage: string;
  timeframe: Timeframe;

  // 숫자 입력(문자) — 서버 전송 시 숫자로 변환
  rsiLength: string;
};

// Create/Edit 폼 확장
export type CreateForm = CommonFormSlice & {
  // BOX
  lowerTh: string;
  upperTh: string;
  boxTouchPct: string;
  // TREND
  trendRsiUpperPullback: string;
  trendRsiLowerPullback: string;
};

export type EditForm = CreateForm & {
  id: string;
};
