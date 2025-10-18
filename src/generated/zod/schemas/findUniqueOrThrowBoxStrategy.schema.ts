import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BoxStrategySelectObjectSchema as BoxStrategySelectObjectSchema } from './objects/BoxStrategySelect.schema';
import { BoxStrategyIncludeObjectSchema as BoxStrategyIncludeObjectSchema } from './objects/BoxStrategyInclude.schema';
import { BoxStrategyWhereUniqueInputObjectSchema as BoxStrategyWhereUniqueInputObjectSchema } from './objects/BoxStrategyWhereUniqueInput.schema';

export const BoxStrategyFindUniqueOrThrowSchema: z.ZodType<Prisma.BoxStrategyFindUniqueOrThrowArgs> = z.object({ select: BoxStrategySelectObjectSchema.optional(), include: BoxStrategyIncludeObjectSchema.optional(), where: BoxStrategyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BoxStrategyFindUniqueOrThrowArgs>;

export const BoxStrategyFindUniqueOrThrowZodSchema = z.object({ select: BoxStrategySelectObjectSchema.optional(), include: BoxStrategyIncludeObjectSchema.optional(), where: BoxStrategyWhereUniqueInputObjectSchema }).strict();