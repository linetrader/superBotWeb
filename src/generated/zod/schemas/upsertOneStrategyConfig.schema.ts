import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { StrategyConfigSelectObjectSchema as StrategyConfigSelectObjectSchema } from './objects/StrategyConfigSelect.schema';
import { StrategyConfigIncludeObjectSchema as StrategyConfigIncludeObjectSchema } from './objects/StrategyConfigInclude.schema';
import { StrategyConfigWhereUniqueInputObjectSchema as StrategyConfigWhereUniqueInputObjectSchema } from './objects/StrategyConfigWhereUniqueInput.schema';
import { StrategyConfigCreateInputObjectSchema as StrategyConfigCreateInputObjectSchema } from './objects/StrategyConfigCreateInput.schema';
import { StrategyConfigUncheckedCreateInputObjectSchema as StrategyConfigUncheckedCreateInputObjectSchema } from './objects/StrategyConfigUncheckedCreateInput.schema';
import { StrategyConfigUpdateInputObjectSchema as StrategyConfigUpdateInputObjectSchema } from './objects/StrategyConfigUpdateInput.schema';
import { StrategyConfigUncheckedUpdateInputObjectSchema as StrategyConfigUncheckedUpdateInputObjectSchema } from './objects/StrategyConfigUncheckedUpdateInput.schema';

export const StrategyConfigUpsertOneSchema: z.ZodType<Prisma.StrategyConfigUpsertArgs> = z.object({ select: StrategyConfigSelectObjectSchema.optional(), include: StrategyConfigIncludeObjectSchema.optional(), where: StrategyConfigWhereUniqueInputObjectSchema, create: z.union([ StrategyConfigCreateInputObjectSchema, StrategyConfigUncheckedCreateInputObjectSchema ]), update: z.union([ StrategyConfigUpdateInputObjectSchema, StrategyConfigUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.StrategyConfigUpsertArgs>;

export const StrategyConfigUpsertOneZodSchema = z.object({ select: StrategyConfigSelectObjectSchema.optional(), include: StrategyConfigIncludeObjectSchema.optional(), where: StrategyConfigWhereUniqueInputObjectSchema, create: z.union([ StrategyConfigCreateInputObjectSchema, StrategyConfigUncheckedCreateInputObjectSchema ]), update: z.union([ StrategyConfigUpdateInputObjectSchema, StrategyConfigUncheckedUpdateInputObjectSchema ]) }).strict();