import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeMarketSelectObjectSchema as ExchangeMarketSelectObjectSchema } from './objects/ExchangeMarketSelect.schema';
import { ExchangeMarketIncludeObjectSchema as ExchangeMarketIncludeObjectSchema } from './objects/ExchangeMarketInclude.schema';
import { ExchangeMarketWhereUniqueInputObjectSchema as ExchangeMarketWhereUniqueInputObjectSchema } from './objects/ExchangeMarketWhereUniqueInput.schema';

export const ExchangeMarketFindUniqueOrThrowSchema: z.ZodType<Prisma.ExchangeMarketFindUniqueOrThrowArgs> = z.object({ select: ExchangeMarketSelectObjectSchema.optional(), include: ExchangeMarketIncludeObjectSchema.optional(), where: ExchangeMarketWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ExchangeMarketFindUniqueOrThrowArgs>;

export const ExchangeMarketFindUniqueOrThrowZodSchema = z.object({ select: ExchangeMarketSelectObjectSchema.optional(), include: ExchangeMarketIncludeObjectSchema.optional(), where: ExchangeMarketWhereUniqueInputObjectSchema }).strict();