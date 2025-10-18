import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeSelectObjectSchema as ExchangeSelectObjectSchema } from './objects/ExchangeSelect.schema';
import { ExchangeIncludeObjectSchema as ExchangeIncludeObjectSchema } from './objects/ExchangeInclude.schema';
import { ExchangeCreateInputObjectSchema as ExchangeCreateInputObjectSchema } from './objects/ExchangeCreateInput.schema';
import { ExchangeUncheckedCreateInputObjectSchema as ExchangeUncheckedCreateInputObjectSchema } from './objects/ExchangeUncheckedCreateInput.schema';

export const ExchangeCreateOneSchema: z.ZodType<Prisma.ExchangeCreateArgs> = z.object({ select: ExchangeSelectObjectSchema.optional(), include: ExchangeIncludeObjectSchema.optional(), data: z.union([ExchangeCreateInputObjectSchema, ExchangeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ExchangeCreateArgs>;

export const ExchangeCreateOneZodSchema = z.object({ select: ExchangeSelectObjectSchema.optional(), include: ExchangeIncludeObjectSchema.optional(), data: z.union([ExchangeCreateInputObjectSchema, ExchangeUncheckedCreateInputObjectSchema]) }).strict();