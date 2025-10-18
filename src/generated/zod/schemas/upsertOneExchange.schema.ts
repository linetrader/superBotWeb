import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeSelectObjectSchema as ExchangeSelectObjectSchema } from './objects/ExchangeSelect.schema';
import { ExchangeIncludeObjectSchema as ExchangeIncludeObjectSchema } from './objects/ExchangeInclude.schema';
import { ExchangeWhereUniqueInputObjectSchema as ExchangeWhereUniqueInputObjectSchema } from './objects/ExchangeWhereUniqueInput.schema';
import { ExchangeCreateInputObjectSchema as ExchangeCreateInputObjectSchema } from './objects/ExchangeCreateInput.schema';
import { ExchangeUncheckedCreateInputObjectSchema as ExchangeUncheckedCreateInputObjectSchema } from './objects/ExchangeUncheckedCreateInput.schema';
import { ExchangeUpdateInputObjectSchema as ExchangeUpdateInputObjectSchema } from './objects/ExchangeUpdateInput.schema';
import { ExchangeUncheckedUpdateInputObjectSchema as ExchangeUncheckedUpdateInputObjectSchema } from './objects/ExchangeUncheckedUpdateInput.schema';

export const ExchangeUpsertOneSchema: z.ZodType<Prisma.ExchangeUpsertArgs> = z.object({ select: ExchangeSelectObjectSchema.optional(), include: ExchangeIncludeObjectSchema.optional(), where: ExchangeWhereUniqueInputObjectSchema, create: z.union([ ExchangeCreateInputObjectSchema, ExchangeUncheckedCreateInputObjectSchema ]), update: z.union([ ExchangeUpdateInputObjectSchema, ExchangeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ExchangeUpsertArgs>;

export const ExchangeUpsertOneZodSchema = z.object({ select: ExchangeSelectObjectSchema.optional(), include: ExchangeIncludeObjectSchema.optional(), where: ExchangeWhereUniqueInputObjectSchema, create: z.union([ ExchangeCreateInputObjectSchema, ExchangeUncheckedCreateInputObjectSchema ]), update: z.union([ ExchangeUpdateInputObjectSchema, ExchangeUncheckedUpdateInputObjectSchema ]) }).strict();