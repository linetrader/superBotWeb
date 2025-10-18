import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotModeSchema } from '../enums/BotMode.schema'

const nestedenumbotmodefilterSchema = z.object({
  equals: BotModeSchema.optional(),
  in: BotModeSchema.array().optional(),
  notIn: BotModeSchema.array().optional(),
  not: z.union([BotModeSchema, z.lazy(() => NestedEnumBotModeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumBotModeFilterObjectSchema: z.ZodType<Prisma.NestedEnumBotModeFilter> = nestedenumbotmodefilterSchema as unknown as z.ZodType<Prisma.NestedEnumBotModeFilter>;
export const NestedEnumBotModeFilterObjectZodSchema = nestedenumbotmodefilterSchema;
