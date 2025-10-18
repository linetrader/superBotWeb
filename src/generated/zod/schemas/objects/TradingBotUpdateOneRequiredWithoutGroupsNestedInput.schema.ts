import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotCreateWithoutGroupsInputObjectSchema as TradingBotCreateWithoutGroupsInputObjectSchema } from './TradingBotCreateWithoutGroupsInput.schema';
import { TradingBotUncheckedCreateWithoutGroupsInputObjectSchema as TradingBotUncheckedCreateWithoutGroupsInputObjectSchema } from './TradingBotUncheckedCreateWithoutGroupsInput.schema';
import { TradingBotCreateOrConnectWithoutGroupsInputObjectSchema as TradingBotCreateOrConnectWithoutGroupsInputObjectSchema } from './TradingBotCreateOrConnectWithoutGroupsInput.schema';
import { TradingBotUpsertWithoutGroupsInputObjectSchema as TradingBotUpsertWithoutGroupsInputObjectSchema } from './TradingBotUpsertWithoutGroupsInput.schema';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema';
import { TradingBotUpdateToOneWithWhereWithoutGroupsInputObjectSchema as TradingBotUpdateToOneWithWhereWithoutGroupsInputObjectSchema } from './TradingBotUpdateToOneWithWhereWithoutGroupsInput.schema';
import { TradingBotUpdateWithoutGroupsInputObjectSchema as TradingBotUpdateWithoutGroupsInputObjectSchema } from './TradingBotUpdateWithoutGroupsInput.schema';
import { TradingBotUncheckedUpdateWithoutGroupsInputObjectSchema as TradingBotUncheckedUpdateWithoutGroupsInputObjectSchema } from './TradingBotUncheckedUpdateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TradingBotCreateWithoutGroupsInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutGroupsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TradingBotCreateOrConnectWithoutGroupsInputObjectSchema).optional(),
  upsert: z.lazy(() => TradingBotUpsertWithoutGroupsInputObjectSchema).optional(),
  connect: z.lazy(() => TradingBotWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TradingBotUpdateToOneWithWhereWithoutGroupsInputObjectSchema), z.lazy(() => TradingBotUpdateWithoutGroupsInputObjectSchema), z.lazy(() => TradingBotUncheckedUpdateWithoutGroupsInputObjectSchema)]).optional()
}).strict();
export const TradingBotUpdateOneRequiredWithoutGroupsNestedInputObjectSchema: z.ZodType<Prisma.TradingBotUpdateOneRequiredWithoutGroupsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUpdateOneRequiredWithoutGroupsNestedInput>;
export const TradingBotUpdateOneRequiredWithoutGroupsNestedInputObjectZodSchema = makeSchema();
