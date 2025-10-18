import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeSelectObjectSchema as ExchangeSelectObjectSchema } from './objects/ExchangeSelect.schema';
import { ExchangeIncludeObjectSchema as ExchangeIncludeObjectSchema } from './objects/ExchangeInclude.schema';
import { ExchangeUpdateInputObjectSchema as ExchangeUpdateInputObjectSchema } from './objects/ExchangeUpdateInput.schema';
import { ExchangeUncheckedUpdateInputObjectSchema as ExchangeUncheckedUpdateInputObjectSchema } from './objects/ExchangeUncheckedUpdateInput.schema';
import { ExchangeWhereUniqueInputObjectSchema as ExchangeWhereUniqueInputObjectSchema } from './objects/ExchangeWhereUniqueInput.schema';

export const ExchangeUpdateOneSchema: z.ZodType<Prisma.ExchangeUpdateArgs> = z.object({ select: ExchangeSelectObjectSchema.optional(), include: ExchangeIncludeObjectSchema.optional(), data: z.union([ExchangeUpdateInputObjectSchema, ExchangeUncheckedUpdateInputObjectSchema]), where: ExchangeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ExchangeUpdateArgs>;

export const ExchangeUpdateOneZodSchema = z.object({ select: ExchangeSelectObjectSchema.optional(), include: ExchangeIncludeObjectSchema.optional(), data: z.union([ExchangeUpdateInputObjectSchema, ExchangeUncheckedUpdateInputObjectSchema]), where: ExchangeWhereUniqueInputObjectSchema }).strict();