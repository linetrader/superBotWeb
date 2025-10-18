import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeMarketWhereInputObjectSchema as ExchangeMarketWhereInputObjectSchema } from './objects/ExchangeMarketWhereInput.schema';

export const ExchangeMarketDeleteManySchema: z.ZodType<Prisma.ExchangeMarketDeleteManyArgs> = z.object({ where: ExchangeMarketWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ExchangeMarketDeleteManyArgs>;

export const ExchangeMarketDeleteManyZodSchema = z.object({ where: ExchangeMarketWhereInputObjectSchema.optional() }).strict();