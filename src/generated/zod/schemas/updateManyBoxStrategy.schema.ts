import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BoxStrategyUpdateManyMutationInputObjectSchema as BoxStrategyUpdateManyMutationInputObjectSchema } from './objects/BoxStrategyUpdateManyMutationInput.schema';
import { BoxStrategyWhereInputObjectSchema as BoxStrategyWhereInputObjectSchema } from './objects/BoxStrategyWhereInput.schema';

export const BoxStrategyUpdateManySchema: z.ZodType<Prisma.BoxStrategyUpdateManyArgs> = z.object({ data: BoxStrategyUpdateManyMutationInputObjectSchema, where: BoxStrategyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BoxStrategyUpdateManyArgs>;

export const BoxStrategyUpdateManyZodSchema = z.object({ data: BoxStrategyUpdateManyMutationInputObjectSchema, where: BoxStrategyWhereInputObjectSchema.optional() }).strict();