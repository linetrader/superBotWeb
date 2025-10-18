import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeMarketSelectObjectSchema as ExchangeMarketSelectObjectSchema } from './objects/ExchangeMarketSelect.schema';
import { ExchangeMarketUpdateManyMutationInputObjectSchema as ExchangeMarketUpdateManyMutationInputObjectSchema } from './objects/ExchangeMarketUpdateManyMutationInput.schema';
import { ExchangeMarketWhereInputObjectSchema as ExchangeMarketWhereInputObjectSchema } from './objects/ExchangeMarketWhereInput.schema';

export const ExchangeMarketUpdateManyAndReturnSchema: z.ZodType<Prisma.ExchangeMarketUpdateManyAndReturnArgs> = z.object({ select: ExchangeMarketSelectObjectSchema.optional(), data: ExchangeMarketUpdateManyMutationInputObjectSchema, where: ExchangeMarketWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ExchangeMarketUpdateManyAndReturnArgs>;

export const ExchangeMarketUpdateManyAndReturnZodSchema = z.object({ select: ExchangeMarketSelectObjectSchema.optional(), data: ExchangeMarketUpdateManyMutationInputObjectSchema, where: ExchangeMarketWhereInputObjectSchema.optional() }).strict();