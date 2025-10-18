import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotRuntimeSelectObjectSchema as BotRuntimeSelectObjectSchema } from './objects/BotRuntimeSelect.schema';
import { BotRuntimeIncludeObjectSchema as BotRuntimeIncludeObjectSchema } from './objects/BotRuntimeInclude.schema';
import { BotRuntimeWhereUniqueInputObjectSchema as BotRuntimeWhereUniqueInputObjectSchema } from './objects/BotRuntimeWhereUniqueInput.schema';

export const BotRuntimeDeleteOneSchema: z.ZodType<Prisma.BotRuntimeDeleteArgs> = z.object({ select: BotRuntimeSelectObjectSchema.optional(), include: BotRuntimeIncludeObjectSchema.optional(), where: BotRuntimeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BotRuntimeDeleteArgs>;

export const BotRuntimeDeleteOneZodSchema = z.object({ select: BotRuntimeSelectObjectSchema.optional(), include: BotRuntimeIncludeObjectSchema.optional(), where: BotRuntimeWhereUniqueInputObjectSchema }).strict();