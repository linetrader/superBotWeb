import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeSelectObjectSchema as ExchangeSelectObjectSchema } from './objects/ExchangeSelect.schema';
import { ExchangeIncludeObjectSchema as ExchangeIncludeObjectSchema } from './objects/ExchangeInclude.schema';
import { ExchangeWhereUniqueInputObjectSchema as ExchangeWhereUniqueInputObjectSchema } from './objects/ExchangeWhereUniqueInput.schema';

export const ExchangeFindUniqueOrThrowSchema: z.ZodType<Prisma.ExchangeFindUniqueOrThrowArgs> = z.object({ select: ExchangeSelectObjectSchema.optional(), include: ExchangeIncludeObjectSchema.optional(), where: ExchangeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ExchangeFindUniqueOrThrowArgs>;

export const ExchangeFindUniqueOrThrowZodSchema = z.object({ select: ExchangeSelectObjectSchema.optional(), include: ExchangeIncludeObjectSchema.optional(), where: ExchangeWhereUniqueInputObjectSchema }).strict();