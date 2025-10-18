import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupCreateWithoutExchangesInputObjectSchema as BotGroupCreateWithoutExchangesInputObjectSchema } from './BotGroupCreateWithoutExchangesInput.schema';
import { BotGroupUncheckedCreateWithoutExchangesInputObjectSchema as BotGroupUncheckedCreateWithoutExchangesInputObjectSchema } from './BotGroupUncheckedCreateWithoutExchangesInput.schema';
import { BotGroupCreateOrConnectWithoutExchangesInputObjectSchema as BotGroupCreateOrConnectWithoutExchangesInputObjectSchema } from './BotGroupCreateOrConnectWithoutExchangesInput.schema';
import { BotGroupUpsertWithoutExchangesInputObjectSchema as BotGroupUpsertWithoutExchangesInputObjectSchema } from './BotGroupUpsertWithoutExchangesInput.schema';
import { BotGroupWhereUniqueInputObjectSchema as BotGroupWhereUniqueInputObjectSchema } from './BotGroupWhereUniqueInput.schema';
import { BotGroupUpdateToOneWithWhereWithoutExchangesInputObjectSchema as BotGroupUpdateToOneWithWhereWithoutExchangesInputObjectSchema } from './BotGroupUpdateToOneWithWhereWithoutExchangesInput.schema';
import { BotGroupUpdateWithoutExchangesInputObjectSchema as BotGroupUpdateWithoutExchangesInputObjectSchema } from './BotGroupUpdateWithoutExchangesInput.schema';
import { BotGroupUncheckedUpdateWithoutExchangesInputObjectSchema as BotGroupUncheckedUpdateWithoutExchangesInputObjectSchema } from './BotGroupUncheckedUpdateWithoutExchangesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BotGroupCreateWithoutExchangesInputObjectSchema), z.lazy(() => BotGroupUncheckedCreateWithoutExchangesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BotGroupCreateOrConnectWithoutExchangesInputObjectSchema).optional(),
  upsert: z.lazy(() => BotGroupUpsertWithoutExchangesInputObjectSchema).optional(),
  connect: z.lazy(() => BotGroupWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => BotGroupUpdateToOneWithWhereWithoutExchangesInputObjectSchema), z.lazy(() => BotGroupUpdateWithoutExchangesInputObjectSchema), z.lazy(() => BotGroupUncheckedUpdateWithoutExchangesInputObjectSchema)]).optional()
}).strict();
export const BotGroupUpdateOneRequiredWithoutExchangesNestedInputObjectSchema: z.ZodType<Prisma.BotGroupUpdateOneRequiredWithoutExchangesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupUpdateOneRequiredWithoutExchangesNestedInput>;
export const BotGroupUpdateOneRequiredWithoutExchangesNestedInputObjectZodSchema = makeSchema();
