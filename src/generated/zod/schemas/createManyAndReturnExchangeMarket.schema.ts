import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeMarketSelectObjectSchema as ExchangeMarketSelectObjectSchema } from './objects/ExchangeMarketSelect.schema';
import { ExchangeMarketCreateManyInputObjectSchema as ExchangeMarketCreateManyInputObjectSchema } from './objects/ExchangeMarketCreateManyInput.schema';

export const ExchangeMarketCreateManyAndReturnSchema: z.ZodType<Prisma.ExchangeMarketCreateManyAndReturnArgs> = z.object({ select: ExchangeMarketSelectObjectSchema.optional(), data: z.union([ ExchangeMarketCreateManyInputObjectSchema, z.array(ExchangeMarketCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ExchangeMarketCreateManyAndReturnArgs>;

export const ExchangeMarketCreateManyAndReturnZodSchema = z.object({ select: ExchangeMarketSelectObjectSchema.optional(), data: z.union([ ExchangeMarketCreateManyInputObjectSchema, z.array(ExchangeMarketCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();