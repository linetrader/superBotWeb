import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotStatusSchema } from '../enums/BotStatus.schema'

const nestedenumbotstatusnullablefilterSchema = z.object({
  equals: BotStatusSchema.optional().nullable(),
  in: BotStatusSchema.array().optional().nullable(),
  notIn: BotStatusSchema.array().optional().nullable(),
  not: z.union([BotStatusSchema, z.lazy(() => NestedEnumBotStatusNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumBotStatusNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumBotStatusNullableFilter> = nestedenumbotstatusnullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumBotStatusNullableFilter>;
export const NestedEnumBotStatusNullableFilterObjectZodSchema = nestedenumbotstatusnullablefilterSchema;
