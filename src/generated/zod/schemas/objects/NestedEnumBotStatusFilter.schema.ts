import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotStatusSchema } from '../enums/BotStatus.schema'

const nestedenumbotstatusfilterSchema = z.object({
  equals: BotStatusSchema.optional(),
  in: BotStatusSchema.array().optional(),
  notIn: BotStatusSchema.array().optional(),
  not: z.union([BotStatusSchema, z.lazy(() => NestedEnumBotStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumBotStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumBotStatusFilter> = nestedenumbotstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumBotStatusFilter>;
export const NestedEnumBotStatusFilterObjectZodSchema = nestedenumbotstatusfilterSchema;
