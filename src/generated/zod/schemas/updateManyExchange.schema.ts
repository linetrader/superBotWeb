import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeUpdateManyMutationInputObjectSchema as ExchangeUpdateManyMutationInputObjectSchema } from './objects/ExchangeUpdateManyMutationInput.schema';
import { ExchangeWhereInputObjectSchema as ExchangeWhereInputObjectSchema } from './objects/ExchangeWhereInput.schema';

export const ExchangeUpdateManySchema: z.ZodType<Prisma.ExchangeUpdateManyArgs> = z.object({ data: ExchangeUpdateManyMutationInputObjectSchema, where: ExchangeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ExchangeUpdateManyArgs>;

export const ExchangeUpdateManyZodSchema = z.object({ data: ExchangeUpdateManyMutationInputObjectSchema, where: ExchangeWhereInputObjectSchema.optional() }).strict();