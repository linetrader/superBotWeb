import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotModeSchema } from '../enums/BotMode.schema';
import { NestedEnumBotModeFilterObjectSchema as NestedEnumBotModeFilterObjectSchema } from './NestedEnumBotModeFilter.schema'

const makeSchema = () => z.object({
  equals: BotModeSchema.optional(),
  in: BotModeSchema.array().optional(),
  notIn: BotModeSchema.array().optional(),
  not: z.union([BotModeSchema, z.lazy(() => NestedEnumBotModeFilterObjectSchema)]).optional()
}).strict();
export const EnumBotModeFilterObjectSchema: z.ZodType<Prisma.EnumBotModeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumBotModeFilter>;
export const EnumBotModeFilterObjectZodSchema = makeSchema();
