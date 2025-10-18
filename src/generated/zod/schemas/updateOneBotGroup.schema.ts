import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotGroupSelectObjectSchema as BotGroupSelectObjectSchema } from './objects/BotGroupSelect.schema';
import { BotGroupIncludeObjectSchema as BotGroupIncludeObjectSchema } from './objects/BotGroupInclude.schema';
import { BotGroupUpdateInputObjectSchema as BotGroupUpdateInputObjectSchema } from './objects/BotGroupUpdateInput.schema';
import { BotGroupUncheckedUpdateInputObjectSchema as BotGroupUncheckedUpdateInputObjectSchema } from './objects/BotGroupUncheckedUpdateInput.schema';
import { BotGroupWhereUniqueInputObjectSchema as BotGroupWhereUniqueInputObjectSchema } from './objects/BotGroupWhereUniqueInput.schema';

export const BotGroupUpdateOneSchema: z.ZodType<Prisma.BotGroupUpdateArgs> = z.object({ select: BotGroupSelectObjectSchema.optional(), include: BotGroupIncludeObjectSchema.optional(), data: z.union([BotGroupUpdateInputObjectSchema, BotGroupUncheckedUpdateInputObjectSchema]), where: BotGroupWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BotGroupUpdateArgs>;

export const BotGroupUpdateOneZodSchema = z.object({ select: BotGroupSelectObjectSchema.optional(), include: BotGroupIncludeObjectSchema.optional(), data: z.union([BotGroupUpdateInputObjectSchema, BotGroupUncheckedUpdateInputObjectSchema]), where: BotGroupWhereUniqueInputObjectSchema }).strict();