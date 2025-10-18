import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotStatusSchema } from '../enums/BotStatus.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumBotStatusFilterObjectSchema as NestedEnumBotStatusFilterObjectSchema } from './NestedEnumBotStatusFilter.schema'

const nestedenumbotstatuswithaggregatesfilterSchema = z.object({
  equals: BotStatusSchema.optional(),
  in: BotStatusSchema.array().optional(),
  notIn: BotStatusSchema.array().optional(),
  not: z.union([BotStatusSchema, z.lazy(() => NestedEnumBotStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumBotStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumBotStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumBotStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumBotStatusWithAggregatesFilter> = nestedenumbotstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumBotStatusWithAggregatesFilter>;
export const NestedEnumBotStatusWithAggregatesFilterObjectZodSchema = nestedenumbotstatuswithaggregatesfilterSchema;
