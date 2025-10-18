import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupUpdateWithoutExchangesInputObjectSchema as BotGroupUpdateWithoutExchangesInputObjectSchema } from './BotGroupUpdateWithoutExchangesInput.schema';
import { BotGroupUncheckedUpdateWithoutExchangesInputObjectSchema as BotGroupUncheckedUpdateWithoutExchangesInputObjectSchema } from './BotGroupUncheckedUpdateWithoutExchangesInput.schema';
import { BotGroupCreateWithoutExchangesInputObjectSchema as BotGroupCreateWithoutExchangesInputObjectSchema } from './BotGroupCreateWithoutExchangesInput.schema';
import { BotGroupUncheckedCreateWithoutExchangesInputObjectSchema as BotGroupUncheckedCreateWithoutExchangesInputObjectSchema } from './BotGroupUncheckedCreateWithoutExchangesInput.schema';
import { BotGroupWhereInputObjectSchema as BotGroupWhereInputObjectSchema } from './BotGroupWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => BotGroupUpdateWithoutExchangesInputObjectSchema), z.lazy(() => BotGroupUncheckedUpdateWithoutExchangesInputObjectSchema)]),
  create: z.union([z.lazy(() => BotGroupCreateWithoutExchangesInputObjectSchema), z.lazy(() => BotGroupUncheckedCreateWithoutExchangesInputObjectSchema)]),
  where: z.lazy(() => BotGroupWhereInputObjectSchema).optional()
}).strict();
export const BotGroupUpsertWithoutExchangesInputObjectSchema: z.ZodType<Prisma.BotGroupUpsertWithoutExchangesInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupUpsertWithoutExchangesInput>;
export const BotGroupUpsertWithoutExchangesInputObjectZodSchema = makeSchema();
