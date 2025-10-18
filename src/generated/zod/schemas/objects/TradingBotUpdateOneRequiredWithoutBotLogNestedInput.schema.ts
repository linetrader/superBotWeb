import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotCreateWithoutBotLogInputObjectSchema as TradingBotCreateWithoutBotLogInputObjectSchema } from './TradingBotCreateWithoutBotLogInput.schema';
import { TradingBotUncheckedCreateWithoutBotLogInputObjectSchema as TradingBotUncheckedCreateWithoutBotLogInputObjectSchema } from './TradingBotUncheckedCreateWithoutBotLogInput.schema';
import { TradingBotCreateOrConnectWithoutBotLogInputObjectSchema as TradingBotCreateOrConnectWithoutBotLogInputObjectSchema } from './TradingBotCreateOrConnectWithoutBotLogInput.schema';
import { TradingBotUpsertWithoutBotLogInputObjectSchema as TradingBotUpsertWithoutBotLogInputObjectSchema } from './TradingBotUpsertWithoutBotLogInput.schema';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema';
import { TradingBotUpdateToOneWithWhereWithoutBotLogInputObjectSchema as TradingBotUpdateToOneWithWhereWithoutBotLogInputObjectSchema } from './TradingBotUpdateToOneWithWhereWithoutBotLogInput.schema';
import { TradingBotUpdateWithoutBotLogInputObjectSchema as TradingBotUpdateWithoutBotLogInputObjectSchema } from './TradingBotUpdateWithoutBotLogInput.schema';
import { TradingBotUncheckedUpdateWithoutBotLogInputObjectSchema as TradingBotUncheckedUpdateWithoutBotLogInputObjectSchema } from './TradingBotUncheckedUpdateWithoutBotLogInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TradingBotCreateWithoutBotLogInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutBotLogInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TradingBotCreateOrConnectWithoutBotLogInputObjectSchema).optional(),
  upsert: z.lazy(() => TradingBotUpsertWithoutBotLogInputObjectSchema).optional(),
  connect: z.lazy(() => TradingBotWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TradingBotUpdateToOneWithWhereWithoutBotLogInputObjectSchema), z.lazy(() => TradingBotUpdateWithoutBotLogInputObjectSchema), z.lazy(() => TradingBotUncheckedUpdateWithoutBotLogInputObjectSchema)]).optional()
}).strict();
export const TradingBotUpdateOneRequiredWithoutBotLogNestedInputObjectSchema: z.ZodType<Prisma.TradingBotUpdateOneRequiredWithoutBotLogNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUpdateOneRequiredWithoutBotLogNestedInput>;
export const TradingBotUpdateOneRequiredWithoutBotLogNestedInputObjectZodSchema = makeSchema();
