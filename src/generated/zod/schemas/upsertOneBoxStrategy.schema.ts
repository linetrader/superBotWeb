import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BoxStrategySelectObjectSchema as BoxStrategySelectObjectSchema } from './objects/BoxStrategySelect.schema';
import { BoxStrategyIncludeObjectSchema as BoxStrategyIncludeObjectSchema } from './objects/BoxStrategyInclude.schema';
import { BoxStrategyWhereUniqueInputObjectSchema as BoxStrategyWhereUniqueInputObjectSchema } from './objects/BoxStrategyWhereUniqueInput.schema';
import { BoxStrategyCreateInputObjectSchema as BoxStrategyCreateInputObjectSchema } from './objects/BoxStrategyCreateInput.schema';
import { BoxStrategyUncheckedCreateInputObjectSchema as BoxStrategyUncheckedCreateInputObjectSchema } from './objects/BoxStrategyUncheckedCreateInput.schema';
import { BoxStrategyUpdateInputObjectSchema as BoxStrategyUpdateInputObjectSchema } from './objects/BoxStrategyUpdateInput.schema';
import { BoxStrategyUncheckedUpdateInputObjectSchema as BoxStrategyUncheckedUpdateInputObjectSchema } from './objects/BoxStrategyUncheckedUpdateInput.schema';

export const BoxStrategyUpsertOneSchema: z.ZodType<Prisma.BoxStrategyUpsertArgs> = z.object({ select: BoxStrategySelectObjectSchema.optional(), include: BoxStrategyIncludeObjectSchema.optional(), where: BoxStrategyWhereUniqueInputObjectSchema, create: z.union([ BoxStrategyCreateInputObjectSchema, BoxStrategyUncheckedCreateInputObjectSchema ]), update: z.union([ BoxStrategyUpdateInputObjectSchema, BoxStrategyUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.BoxStrategyUpsertArgs>;

export const BoxStrategyUpsertOneZodSchema = z.object({ select: BoxStrategySelectObjectSchema.optional(), include: BoxStrategyIncludeObjectSchema.optional(), where: BoxStrategyWhereUniqueInputObjectSchema, create: z.union([ BoxStrategyCreateInputObjectSchema, BoxStrategyUncheckedCreateInputObjectSchema ]), update: z.union([ BoxStrategyUpdateInputObjectSchema, BoxStrategyUncheckedUpdateInputObjectSchema ]) }).strict();