import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotGroupExchangeSelectObjectSchema as BotGroupExchangeSelectObjectSchema } from './objects/BotGroupExchangeSelect.schema';
import { BotGroupExchangeIncludeObjectSchema as BotGroupExchangeIncludeObjectSchema } from './objects/BotGroupExchangeInclude.schema';
import { BotGroupExchangeWhereUniqueInputObjectSchema as BotGroupExchangeWhereUniqueInputObjectSchema } from './objects/BotGroupExchangeWhereUniqueInput.schema';

export const BotGroupExchangeFindUniqueSchema: z.ZodType<Prisma.BotGroupExchangeFindUniqueArgs> = z.object({ select: BotGroupExchangeSelectObjectSchema.optional(), include: BotGroupExchangeIncludeObjectSchema.optional(), where: BotGroupExchangeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BotGroupExchangeFindUniqueArgs>;

export const BotGroupExchangeFindUniqueZodSchema = z.object({ select: BotGroupExchangeSelectObjectSchema.optional(), include: BotGroupExchangeIncludeObjectSchema.optional(), where: BotGroupExchangeWhereUniqueInputObjectSchema }).strict();