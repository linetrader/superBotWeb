import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { StrategyConfigWhereInputObjectSchema as StrategyConfigWhereInputObjectSchema } from './objects/StrategyConfigWhereInput.schema';

export const StrategyConfigDeleteManySchema: z.ZodType<Prisma.StrategyConfigDeleteManyArgs> = z.object({ where: StrategyConfigWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StrategyConfigDeleteManyArgs>;

export const StrategyConfigDeleteManyZodSchema = z.object({ where: StrategyConfigWhereInputObjectSchema.optional() }).strict();