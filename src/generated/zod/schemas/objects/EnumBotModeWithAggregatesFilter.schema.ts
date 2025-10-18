import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotModeSchema } from '../enums/BotMode.schema';
import { NestedEnumBotModeWithAggregatesFilterObjectSchema as NestedEnumBotModeWithAggregatesFilterObjectSchema } from './NestedEnumBotModeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumBotModeFilterObjectSchema as NestedEnumBotModeFilterObjectSchema } from './NestedEnumBotModeFilter.schema'

const makeSchema = () => z.object({
  equals: BotModeSchema.optional(),
  in: BotModeSchema.array().optional(),
  notIn: BotModeSchema.array().optional(),
  not: z.union([BotModeSchema, z.lazy(() => NestedEnumBotModeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumBotModeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumBotModeFilterObjectSchema).optional()
}).strict();
export const EnumBotModeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumBotModeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumBotModeWithAggregatesFilter>;
export const EnumBotModeWithAggregatesFilterObjectZodSchema = makeSchema();
