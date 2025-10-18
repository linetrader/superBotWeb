import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { LogLevelSchema } from '../enums/LogLevel.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  botId: z.string(),
  level: LogLevelSchema,
  message: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const BotLogCreateManyInputObjectSchema: z.ZodType<Prisma.BotLogCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.BotLogCreateManyInput>;
export const BotLogCreateManyInputObjectZodSchema = makeSchema();
