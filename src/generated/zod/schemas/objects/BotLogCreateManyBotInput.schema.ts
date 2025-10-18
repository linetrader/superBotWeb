import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { LogLevelSchema } from '../enums/LogLevel.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  level: LogLevelSchema,
  message: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const BotLogCreateManyBotInputObjectSchema: z.ZodType<Prisma.BotLogCreateManyBotInput> = makeSchema() as unknown as z.ZodType<Prisma.BotLogCreateManyBotInput>;
export const BotLogCreateManyBotInputObjectZodSchema = makeSchema();
