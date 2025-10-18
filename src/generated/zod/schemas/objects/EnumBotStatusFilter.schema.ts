import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotStatusSchema } from '../enums/BotStatus.schema';
import { NestedEnumBotStatusFilterObjectSchema as NestedEnumBotStatusFilterObjectSchema } from './NestedEnumBotStatusFilter.schema'

const makeSchema = () => z.object({
  equals: BotStatusSchema.optional(),
  in: BotStatusSchema.array().optional(),
  notIn: BotStatusSchema.array().optional(),
  not: z.union([BotStatusSchema, z.lazy(() => NestedEnumBotStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumBotStatusFilterObjectSchema: z.ZodType<Prisma.EnumBotStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumBotStatusFilter>;
export const EnumBotStatusFilterObjectZodSchema = makeSchema();
