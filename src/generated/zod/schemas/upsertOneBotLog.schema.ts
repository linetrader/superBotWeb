import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotLogSelectObjectSchema as BotLogSelectObjectSchema } from './objects/BotLogSelect.schema';
import { BotLogIncludeObjectSchema as BotLogIncludeObjectSchema } from './objects/BotLogInclude.schema';
import { BotLogWhereUniqueInputObjectSchema as BotLogWhereUniqueInputObjectSchema } from './objects/BotLogWhereUniqueInput.schema';
import { BotLogCreateInputObjectSchema as BotLogCreateInputObjectSchema } from './objects/BotLogCreateInput.schema';
import { BotLogUncheckedCreateInputObjectSchema as BotLogUncheckedCreateInputObjectSchema } from './objects/BotLogUncheckedCreateInput.schema';
import { BotLogUpdateInputObjectSchema as BotLogUpdateInputObjectSchema } from './objects/BotLogUpdateInput.schema';
import { BotLogUncheckedUpdateInputObjectSchema as BotLogUncheckedUpdateInputObjectSchema } from './objects/BotLogUncheckedUpdateInput.schema';

export const BotLogUpsertOneSchema: z.ZodType<Prisma.BotLogUpsertArgs> = z.object({ select: BotLogSelectObjectSchema.optional(), include: BotLogIncludeObjectSchema.optional(), where: BotLogWhereUniqueInputObjectSchema, create: z.union([ BotLogCreateInputObjectSchema, BotLogUncheckedCreateInputObjectSchema ]), update: z.union([ BotLogUpdateInputObjectSchema, BotLogUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.BotLogUpsertArgs>;

export const BotLogUpsertOneZodSchema = z.object({ select: BotLogSelectObjectSchema.optional(), include: BotLogIncludeObjectSchema.optional(), where: BotLogWhereUniqueInputObjectSchema, create: z.union([ BotLogCreateInputObjectSchema, BotLogUncheckedCreateInputObjectSchema ]), update: z.union([ BotLogUpdateInputObjectSchema, BotLogUncheckedUpdateInputObjectSchema ]) }).strict();