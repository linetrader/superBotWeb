import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotStatusSchema } from '../enums/BotStatus.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumBotStatusNullableFilterObjectSchema as NestedEnumBotStatusNullableFilterObjectSchema } from './NestedEnumBotStatusNullableFilter.schema'

const nestedenumbotstatusnullablewithaggregatesfilterSchema = z.object({
  equals: BotStatusSchema.optional().nullable(),
  in: BotStatusSchema.array().optional().nullable(),
  notIn: BotStatusSchema.array().optional().nullable(),
  not: z.union([BotStatusSchema, z.lazy(() => NestedEnumBotStatusNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumBotStatusNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumBotStatusNullableFilterObjectSchema).optional()
}).strict();
export const NestedEnumBotStatusNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumBotStatusNullableWithAggregatesFilter> = nestedenumbotstatusnullablewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumBotStatusNullableWithAggregatesFilter>;
export const NestedEnumBotStatusNullableWithAggregatesFilterObjectZodSchema = nestedenumbotstatusnullablewithaggregatesfilterSchema;
