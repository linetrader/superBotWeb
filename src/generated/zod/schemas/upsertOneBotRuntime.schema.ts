import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotRuntimeSelectObjectSchema as BotRuntimeSelectObjectSchema } from './objects/BotRuntimeSelect.schema';
import { BotRuntimeIncludeObjectSchema as BotRuntimeIncludeObjectSchema } from './objects/BotRuntimeInclude.schema';
import { BotRuntimeWhereUniqueInputObjectSchema as BotRuntimeWhereUniqueInputObjectSchema } from './objects/BotRuntimeWhereUniqueInput.schema';
import { BotRuntimeCreateInputObjectSchema as BotRuntimeCreateInputObjectSchema } from './objects/BotRuntimeCreateInput.schema';
import { BotRuntimeUncheckedCreateInputObjectSchema as BotRuntimeUncheckedCreateInputObjectSchema } from './objects/BotRuntimeUncheckedCreateInput.schema';
import { BotRuntimeUpdateInputObjectSchema as BotRuntimeUpdateInputObjectSchema } from './objects/BotRuntimeUpdateInput.schema';
import { BotRuntimeUncheckedUpdateInputObjectSchema as BotRuntimeUncheckedUpdateInputObjectSchema } from './objects/BotRuntimeUncheckedUpdateInput.schema';

export const BotRuntimeUpsertOneSchema: z.ZodType<Prisma.BotRuntimeUpsertArgs> = z.object({ select: BotRuntimeSelectObjectSchema.optional(), include: BotRuntimeIncludeObjectSchema.optional(), where: BotRuntimeWhereUniqueInputObjectSchema, create: z.union([ BotRuntimeCreateInputObjectSchema, BotRuntimeUncheckedCreateInputObjectSchema ]), update: z.union([ BotRuntimeUpdateInputObjectSchema, BotRuntimeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.BotRuntimeUpsertArgs>;

export const BotRuntimeUpsertOneZodSchema = z.object({ select: BotRuntimeSelectObjectSchema.optional(), include: BotRuntimeIncludeObjectSchema.optional(), where: BotRuntimeWhereUniqueInputObjectSchema, create: z.union([ BotRuntimeCreateInputObjectSchema, BotRuntimeUncheckedCreateInputObjectSchema ]), update: z.union([ BotRuntimeUpdateInputObjectSchema, BotRuntimeUncheckedUpdateInputObjectSchema ]) }).strict();