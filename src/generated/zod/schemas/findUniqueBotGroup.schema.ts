import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotGroupSelectObjectSchema as BotGroupSelectObjectSchema } from './objects/BotGroupSelect.schema';
import { BotGroupIncludeObjectSchema as BotGroupIncludeObjectSchema } from './objects/BotGroupInclude.schema';
import { BotGroupWhereUniqueInputObjectSchema as BotGroupWhereUniqueInputObjectSchema } from './objects/BotGroupWhereUniqueInput.schema';

export const BotGroupFindUniqueSchema: z.ZodType<Prisma.BotGroupFindUniqueArgs> = z.object({ select: BotGroupSelectObjectSchema.optional(), include: BotGroupIncludeObjectSchema.optional(), where: BotGroupWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BotGroupFindUniqueArgs>;

export const BotGroupFindUniqueZodSchema = z.object({ select: BotGroupSelectObjectSchema.optional(), include: BotGroupIncludeObjectSchema.optional(), where: BotGroupWhereUniqueInputObjectSchema }).strict();