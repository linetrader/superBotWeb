import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotGroupExchangeSelectObjectSchema as BotGroupExchangeSelectObjectSchema } from './objects/BotGroupExchangeSelect.schema';
import { BotGroupExchangeIncludeObjectSchema as BotGroupExchangeIncludeObjectSchema } from './objects/BotGroupExchangeInclude.schema';
import { BotGroupExchangeWhereUniqueInputObjectSchema as BotGroupExchangeWhereUniqueInputObjectSchema } from './objects/BotGroupExchangeWhereUniqueInput.schema';
import { BotGroupExchangeCreateInputObjectSchema as BotGroupExchangeCreateInputObjectSchema } from './objects/BotGroupExchangeCreateInput.schema';
import { BotGroupExchangeUncheckedCreateInputObjectSchema as BotGroupExchangeUncheckedCreateInputObjectSchema } from './objects/BotGroupExchangeUncheckedCreateInput.schema';
import { BotGroupExchangeUpdateInputObjectSchema as BotGroupExchangeUpdateInputObjectSchema } from './objects/BotGroupExchangeUpdateInput.schema';
import { BotGroupExchangeUncheckedUpdateInputObjectSchema as BotGroupExchangeUncheckedUpdateInputObjectSchema } from './objects/BotGroupExchangeUncheckedUpdateInput.schema';

export const BotGroupExchangeUpsertOneSchema: z.ZodType<Prisma.BotGroupExchangeUpsertArgs> = z.object({ select: BotGroupExchangeSelectObjectSchema.optional(), include: BotGroupExchangeIncludeObjectSchema.optional(), where: BotGroupExchangeWhereUniqueInputObjectSchema, create: z.union([ BotGroupExchangeCreateInputObjectSchema, BotGroupExchangeUncheckedCreateInputObjectSchema ]), update: z.union([ BotGroupExchangeUpdateInputObjectSchema, BotGroupExchangeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.BotGroupExchangeUpsertArgs>;

export const BotGroupExchangeUpsertOneZodSchema = z.object({ select: BotGroupExchangeSelectObjectSchema.optional(), include: BotGroupExchangeIncludeObjectSchema.optional(), where: BotGroupExchangeWhereUniqueInputObjectSchema, create: z.union([ BotGroupExchangeCreateInputObjectSchema, BotGroupExchangeUncheckedCreateInputObjectSchema ]), update: z.union([ BotGroupExchangeUpdateInputObjectSchema, BotGroupExchangeUncheckedUpdateInputObjectSchema ]) }).strict();