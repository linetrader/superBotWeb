import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupExchangeCreateWithoutGroupInputObjectSchema as BotGroupExchangeCreateWithoutGroupInputObjectSchema } from './BotGroupExchangeCreateWithoutGroupInput.schema';
import { BotGroupExchangeUncheckedCreateWithoutGroupInputObjectSchema as BotGroupExchangeUncheckedCreateWithoutGroupInputObjectSchema } from './BotGroupExchangeUncheckedCreateWithoutGroupInput.schema';
import { BotGroupExchangeCreateOrConnectWithoutGroupInputObjectSchema as BotGroupExchangeCreateOrConnectWithoutGroupInputObjectSchema } from './BotGroupExchangeCreateOrConnectWithoutGroupInput.schema';
import { BotGroupExchangeCreateManyGroupInputEnvelopeObjectSchema as BotGroupExchangeCreateManyGroupInputEnvelopeObjectSchema } from './BotGroupExchangeCreateManyGroupInputEnvelope.schema';
import { BotGroupExchangeWhereUniqueInputObjectSchema as BotGroupExchangeWhereUniqueInputObjectSchema } from './BotGroupExchangeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BotGroupExchangeCreateWithoutGroupInputObjectSchema), z.lazy(() => BotGroupExchangeCreateWithoutGroupInputObjectSchema).array(), z.lazy(() => BotGroupExchangeUncheckedCreateWithoutGroupInputObjectSchema), z.lazy(() => BotGroupExchangeUncheckedCreateWithoutGroupInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BotGroupExchangeCreateOrConnectWithoutGroupInputObjectSchema), z.lazy(() => BotGroupExchangeCreateOrConnectWithoutGroupInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BotGroupExchangeCreateManyGroupInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema), z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BotGroupExchangeCreateNestedManyWithoutGroupInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeCreateNestedManyWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeCreateNestedManyWithoutGroupInput>;
export const BotGroupExchangeCreateNestedManyWithoutGroupInputObjectZodSchema = makeSchema();
