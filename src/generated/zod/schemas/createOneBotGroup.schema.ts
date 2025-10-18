import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotGroupSelectObjectSchema as BotGroupSelectObjectSchema } from './objects/BotGroupSelect.schema';
import { BotGroupIncludeObjectSchema as BotGroupIncludeObjectSchema } from './objects/BotGroupInclude.schema';
import { BotGroupCreateInputObjectSchema as BotGroupCreateInputObjectSchema } from './objects/BotGroupCreateInput.schema';
import { BotGroupUncheckedCreateInputObjectSchema as BotGroupUncheckedCreateInputObjectSchema } from './objects/BotGroupUncheckedCreateInput.schema';

export const BotGroupCreateOneSchema: z.ZodType<Prisma.BotGroupCreateArgs> = z.object({ select: BotGroupSelectObjectSchema.optional(), include: BotGroupIncludeObjectSchema.optional(), data: z.union([BotGroupCreateInputObjectSchema, BotGroupUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.BotGroupCreateArgs>;

export const BotGroupCreateOneZodSchema = z.object({ select: BotGroupSelectObjectSchema.optional(), include: BotGroupIncludeObjectSchema.optional(), data: z.union([BotGroupCreateInputObjectSchema, BotGroupUncheckedCreateInputObjectSchema]) }).strict();