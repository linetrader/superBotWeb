import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeMarketSelectObjectSchema as ExchangeMarketSelectObjectSchema } from './objects/ExchangeMarketSelect.schema';
import { ExchangeMarketIncludeObjectSchema as ExchangeMarketIncludeObjectSchema } from './objects/ExchangeMarketInclude.schema';
import { ExchangeMarketUpdateInputObjectSchema as ExchangeMarketUpdateInputObjectSchema } from './objects/ExchangeMarketUpdateInput.schema';
import { ExchangeMarketUncheckedUpdateInputObjectSchema as ExchangeMarketUncheckedUpdateInputObjectSchema } from './objects/ExchangeMarketUncheckedUpdateInput.schema';
import { ExchangeMarketWhereUniqueInputObjectSchema as ExchangeMarketWhereUniqueInputObjectSchema } from './objects/ExchangeMarketWhereUniqueInput.schema';

export const ExchangeMarketUpdateOneSchema: z.ZodType<Prisma.ExchangeMarketUpdateArgs> = z.object({ select: ExchangeMarketSelectObjectSchema.optional(), include: ExchangeMarketIncludeObjectSchema.optional(), data: z.union([ExchangeMarketUpdateInputObjectSchema, ExchangeMarketUncheckedUpdateInputObjectSchema]), where: ExchangeMarketWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ExchangeMarketUpdateArgs>;

export const ExchangeMarketUpdateOneZodSchema = z.object({ select: ExchangeMarketSelectObjectSchema.optional(), include: ExchangeMarketIncludeObjectSchema.optional(), data: z.union([ExchangeMarketUpdateInputObjectSchema, ExchangeMarketUncheckedUpdateInputObjectSchema]), where: ExchangeMarketWhereUniqueInputObjectSchema }).strict();