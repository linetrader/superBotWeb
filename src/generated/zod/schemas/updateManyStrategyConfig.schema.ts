import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { StrategyConfigUpdateManyMutationInputObjectSchema as StrategyConfigUpdateManyMutationInputObjectSchema } from './objects/StrategyConfigUpdateManyMutationInput.schema';
import { StrategyConfigWhereInputObjectSchema as StrategyConfigWhereInputObjectSchema } from './objects/StrategyConfigWhereInput.schema';

export const StrategyConfigUpdateManySchema: z.ZodType<Prisma.StrategyConfigUpdateManyArgs> = z.object({ data: StrategyConfigUpdateManyMutationInputObjectSchema, where: StrategyConfigWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StrategyConfigUpdateManyArgs>;

export const StrategyConfigUpdateManyZodSchema = z.object({ data: StrategyConfigUpdateManyMutationInputObjectSchema, where: StrategyConfigWhereInputObjectSchema.optional() }).strict();