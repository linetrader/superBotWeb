import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotRuntimeSelectObjectSchema as BotRuntimeSelectObjectSchema } from './objects/BotRuntimeSelect.schema';
import { BotRuntimeIncludeObjectSchema as BotRuntimeIncludeObjectSchema } from './objects/BotRuntimeInclude.schema';
import { BotRuntimeCreateInputObjectSchema as BotRuntimeCreateInputObjectSchema } from './objects/BotRuntimeCreateInput.schema';
import { BotRuntimeUncheckedCreateInputObjectSchema as BotRuntimeUncheckedCreateInputObjectSchema } from './objects/BotRuntimeUncheckedCreateInput.schema';

export const BotRuntimeCreateOneSchema: z.ZodType<Prisma.BotRuntimeCreateArgs> = z.object({ select: BotRuntimeSelectObjectSchema.optional(), include: BotRuntimeIncludeObjectSchema.optional(), data: z.union([BotRuntimeCreateInputObjectSchema, BotRuntimeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.BotRuntimeCreateArgs>;

export const BotRuntimeCreateOneZodSchema = z.object({ select: BotRuntimeSelectObjectSchema.optional(), include: BotRuntimeIncludeObjectSchema.optional(), data: z.union([BotRuntimeCreateInputObjectSchema, BotRuntimeUncheckedCreateInputObjectSchema]) }).strict();