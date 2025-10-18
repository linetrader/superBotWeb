import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotCreateWithoutWorkItemsInputObjectSchema as TradingBotCreateWithoutWorkItemsInputObjectSchema } from './TradingBotCreateWithoutWorkItemsInput.schema';
import { TradingBotUncheckedCreateWithoutWorkItemsInputObjectSchema as TradingBotUncheckedCreateWithoutWorkItemsInputObjectSchema } from './TradingBotUncheckedCreateWithoutWorkItemsInput.schema';
import { TradingBotCreateOrConnectWithoutWorkItemsInputObjectSchema as TradingBotCreateOrConnectWithoutWorkItemsInputObjectSchema } from './TradingBotCreateOrConnectWithoutWorkItemsInput.schema';
import { TradingBotUpsertWithoutWorkItemsInputObjectSchema as TradingBotUpsertWithoutWorkItemsInputObjectSchema } from './TradingBotUpsertWithoutWorkItemsInput.schema';
import { TradingBotWhereInputObjectSchema as TradingBotWhereInputObjectSchema } from './TradingBotWhereInput.schema';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema';
import { TradingBotUpdateToOneWithWhereWithoutWorkItemsInputObjectSchema as TradingBotUpdateToOneWithWhereWithoutWorkItemsInputObjectSchema } from './TradingBotUpdateToOneWithWhereWithoutWorkItemsInput.schema';
import { TradingBotUpdateWithoutWorkItemsInputObjectSchema as TradingBotUpdateWithoutWorkItemsInputObjectSchema } from './TradingBotUpdateWithoutWorkItemsInput.schema';
import { TradingBotUncheckedUpdateWithoutWorkItemsInputObjectSchema as TradingBotUncheckedUpdateWithoutWorkItemsInputObjectSchema } from './TradingBotUncheckedUpdateWithoutWorkItemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TradingBotCreateWithoutWorkItemsInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutWorkItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TradingBotCreateOrConnectWithoutWorkItemsInputObjectSchema).optional(),
  upsert: z.lazy(() => TradingBotUpsertWithoutWorkItemsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => TradingBotWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => TradingBotWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => TradingBotWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TradingBotUpdateToOneWithWhereWithoutWorkItemsInputObjectSchema), z.lazy(() => TradingBotUpdateWithoutWorkItemsInputObjectSchema), z.lazy(() => TradingBotUncheckedUpdateWithoutWorkItemsInputObjectSchema)]).optional()
}).strict();
export const TradingBotUpdateOneWithoutWorkItemsNestedInputObjectSchema: z.ZodType<Prisma.TradingBotUpdateOneWithoutWorkItemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUpdateOneWithoutWorkItemsNestedInput>;
export const TradingBotUpdateOneWithoutWorkItemsNestedInputObjectZodSchema = makeSchema();
