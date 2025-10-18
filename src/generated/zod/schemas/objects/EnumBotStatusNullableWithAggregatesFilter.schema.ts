import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotStatusSchema } from '../enums/BotStatus.schema';
import { NestedEnumBotStatusNullableWithAggregatesFilterObjectSchema as NestedEnumBotStatusNullableWithAggregatesFilterObjectSchema } from './NestedEnumBotStatusNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumBotStatusNullableFilterObjectSchema as NestedEnumBotStatusNullableFilterObjectSchema } from './NestedEnumBotStatusNullableFilter.schema'

const makeSchema = () => z.object({
  equals: BotStatusSchema.optional().nullable(),
  in: BotStatusSchema.array().optional().nullable(),
  notIn: BotStatusSchema.array().optional().nullable(),
  not: z.union([BotStatusSchema, z.lazy(() => NestedEnumBotStatusNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumBotStatusNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumBotStatusNullableFilterObjectSchema).optional()
}).strict();
export const EnumBotStatusNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumBotStatusNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumBotStatusNullableWithAggregatesFilter>;
export const EnumBotStatusNullableWithAggregatesFilterObjectZodSchema = makeSchema();
