import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { LogLevelSchema } from '../enums/LogLevel.schema';
import { TradingBotCreateNestedOneWithoutBotLogInputObjectSchema as TradingBotCreateNestedOneWithoutBotLogInputObjectSchema } from './TradingBotCreateNestedOneWithoutBotLogInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  level: LogLevelSchema,
  message: z.string(),
  createdAt: z.coerce.date().optional(),
  bot: z.lazy(() => TradingBotCreateNestedOneWithoutBotLogInputObjectSchema)
}).strict();
export const BotLogCreateInputObjectSchema: z.ZodType<Prisma.BotLogCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BotLogCreateInput>;
export const BotLogCreateInputObjectZodSchema = makeSchema();
