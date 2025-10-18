import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupWhereInputObjectSchema as BotGroupWhereInputObjectSchema } from './BotGroupWhereInput.schema';
import { BotGroupUpdateWithoutExchangesInputObjectSchema as BotGroupUpdateWithoutExchangesInputObjectSchema } from './BotGroupUpdateWithoutExchangesInput.schema';
import { BotGroupUncheckedUpdateWithoutExchangesInputObjectSchema as BotGroupUncheckedUpdateWithoutExchangesInputObjectSchema } from './BotGroupUncheckedUpdateWithoutExchangesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BotGroupWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => BotGroupUpdateWithoutExchangesInputObjectSchema), z.lazy(() => BotGroupUncheckedUpdateWithoutExchangesInputObjectSchema)])
}).strict();
export const BotGroupUpdateToOneWithWhereWithoutExchangesInputObjectSchema: z.ZodType<Prisma.BotGroupUpdateToOneWithWhereWithoutExchangesInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupUpdateToOneWithWhereWithoutExchangesInput>;
export const BotGroupUpdateToOneWithWhereWithoutExchangesInputObjectZodSchema = makeSchema();
