import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeSelectObjectSchema as ExchangeSelectObjectSchema } from './objects/ExchangeSelect.schema';
import { ExchangeCreateManyInputObjectSchema as ExchangeCreateManyInputObjectSchema } from './objects/ExchangeCreateManyInput.schema';

export const ExchangeCreateManyAndReturnSchema: z.ZodType<Prisma.ExchangeCreateManyAndReturnArgs> = z.object({ select: ExchangeSelectObjectSchema.optional(), data: z.union([ ExchangeCreateManyInputObjectSchema, z.array(ExchangeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ExchangeCreateManyAndReturnArgs>;

export const ExchangeCreateManyAndReturnZodSchema = z.object({ select: ExchangeSelectObjectSchema.optional(), data: z.union([ ExchangeCreateManyInputObjectSchema, z.array(ExchangeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();