import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotGroupSelectObjectSchema as BotGroupSelectObjectSchema } from './objects/BotGroupSelect.schema';
import { BotGroupIncludeObjectSchema as BotGroupIncludeObjectSchema } from './objects/BotGroupInclude.schema';
import { BotGroupWhereUniqueInputObjectSchema as BotGroupWhereUniqueInputObjectSchema } from './objects/BotGroupWhereUniqueInput.schema';
import { BotGroupCreateInputObjectSchema as BotGroupCreateInputObjectSchema } from './objects/BotGroupCreateInput.schema';
import { BotGroupUncheckedCreateInputObjectSchema as BotGroupUncheckedCreateInputObjectSchema } from './objects/BotGroupUncheckedCreateInput.schema';
import { BotGroupUpdateInputObjectSchema as BotGroupUpdateInputObjectSchema } from './objects/BotGroupUpdateInput.schema';
import { BotGroupUncheckedUpdateInputObjectSchema as BotGroupUncheckedUpdateInputObjectSchema } from './objects/BotGroupUncheckedUpdateInput.schema';

export const BotGroupUpsertOneSchema: z.ZodType<Prisma.BotGroupUpsertArgs> = z.object({ select: BotGroupSelectObjectSchema.optional(), include: BotGroupIncludeObjectSchema.optional(), where: BotGroupWhereUniqueInputObjectSchema, create: z.union([ BotGroupCreateInputObjectSchema, BotGroupUncheckedCreateInputObjectSchema ]), update: z.union([ BotGroupUpdateInputObjectSchema, BotGroupUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.BotGroupUpsertArgs>;

export const BotGroupUpsertOneZodSchema = z.object({ select: BotGroupSelectObjectSchema.optional(), include: BotGroupIncludeObjectSchema.optional(), where: BotGroupWhereUniqueInputObjectSchema, create: z.union([ BotGroupCreateInputObjectSchema, BotGroupUncheckedCreateInputObjectSchema ]), update: z.union([ BotGroupUpdateInputObjectSchema, BotGroupUncheckedUpdateInputObjectSchema ]) }).strict();