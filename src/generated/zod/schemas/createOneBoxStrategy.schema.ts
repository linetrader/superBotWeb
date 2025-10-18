import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BoxStrategySelectObjectSchema as BoxStrategySelectObjectSchema } from './objects/BoxStrategySelect.schema';
import { BoxStrategyIncludeObjectSchema as BoxStrategyIncludeObjectSchema } from './objects/BoxStrategyInclude.schema';
import { BoxStrategyCreateInputObjectSchema as BoxStrategyCreateInputObjectSchema } from './objects/BoxStrategyCreateInput.schema';
import { BoxStrategyUncheckedCreateInputObjectSchema as BoxStrategyUncheckedCreateInputObjectSchema } from './objects/BoxStrategyUncheckedCreateInput.schema';

export const BoxStrategyCreateOneSchema: z.ZodType<Prisma.BoxStrategyCreateArgs> = z.object({ select: BoxStrategySelectObjectSchema.optional(), include: BoxStrategyIncludeObjectSchema.optional(), data: z.union([BoxStrategyCreateInputObjectSchema, BoxStrategyUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.BoxStrategyCreateArgs>;

export const BoxStrategyCreateOneZodSchema = z.object({ select: BoxStrategySelectObjectSchema.optional(), include: BoxStrategyIncludeObjectSchema.optional(), data: z.union([BoxStrategyCreateInputObjectSchema, BoxStrategyUncheckedCreateInputObjectSchema]) }).strict();