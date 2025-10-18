import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotCreateWithoutBotRuntimeInputObjectSchema as TradingBotCreateWithoutBotRuntimeInputObjectSchema } from './TradingBotCreateWithoutBotRuntimeInput.schema';
import { TradingBotUncheckedCreateWithoutBotRuntimeInputObjectSchema as TradingBotUncheckedCreateWithoutBotRuntimeInputObjectSchema } from './TradingBotUncheckedCreateWithoutBotRuntimeInput.schema';
import { TradingBotCreateOrConnectWithoutBotRuntimeInputObjectSchema as TradingBotCreateOrConnectWithoutBotRuntimeInputObjectSchema } from './TradingBotCreateOrConnectWithoutBotRuntimeInput.schema';
import { TradingBotUpsertWithoutBotRuntimeInputObjectSchema as TradingBotUpsertWithoutBotRuntimeInputObjectSchema } from './TradingBotUpsertWithoutBotRuntimeInput.schema';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema';
import { TradingBotUpdateToOneWithWhereWithoutBotRuntimeInputObjectSchema as TradingBotUpdateToOneWithWhereWithoutBotRuntimeInputObjectSchema } from './TradingBotUpdateToOneWithWhereWithoutBotRuntimeInput.schema';
import { TradingBotUpdateWithoutBotRuntimeInputObjectSchema as TradingBotUpdateWithoutBotRuntimeInputObjectSchema } from './TradingBotUpdateWithoutBotRuntimeInput.schema';
import { TradingBotUncheckedUpdateWithoutBotRuntimeInputObjectSchema as TradingBotUncheckedUpdateWithoutBotRuntimeInputObjectSchema } from './TradingBotUncheckedUpdateWithoutBotRuntimeInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TradingBotCreateWithoutBotRuntimeInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutBotRuntimeInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TradingBotCreateOrConnectWithoutBotRuntimeInputObjectSchema).optional(),
  upsert: z.lazy(() => TradingBotUpsertWithoutBotRuntimeInputObjectSchema).optional(),
  connect: z.lazy(() => TradingBotWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TradingBotUpdateToOneWithWhereWithoutBotRuntimeInputObjectSchema), z.lazy(() => TradingBotUpdateWithoutBotRuntimeInputObjectSchema), z.lazy(() => TradingBotUncheckedUpdateWithoutBotRuntimeInputObjectSchema)]).optional()
}).strict();
export const TradingBotUpdateOneRequiredWithoutBotRuntimeNestedInputObjectSchema: z.ZodType<Prisma.TradingBotUpdateOneRequiredWithoutBotRuntimeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUpdateOneRequiredWithoutBotRuntimeNestedInput>;
export const TradingBotUpdateOneRequiredWithoutBotRuntimeNestedInputObjectZodSchema = makeSchema();
