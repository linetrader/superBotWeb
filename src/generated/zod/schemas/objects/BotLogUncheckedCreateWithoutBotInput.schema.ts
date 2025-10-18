import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { LogLevelSchema } from '../enums/LogLevel.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  level: LogLevelSchema,
  message: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const BotLogUncheckedCreateWithoutBotInputObjectSchema: z.ZodType<Prisma.BotLogUncheckedCreateWithoutBotInput> = makeSchema() as unknown as z.ZodType<Prisma.BotLogUncheckedCreateWithoutBotInput>;
export const BotLogUncheckedCreateWithoutBotInputObjectZodSchema = makeSchema();
