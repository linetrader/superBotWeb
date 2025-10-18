import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeMarketSelectObjectSchema as ExchangeMarketSelectObjectSchema } from './objects/ExchangeMarketSelect.schema';
import { ExchangeMarketIncludeObjectSchema as ExchangeMarketIncludeObjectSchema } from './objects/ExchangeMarketInclude.schema';
import { ExchangeMarketCreateInputObjectSchema as ExchangeMarketCreateInputObjectSchema } from './objects/ExchangeMarketCreateInput.schema';
import { ExchangeMarketUncheckedCreateInputObjectSchema as ExchangeMarketUncheckedCreateInputObjectSchema } from './objects/ExchangeMarketUncheckedCreateInput.schema';

export const ExchangeMarketCreateOneSchema: z.ZodType<Prisma.ExchangeMarketCreateArgs> = z.object({ select: ExchangeMarketSelectObjectSchema.optional(), include: ExchangeMarketIncludeObjectSchema.optional(), data: z.union([ExchangeMarketCreateInputObjectSchema, ExchangeMarketUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ExchangeMarketCreateArgs>;

export const ExchangeMarketCreateOneZodSchema = z.object({ select: ExchangeMarketSelectObjectSchema.optional(), include: ExchangeMarketIncludeObjectSchema.optional(), data: z.union([ExchangeMarketCreateInputObjectSchema, ExchangeMarketUncheckedCreateInputObjectSchema]) }).strict();