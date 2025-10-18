import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeMarketSelectObjectSchema as ExchangeMarketSelectObjectSchema } from './objects/ExchangeMarketSelect.schema';
import { ExchangeMarketIncludeObjectSchema as ExchangeMarketIncludeObjectSchema } from './objects/ExchangeMarketInclude.schema';
import { ExchangeMarketWhereUniqueInputObjectSchema as ExchangeMarketWhereUniqueInputObjectSchema } from './objects/ExchangeMarketWhereUniqueInput.schema';

export const ExchangeMarketDeleteOneSchema: z.ZodType<Prisma.ExchangeMarketDeleteArgs> = z.object({ select: ExchangeMarketSelectObjectSchema.optional(), include: ExchangeMarketIncludeObjectSchema.optional(), where: ExchangeMarketWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ExchangeMarketDeleteArgs>;

export const ExchangeMarketDeleteOneZodSchema = z.object({ select: ExchangeMarketSelectObjectSchema.optional(), include: ExchangeMarketIncludeObjectSchema.optional(), where: ExchangeMarketWhereUniqueInputObjectSchema }).strict();