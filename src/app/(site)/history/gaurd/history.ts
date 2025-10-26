// src/app/(site)/history/gaurd/history.ts
import type { HistoryRow, HistoryListResponse, BotOption } from "../types";

function isString(v: unknown): v is string {
  return typeof v === "string";
}

function isNullableString(v: unknown): v is string | null {
  return v === null || typeof v === "string";
}

function isNumber(v: unknown): v is number {
  return typeof v === "number" && Number.isFinite(v);
}

function isSide(v: unknown): v is "LONG" | "SHORT" {
  return v === "LONG" || v === "SHORT";
}

function isStatus(v: unknown): v is "OPEN" | "CLOSED" {
  return v === "OPEN" || v === "CLOSED";
}

// -----------------------------------------
// HistoryRow 파서
// -----------------------------------------
function parseRow(raw: unknown): HistoryRow | null {
  if (typeof raw !== "object" || raw === null) {
    return null;
  }
  const o = raw as Record<string, unknown>;

  const botIdOk = isString(o.botId);
  const botNameOk = isString(o.botName);

  const exchangeOk = isString(o.exchange);

  const symbolOk = isString(o.symbol);
  const sideOk = isSide(o.side);
  const leverageOk = isNumber(o.leverage);
  const statusOk = isStatus(o.status);

  const entryQtyOk = isNumber(o.entryQty);
  const entryPriceOk = isNullableString(o.entryPrice);
  const entryCostOk = isNullableString(o.entryCostUsdt);
  const entryNotionalOk = isNullableString(o.entryNotionalUsdt);
  const openedAtOk = isString(o.openedAt);

  const closeQtyOk = o.closeQty === null || isNumber(o.closeQty);
  const closePriceOk = isNullableString(o.closePrice);
  const closeNotionalOk = isNullableString(o.closeNotionalUsdt);
  const closedAtOk = o.closedAt === null || isString(o.closedAt);

  // ✅ profitUsdt도 string | null
  const profitOk = isNullableString(o.profitUsdt);

  if (
    !botIdOk ||
    !botNameOk ||
    !exchangeOk ||
    !symbolOk ||
    !sideOk ||
    !leverageOk ||
    !statusOk ||
    !entryQtyOk ||
    !entryPriceOk ||
    !entryCostOk ||
    !entryNotionalOk ||
    !openedAtOk ||
    !closeQtyOk ||
    !closePriceOk ||
    !closeNotionalOk ||
    !closedAtOk ||
    !profitOk
  ) {
    return null;
  }

  return {
    botId: o.botId,
    botName: o.botName,

    exchange: o.exchange,

    symbol: o.symbol,
    side: o.side,
    leverage: o.leverage,
    status: o.status,

    entryQty: o.entryQty,
    entryPrice: o.entryPrice,
    entryCostUsdt: o.entryCostUsdt,
    entryNotionalUsdt: o.entryNotionalUsdt,
    openedAt: o.openedAt,

    closeQty: o.closeQty,
    closePrice: o.closePrice,
    closeNotionalUsdt: o.closeNotionalUsdt,
    closedAt: o.closedAt,

    profitUsdt: o.profitUsdt,
  } as HistoryRow;
}

// -----------------------------------------
// BotOption 파서
// -----------------------------------------
function isBotOptionLike(
  raw: unknown
): raw is { botId: string; botName: string } {
  if (typeof raw !== "object" || raw === null) {
    return false;
  }
  const o = raw as Record<string, unknown>;
  return isString(o.botId) && isString(o.botName);
}

function parseBotOption(raw: unknown): BotOption | null {
  if (!isBotOptionLike(raw)) {
    return null;
  }
  return {
    botId: raw.botId,
    botName: raw.botName,
  };
}

// -----------------------------------------
// symbols 파서
// -----------------------------------------
function parseStringArray(raw: unknown): string[] | null {
  if (!Array.isArray(raw)) {
    return null;
  }
  const out: string[] = [];
  for (const item of raw) {
    if (typeof item === "string") {
      out.push(item);
    } else {
      return null;
    }
  }
  return out;
}

// -----------------------------------------
// 전체 응답 파서
// -----------------------------------------
export function parseHistoryListResponse(raw: unknown): HistoryListResponse {
  if (typeof raw === "object" && raw !== null) {
    const o = raw as Record<string, unknown>;

    if (o.ok === false) {
      const err =
        typeof o.error === "string" && o.error.length > 0
          ? o.error
          : "UNKNOWN_ERROR";

      return {
        ok: false,
        error: err,
      };
    }

    if (o.ok === true) {
      const dataRaw = o.data;
      const pageRaw = o.page;
      const pageSizeRaw = o.pageSize;
      const totalRaw = o.total;
      const botsRaw = o.bots;
      const symbolsRaw = o.symbols;

      if (
        Array.isArray(dataRaw) &&
        isNumber(pageRaw) &&
        isNumber(pageSizeRaw) &&
        isNumber(totalRaw) &&
        Array.isArray(botsRaw)
      ) {
        // rows
        const rowsParsed: HistoryRow[] = [];
        for (const item of dataRaw) {
          const row = parseRow(item);
          if (row) {
            rowsParsed.push(row);
          }
        }

        // bot options
        const botsParsed: BotOption[] = [];
        for (const b of botsRaw) {
          const opt = parseBotOption(b);
          if (opt) {
            botsParsed.push(opt);
          }
        }

        // symbols
        const symbolsParsed = parseStringArray(symbolsRaw) ?? [];

        return {
          ok: true,
          data: rowsParsed,
          page: pageRaw,
          pageSize: pageSizeRaw,
          total: totalRaw,
          bots: botsParsed,
          symbols: symbolsParsed,
        };
      }
    }
  }

  return {
    ok: false,
    error: "INVALID_RESPONSE",
  };
}
