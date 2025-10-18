import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotGroupExchangeSelectObjectSchema as BotGroupExchangeSelectObjectSchema } from './objects/BotGroupExchangeSelect.schema';
import { BotGroupExchangeIncludeObjectSchema as BotGroupExchangeIncludeObjectSchema } from './objects/BotGroupExchangeInclude.schema';
import { BotGroupExchangeCreateInputObjectSchema as BotGroupExchangeCreateInputObjectSchema } from './objects/BotGroupExchangeCreateInput.schema';
import { BotGroupExchangeUncheckedCreateInputObjectSchema as BotGroupExchangeUncheckedCreateInputObjectSchema } from './objects/BotGroupExchangeUncheckedCreateInput.schema';

export const BotGroupExchangeCreateOneSchema: z.ZodType<Prisma.BotGroupExchangeCreateArgs> = z.object({ select: BotGroupExchangeSelectObjectSchema.optional(), include: BotGroupExchangeIncludeObjectSchema.optional(), data: z.union([BotGroupExchangeCreateInputObjectSchema, BotGroupExchangeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.BotGroupExchangeCreateArgs>;

export const BotGroupExchangeCreateOneZodSchema = z.object({ select: BotGroupExchangeSelectObjectSchema.optional(), include: BotGroupExchangeIncludeObjectSchema.optional(), data: z.union([BotGroupExchangeCreateInputObjectSchema, BotGroupExchangeUncheckedCreateInputObjectSchema]) }).strict();