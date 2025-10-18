import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeSelectObjectSchema as ExchangeSelectObjectSchema } from './objects/ExchangeSelect.schema';
import { ExchangeUpdateManyMutationInputObjectSchema as ExchangeUpdateManyMutationInputObjectSchema } from './objects/ExchangeUpdateManyMutationInput.schema';
import { ExchangeWhereInputObjectSchema as ExchangeWhereInputObjectSchema } from './objects/ExchangeWhereInput.schema';

export const ExchangeUpdateManyAndReturnSchema: z.ZodType<Prisma.ExchangeUpdateManyAndReturnArgs> = z.object({ select: ExchangeSelectObjectSchema.optional(), data: ExchangeUpdateManyMutationInputObjectSchema, where: ExchangeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ExchangeUpdateManyAndReturnArgs>;

export const ExchangeUpdateManyAndReturnZodSchema = z.object({ select: ExchangeSelectObjectSchema.optional(), data: ExchangeUpdateManyMutationInputObjectSchema, where: ExchangeWhereInputObjectSchema.optional() }).strict();