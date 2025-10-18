import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotGroupSelectObjectSchema as BotGroupSelectObjectSchema } from './objects/BotGroupSelect.schema';
import { BotGroupIncludeObjectSchema as BotGroupIncludeObjectSchema } from './objects/BotGroupInclude.schema';
import { BotGroupWhereUniqueInputObjectSchema as BotGroupWhereUniqueInputObjectSchema } from './objects/BotGroupWhereUniqueInput.schema';

export const BotGroupFindUniqueOrThrowSchema: z.ZodType<Prisma.BotGroupFindUniqueOrThrowArgs> = z.object({ select: BotGroupSelectObjectSchema.optional(), include: BotGroupIncludeObjectSchema.optional(), where: BotGroupWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BotGroupFindUniqueOrThrowArgs>;

export const BotGroupFindUniqueOrThrowZodSchema = z.object({ select: BotGroupSelectObjectSchema.optional(), include: BotGroupIncludeObjectSchema.optional(), where: BotGroupWhereUniqueInputObjectSchema }).strict();