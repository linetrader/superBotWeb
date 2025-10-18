import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotLogSelectObjectSchema as BotLogSelectObjectSchema } from './objects/BotLogSelect.schema';
import { BotLogIncludeObjectSchema as BotLogIncludeObjectSchema } from './objects/BotLogInclude.schema';
import { BotLogUpdateInputObjectSchema as BotLogUpdateInputObjectSchema } from './objects/BotLogUpdateInput.schema';
import { BotLogUncheckedUpdateInputObjectSchema as BotLogUncheckedUpdateInputObjectSchema } from './objects/BotLogUncheckedUpdateInput.schema';
import { BotLogWhereUniqueInputObjectSchema as BotLogWhereUniqueInputObjectSchema } from './objects/BotLogWhereUniqueInput.schema';

export const BotLogUpdateOneSchema: z.ZodType<Prisma.BotLogUpdateArgs> = z.object({ select: BotLogSelectObjectSchema.optional(), include: BotLogIncludeObjectSchema.optional(), data: z.union([BotLogUpdateInputObjectSchema, BotLogUncheckedUpdateInputObjectSchema]), where: BotLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BotLogUpdateArgs>;

export const BotLogUpdateOneZodSchema = z.object({ select: BotLogSelectObjectSchema.optional(), include: BotLogIncludeObjectSchema.optional(), data: z.union([BotLogUpdateInputObjectSchema, BotLogUncheckedUpdateInputObjectSchema]), where: BotLogWhereUniqueInputObjectSchema }).strict();