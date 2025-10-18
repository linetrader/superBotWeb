import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BoxStrategySelectObjectSchema as BoxStrategySelectObjectSchema } from './objects/BoxStrategySelect.schema';
import { BoxStrategyUpdateManyMutationInputObjectSchema as BoxStrategyUpdateManyMutationInputObjectSchema } from './objects/BoxStrategyUpdateManyMutationInput.schema';
import { BoxStrategyWhereInputObjectSchema as BoxStrategyWhereInputObjectSchema } from './objects/BoxStrategyWhereInput.schema';

export const BoxStrategyUpdateManyAndReturnSchema: z.ZodType<Prisma.BoxStrategyUpdateManyAndReturnArgs> = z.object({ select: BoxStrategySelectObjectSchema.optional(), data: BoxStrategyUpdateManyMutationInputObjectSchema, where: BoxStrategyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BoxStrategyUpdateManyAndReturnArgs>;

export const BoxStrategyUpdateManyAndReturnZodSchema = z.object({ select: BoxStrategySelectObjectSchema.optional(), data: BoxStrategyUpdateManyMutationInputObjectSchema, where: BoxStrategyWhereInputObjectSchema.optional() }).strict();