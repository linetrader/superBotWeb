import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupExchangeCreateWithoutExchangeMarketInputObjectSchema as BotGroupExchangeCreateWithoutExchangeMarketInputObjectSchema } from './BotGroupExchangeCreateWithoutExchangeMarketInput.schema';
import { BotGroupExchangeUncheckedCreateWithoutExchangeMarketInputObjectSchema as BotGroupExchangeUncheckedCreateWithoutExchangeMarketInputObjectSchema } from './BotGroupExchangeUncheckedCreateWithoutExchangeMarketInput.schema';
import { BotGroupExchangeCreateOrConnectWithoutExchangeMarketInputObjectSchema as BotGroupExchangeCreateOrConnectWithoutExchangeMarketInputObjectSchema } from './BotGroupExchangeCreateOrConnectWithoutExchangeMarketInput.schema';
import { BotGroupExchangeCreateManyExchangeMarketInputEnvelopeObjectSchema as BotGroupExchangeCreateManyExchangeMarketInputEnvelopeObjectSchema } from './BotGroupExchangeCreateManyExchangeMarketInputEnvelope.schema';
import { BotGroupExchangeWhereUniqueInputObjectSchema as BotGroupExchangeWhereUniqueInputObjectSchema } from './BotGroupExchangeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BotGroupExchangeCreateWithoutExchangeMarketInputObjectSchema), z.lazy(() => BotGroupExchangeCreateWithoutExchangeMarketInputObjectSchema).array(), z.lazy(() => BotGroupExchangeUncheckedCreateWithoutExchangeMarketInputObjectSchema), z.lazy(() => BotGroupExchangeUncheckedCreateWithoutExchangeMarketInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BotGroupExchangeCreateOrConnectWithoutExchangeMarketInputObjectSchema), z.lazy(() => BotGroupExchangeCreateOrConnectWithoutExchangeMarketInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BotGroupExchangeCreateManyExchangeMarketInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema), z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BotGroupExchangeCreateNestedManyWithoutExchangeMarketInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeCreateNestedManyWithoutExchangeMarketInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeCreateNestedManyWithoutExchangeMarketInput>;
export const BotGroupExchangeCreateNestedManyWithoutExchangeMarketInputObjectZodSchema = makeSchema();
