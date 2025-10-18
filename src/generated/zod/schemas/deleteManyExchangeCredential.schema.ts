import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeCredentialWhereInputObjectSchema as ExchangeCredentialWhereInputObjectSchema } from './objects/ExchangeCredentialWhereInput.schema';

export const ExchangeCredentialDeleteManySchema: z.ZodType<Prisma.ExchangeCredentialDeleteManyArgs> = z.object({ where: ExchangeCredentialWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ExchangeCredentialDeleteManyArgs>;

export const ExchangeCredentialDeleteManyZodSchema = z.object({ where: ExchangeCredentialWhereInputObjectSchema.optional() }).strict();