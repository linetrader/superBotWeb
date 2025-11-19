// src/app/_config/options.ts
export type MarketCode = "SPOT" | "FUTURES";

export type ExchangeOption = {
  id: string;
  code: string;
  name: string;
};

export type MarketOption = {
  id: string;
  exchangeId: string;
  code: MarketCode;
  name: string;
  restBaseUrl: string;
};

export type SymbolOption = { value: string; label: string };

export type TimeframeEnum =
  | "T1m"
  | "T3m"
  | "T5m"
  | "T15m"
  | "T30m"
  | "T1h"
  | "T4h"
  | "T1d";

export const EXCHANGES: ReadonlyArray<ExchangeOption> = [
  { id: "ex_gateio", code: "GATEIO", name: "Gate.io" },
  { id: "ex_websea", code: "WEBSEA", name: "WebSea" },
  { id: "ex_wallst", code: "WALLST", name: "wallST" }, // ✅ wallST 추가
];

export const MARKETS: ReadonlyArray<MarketOption> = [
  {
    id: "mkt_gateio_spot",
    exchangeId: "ex_gateio",
    code: "SPOT",
    name: "Gate.io Spot",
    restBaseUrl: "https://api.gateio.ws/api/v4",
  },
  {
    id: "mkt_gateio_futures",
    exchangeId: "ex_gateio",
    code: "FUTURES",
    name: "Gate.io Futures",
    restBaseUrl: "https://fx-api.gateio.ws/api/v4",
  },
  {
    id: "mkt_websea_spot",
    exchangeId: "ex_websea",
    code: "SPOT",
    name: "WebSea Spot",
    restBaseUrl: "https://oapi.websea.com",
  },
  {
    id: "mkt_websea_futures",
    exchangeId: "ex_websea",
    code: "FUTURES",
    name: "WebSea Futures",
    restBaseUrl: "https://coapi.websea.com",
  },
  {
    id: "mkt_wallst_spot",
    exchangeId: "ex_wallst",
    code: "SPOT",
    name: "wallST Spot",
    // ⚠️ 실제 wallST Spot REST Base URL 로 교체 필요
    restBaseUrl: "https://example.wallst.com/api/spot",
  },
  {
    id: "mkt_wallst_futures",
    exchangeId: "ex_wallst",
    code: "FUTURES",
    name: "wallST Futures",
    // ⚠️ 실제 wallST Futures REST Base URL 로 교체 필요
    restBaseUrl: "https://example.wallst.com/api/futures",
  },
];

export const SYMBOLS_BY_MARKET: Readonly<
  Record<string, ReadonlyArray<SymbolOption>>
> = {
  mkt_gateio_spot: [
    { value: "BTCUSDT", label: "BTC/USDT" },
    { value: "ETHUSDT", label: "ETH/USDT" },
  ],
  mkt_gateio_futures: [
    { value: "BTCUSDT", label: "BTC/USDT" },
    { value: "SOLUSDT", label: "SOL/USDT" },
  ],
  mkt_websea_spot: [
    { value: "BTCUSDT", label: "BTC/USDT" },
    { value: "XRPUSDT", label: "XRP/USDT" },
  ],
  mkt_websea_futures: [
    { value: "BTCUSDT", label: "BTC/USDT" },
    { value: "ETHUSDT", label: "ETH/USDT" },
  ],
  // ⚠️ 아래 wallST 심볼은 예시 값. 실제 지원 심볼로 교체 필요
  mkt_wallst_spot: [
    { value: "BTCUSDT", label: "BTC/USDT" },
    { value: "ETHUSDT", label: "ETH/USDT" },
  ],
  mkt_wallst_futures: [
    { value: "BTCUSDT", label: "BTC/USDT" },
    { value: "ETHUSDT", label: "ETH/USDT" },
  ],
};

export const TIMEFRAMES: ReadonlyArray<{
  value: TimeframeEnum;
  label: string;
}> = [
  { value: "T1m", label: "1m" },
  { value: "T3m", label: "3m" },
  { value: "T5m", label: "5m" },
  { value: "T15m", label: "15m" },
  { value: "T30m", label: "30m" },
  { value: "T1h", label: "1h" },
  { value: "T4h", label: "4h" },
  { value: "T1d", label: "1d" },
];
