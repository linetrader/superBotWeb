import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotLogSelectObjectSchema as BotLogSelectObjectSchema } from './objects/BotLogSelect.schema';
import { BotLogIncludeObjectSchema as BotLogIncludeObjectSchema } from './objects/BotLogInclude.schema';
import { BotLogCreateInputObjectSchema as BotLogCreateInputObjectSchema } from './objects/BotLogCreateInput.schema';
import { BotLogUncheckedCreateInputObjectSchema as BotLogUncheckedCreateInputObjectSchema } from './objects/BotLogUncheckedCreateInput.schema';

export const BotLogCreateOneSchema: z.ZodType<Prisma.BotLogCreateArgs> = z.object({ select: BotLogSelectObjectSchema.optional(), include: BotLogIncludeObjectSchema.optional(), data: z.union([BotLogCreateInputObjectSchema, BotLogUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.BotLogCreateArgs>;

export const BotLogCreateOneZodSchema = z.object({ select: BotLogSelectObjectSchema.optional(), include: BotLogIncludeObjectSchema.optional(), data: z.union([BotLogCreateInputObjectSchema, BotLogUncheckedCreateInputObjectSchema]) }).strict();