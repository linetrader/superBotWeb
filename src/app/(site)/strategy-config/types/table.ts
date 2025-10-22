import type { StrategyItem } from "@/types/strategy-config";

export type StrategyRow = {
  idx: number;
  checked: boolean;
  updatedAt: string;
  name: string;
  kind: StrategyItem["kind"];
  detail: string;
};
