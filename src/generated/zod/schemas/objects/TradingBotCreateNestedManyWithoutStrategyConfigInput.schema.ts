import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotCreateWithoutStrategyConfigInputObjectSchema as TradingBotCreateWithoutStrategyConfigInputObjectSchema } from './TradingBotCreateWithoutStrategyConfigInput.schema';
import { TradingBotUncheckedCreateWithoutStrategyConfigInputObjectSchema as TradingBotUncheckedCreateWithoutStrategyConfigInputObjectSchema } from './TradingBotUncheckedCreateWithoutStrategyConfigInput.schema';
import { TradingBotCreateOrConnectWithoutStrategyConfigInputObjectSchema as TradingBotCreateOrConnectWithoutStrategyConfigInputObjectSchema } from './TradingBotCreateOrConnectWithoutStrategyConfigInput.schema';
import { TradingBotCreateManyStrategyConfigInputEnvelopeObjectSchema as TradingBotCreateManyStrategyConfigInputEnvelopeObjectSchema } from './TradingBotCreateManyStrategyConfigInputEnvelope.schema';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TradingBotCreateWithoutStrategyConfigInputObjectSchema), z.lazy(() => TradingBotCreateWithoutStrategyConfigInputObjectSchema).array(), z.lazy(() => TradingBotUncheckedCreateWithoutStrategyConfigInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutStrategyConfigInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TradingBotCreateOrConnectWithoutStrategyConfigInputObjectSchema), z.lazy(() => TradingBotCreateOrConnectWithoutStrategyConfigInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TradingBotCreateManyStrategyConfigInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TradingBotWhereUniqueInputObjectSchema), z.lazy(() => TradingBotWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TradingBotCreateNestedManyWithoutStrategyConfigInputObjectSchema: z.ZodType<Prisma.TradingBotCreateNestedManyWithoutStrategyConfigInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotCreateNestedManyWithoutStrategyConfigInput>;
export const TradingBotCreateNestedManyWithoutStrategyConfigInputObjectZodSchema = makeSchema();
