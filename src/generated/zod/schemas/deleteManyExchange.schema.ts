import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeWhereInputObjectSchema as ExchangeWhereInputObjectSchema } from './objects/ExchangeWhereInput.schema';

export const ExchangeDeleteManySchema: z.ZodType<Prisma.ExchangeDeleteManyArgs> = z.object({ where: ExchangeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ExchangeDeleteManyArgs>;

export const ExchangeDeleteManyZodSchema = z.object({ where: ExchangeWhereInputObjectSchema.optional() }).strict();