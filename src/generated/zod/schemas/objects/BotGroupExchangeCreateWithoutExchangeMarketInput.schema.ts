import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupCreateNestedOneWithoutExchangesInputObjectSchema as BotGroupCreateNestedOneWithoutExchangesInputObjectSchema } from './BotGroupCreateNestedOneWithoutExchangesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  enabled: z.boolean().optional(),
  allocationBps: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  group: z.lazy(() => BotGroupCreateNestedOneWithoutExchangesInputObjectSchema)
}).strict();
export const BotGroupExchangeCreateWithoutExchangeMarketInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeCreateWithoutExchangeMarketInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeCreateWithoutExchangeMarketInput>;
export const BotGroupExchangeCreateWithoutExchangeMarketInputObjectZodSchema = makeSchema();
