import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotStatusSchema } from '../enums/BotStatus.schema';
import { NestedEnumBotStatusNullableFilterObjectSchema as NestedEnumBotStatusNullableFilterObjectSchema } from './NestedEnumBotStatusNullableFilter.schema'

const makeSchema = () => z.object({
  equals: BotStatusSchema.optional().nullable(),
  in: BotStatusSchema.array().optional().nullable(),
  notIn: BotStatusSchema.array().optional().nullable(),
  not: z.union([BotStatusSchema, z.lazy(() => NestedEnumBotStatusNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumBotStatusNullableFilterObjectSchema: z.ZodType<Prisma.EnumBotStatusNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumBotStatusNullableFilter>;
export const EnumBotStatusNullableFilterObjectZodSchema = makeSchema();
