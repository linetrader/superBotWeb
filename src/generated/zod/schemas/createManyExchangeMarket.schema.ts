import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeMarketCreateManyInputObjectSchema as ExchangeMarketCreateManyInputObjectSchema } from './objects/ExchangeMarketCreateManyInput.schema';

export const ExchangeMarketCreateManySchema: z.ZodType<Prisma.ExchangeMarketCreateManyArgs> = z.object({ data: z.union([ ExchangeMarketCreateManyInputObjectSchema, z.array(ExchangeMarketCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ExchangeMarketCreateManyArgs>;

export const ExchangeMarketCreateManyZodSchema = z.object({ data: z.union([ ExchangeMarketCreateManyInputObjectSchema, z.array(ExchangeMarketCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();