import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotStatusSchema } from '../enums/BotStatus.schema';
import { NestedEnumBotStatusWithAggregatesFilterObjectSchema as NestedEnumBotStatusWithAggregatesFilterObjectSchema } from './NestedEnumBotStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumBotStatusFilterObjectSchema as NestedEnumBotStatusFilterObjectSchema } from './NestedEnumBotStatusFilter.schema'

const makeSchema = () => z.object({
  equals: BotStatusSchema.optional(),
  in: BotStatusSchema.array().optional(),
  notIn: BotStatusSchema.array().optional(),
  not: z.union([BotStatusSchema, z.lazy(() => NestedEnumBotStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumBotStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumBotStatusFilterObjectSchema).optional()
}).strict();
export const EnumBotStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumBotStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumBotStatusWithAggregatesFilter>;
export const EnumBotStatusWithAggregatesFilterObjectZodSchema = makeSchema();
