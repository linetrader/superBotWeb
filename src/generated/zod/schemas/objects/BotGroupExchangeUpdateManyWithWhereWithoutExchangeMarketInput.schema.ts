import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupExchangeScalarWhereInputObjectSchema as BotGroupExchangeScalarWhereInputObjectSchema } from './BotGroupExchangeScalarWhereInput.schema';
import { BotGroupExchangeUpdateManyMutationInputObjectSchema as BotGroupExchangeUpdateManyMutationInputObjectSchema } from './BotGroupExchangeUpdateManyMutationInput.schema';
import { BotGroupExchangeUncheckedUpdateManyWithoutExchangeMarketInputObjectSchema as BotGroupExchangeUncheckedUpdateManyWithoutExchangeMarketInputObjectSchema } from './BotGroupExchangeUncheckedUpdateManyWithoutExchangeMarketInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BotGroupExchangeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BotGroupExchangeUpdateManyMutationInputObjectSchema), z.lazy(() => BotGroupExchangeUncheckedUpdateManyWithoutExchangeMarketInputObjectSchema)])
}).strict();
export const BotGroupExchangeUpdateManyWithWhereWithoutExchangeMarketInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeUpdateManyWithWhereWithoutExchangeMarketInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeUpdateManyWithWhereWithoutExchangeMarketInput>;
export const BotGroupExchangeUpdateManyWithWhereWithoutExchangeMarketInputObjectZodSchema = makeSchema();
