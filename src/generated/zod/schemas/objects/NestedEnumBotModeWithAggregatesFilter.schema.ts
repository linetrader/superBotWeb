import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotModeSchema } from '../enums/BotMode.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumBotModeFilterObjectSchema as NestedEnumBotModeFilterObjectSchema } from './NestedEnumBotModeFilter.schema'

const nestedenumbotmodewithaggregatesfilterSchema = z.object({
  equals: BotModeSchema.optional(),
  in: BotModeSchema.array().optional(),
  notIn: BotModeSchema.array().optional(),
  not: z.union([BotModeSchema, z.lazy(() => NestedEnumBotModeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumBotModeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumBotModeFilterObjectSchema).optional()
}).strict();
export const NestedEnumBotModeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumBotModeWithAggregatesFilter> = nestedenumbotmodewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumBotModeWithAggregatesFilter>;
export const NestedEnumBotModeWithAggregatesFilterObjectZodSchema = nestedenumbotmodewithaggregatesfilterSchema;
