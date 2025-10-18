import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeMarketUpdateManyMutationInputObjectSchema as ExchangeMarketUpdateManyMutationInputObjectSchema } from './objects/ExchangeMarketUpdateManyMutationInput.schema';
import { ExchangeMarketWhereInputObjectSchema as ExchangeMarketWhereInputObjectSchema } from './objects/ExchangeMarketWhereInput.schema';

export const ExchangeMarketUpdateManySchema: z.ZodType<Prisma.ExchangeMarketUpdateManyArgs> = z.object({ data: ExchangeMarketUpdateManyMutationInputObjectSchema, where: ExchangeMarketWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ExchangeMarketUpdateManyArgs>;

export const ExchangeMarketUpdateManyZodSchema = z.object({ data: ExchangeMarketUpdateManyMutationInputObjectSchema, where: ExchangeMarketWhereInputObjectSchema.optional() }).strict();