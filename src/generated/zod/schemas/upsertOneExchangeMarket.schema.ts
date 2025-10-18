import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeMarketSelectObjectSchema as ExchangeMarketSelectObjectSchema } from './objects/ExchangeMarketSelect.schema';
import { ExchangeMarketIncludeObjectSchema as ExchangeMarketIncludeObjectSchema } from './objects/ExchangeMarketInclude.schema';
import { ExchangeMarketWhereUniqueInputObjectSchema as ExchangeMarketWhereUniqueInputObjectSchema } from './objects/ExchangeMarketWhereUniqueInput.schema';
import { ExchangeMarketCreateInputObjectSchema as ExchangeMarketCreateInputObjectSchema } from './objects/ExchangeMarketCreateInput.schema';
import { ExchangeMarketUncheckedCreateInputObjectSchema as ExchangeMarketUncheckedCreateInputObjectSchema } from './objects/ExchangeMarketUncheckedCreateInput.schema';
import { ExchangeMarketUpdateInputObjectSchema as ExchangeMarketUpdateInputObjectSchema } from './objects/ExchangeMarketUpdateInput.schema';
import { ExchangeMarketUncheckedUpdateInputObjectSchema as ExchangeMarketUncheckedUpdateInputObjectSchema } from './objects/ExchangeMarketUncheckedUpdateInput.schema';

export const ExchangeMarketUpsertOneSchema: z.ZodType<Prisma.ExchangeMarketUpsertArgs> = z.object({ select: ExchangeMarketSelectObjectSchema.optional(), include: ExchangeMarketIncludeObjectSchema.optional(), where: ExchangeMarketWhereUniqueInputObjectSchema, create: z.union([ ExchangeMarketCreateInputObjectSchema, ExchangeMarketUncheckedCreateInputObjectSchema ]), update: z.union([ ExchangeMarketUpdateInputObjectSchema, ExchangeMarketUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ExchangeMarketUpsertArgs>;

export const ExchangeMarketUpsertOneZodSchema = z.object({ select: ExchangeMarketSelectObjectSchema.optional(), include: ExchangeMarketIncludeObjectSchema.optional(), where: ExchangeMarketWhereUniqueInputObjectSchema, create: z.union([ ExchangeMarketCreateInputObjectSchema, ExchangeMarketUncheckedCreateInputObjectSchema ]), update: z.union([ ExchangeMarketUpdateInputObjectSchema, ExchangeMarketUncheckedUpdateInputObjectSchema ]) }).strict();