import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotGroupExchangeSelectObjectSchema as BotGroupExchangeSelectObjectSchema } from './objects/BotGroupExchangeSelect.schema';
import { BotGroupExchangeIncludeObjectSchema as BotGroupExchangeIncludeObjectSchema } from './objects/BotGroupExchangeInclude.schema';
import { BotGroupExchangeUpdateInputObjectSchema as BotGroupExchangeUpdateInputObjectSchema } from './objects/BotGroupExchangeUpdateInput.schema';
import { BotGroupExchangeUncheckedUpdateInputObjectSchema as BotGroupExchangeUncheckedUpdateInputObjectSchema } from './objects/BotGroupExchangeUncheckedUpdateInput.schema';
import { BotGroupExchangeWhereUniqueInputObjectSchema as BotGroupExchangeWhereUniqueInputObjectSchema } from './objects/BotGroupExchangeWhereUniqueInput.schema';

export const BotGroupExchangeUpdateOneSchema: z.ZodType<Prisma.BotGroupExchangeUpdateArgs> = z.object({ select: BotGroupExchangeSelectObjectSchema.optional(), include: BotGroupExchangeIncludeObjectSchema.optional(), data: z.union([BotGroupExchangeUpdateInputObjectSchema, BotGroupExchangeUncheckedUpdateInputObjectSchema]), where: BotGroupExchangeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BotGroupExchangeUpdateArgs>;

export const BotGroupExchangeUpdateOneZodSchema = z.object({ select: BotGroupExchangeSelectObjectSchema.optional(), include: BotGroupExchangeIncludeObjectSchema.optional(), data: z.union([BotGroupExchangeUpdateInputObjectSchema, BotGroupExchangeUncheckedUpdateInputObjectSchema]), where: BotGroupExchangeWhereUniqueInputObjectSchema }).strict();