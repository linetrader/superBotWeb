import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BoxStrategySelectObjectSchema as BoxStrategySelectObjectSchema } from './objects/BoxStrategySelect.schema';
import { BoxStrategyIncludeObjectSchema as BoxStrategyIncludeObjectSchema } from './objects/BoxStrategyInclude.schema';
import { BoxStrategyUpdateInputObjectSchema as BoxStrategyUpdateInputObjectSchema } from './objects/BoxStrategyUpdateInput.schema';
import { BoxStrategyUncheckedUpdateInputObjectSchema as BoxStrategyUncheckedUpdateInputObjectSchema } from './objects/BoxStrategyUncheckedUpdateInput.schema';
import { BoxStrategyWhereUniqueInputObjectSchema as BoxStrategyWhereUniqueInputObjectSchema } from './objects/BoxStrategyWhereUniqueInput.schema';

export const BoxStrategyUpdateOneSchema: z.ZodType<Prisma.BoxStrategyUpdateArgs> = z.object({ select: BoxStrategySelectObjectSchema.optional(), include: BoxStrategyIncludeObjectSchema.optional(), data: z.union([BoxStrategyUpdateInputObjectSchema, BoxStrategyUncheckedUpdateInputObjectSchema]), where: BoxStrategyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BoxStrategyUpdateArgs>;

export const BoxStrategyUpdateOneZodSchema = z.object({ select: BoxStrategySelectObjectSchema.optional(), include: BoxStrategyIncludeObjectSchema.optional(), data: z.union([BoxStrategyUpdateInputObjectSchema, BoxStrategyUncheckedUpdateInputObjectSchema]), where: BoxStrategyWhereUniqueInputObjectSchema }).strict();