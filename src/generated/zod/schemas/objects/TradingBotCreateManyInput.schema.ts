import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotModeSchema } from '../enums/BotMode.schema';
import { MarketKindSchema } from '../enums/MarketKind.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().max(60),
  mode: BotModeSchema.optional(),
  exchangeMarketId: z.string().optional().nullable(),
  singleMarketKind: MarketKindSchema.optional().nullable(),
  symbol: z.string().max(40),
  strategyConfigId: z.string(),
  enabled: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string()
}).strict();
export const TradingBotCreateManyInputObjectSchema: z.ZodType<Prisma.TradingBotCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotCreateManyInput>;
export const TradingBotCreateManyInputObjectZodSchema = makeSchema();
