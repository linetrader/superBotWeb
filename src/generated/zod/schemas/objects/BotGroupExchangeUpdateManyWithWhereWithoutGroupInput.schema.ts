import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupExchangeScalarWhereInputObjectSchema as BotGroupExchangeScalarWhereInputObjectSchema } from './BotGroupExchangeScalarWhereInput.schema';
import { BotGroupExchangeUpdateManyMutationInputObjectSchema as BotGroupExchangeUpdateManyMutationInputObjectSchema } from './BotGroupExchangeUpdateManyMutationInput.schema';
import { BotGroupExchangeUncheckedUpdateManyWithoutGroupInputObjectSchema as BotGroupExchangeUncheckedUpdateManyWithoutGroupInputObjectSchema } from './BotGroupExchangeUncheckedUpdateManyWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BotGroupExchangeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BotGroupExchangeUpdateManyMutationInputObjectSchema), z.lazy(() => BotGroupExchangeUncheckedUpdateManyWithoutGroupInputObjectSchema)])
}).strict();
export const BotGroupExchangeUpdateManyWithWhereWithoutGroupInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeUpdateManyWithWhereWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeUpdateManyWithWhereWithoutGroupInput>;
export const BotGroupExchangeUpdateManyWithWhereWithoutGroupInputObjectZodSchema = makeSchema();
