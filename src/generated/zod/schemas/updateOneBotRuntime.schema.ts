import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotRuntimeSelectObjectSchema as BotRuntimeSelectObjectSchema } from './objects/BotRuntimeSelect.schema';
import { BotRuntimeIncludeObjectSchema as BotRuntimeIncludeObjectSchema } from './objects/BotRuntimeInclude.schema';
import { BotRuntimeUpdateInputObjectSchema as BotRuntimeUpdateInputObjectSchema } from './objects/BotRuntimeUpdateInput.schema';
import { BotRuntimeUncheckedUpdateInputObjectSchema as BotRuntimeUncheckedUpdateInputObjectSchema } from './objects/BotRuntimeUncheckedUpdateInput.schema';
import { BotRuntimeWhereUniqueInputObjectSchema as BotRuntimeWhereUniqueInputObjectSchema } from './objects/BotRuntimeWhereUniqueInput.schema';

export const BotRuntimeUpdateOneSchema: z.ZodType<Prisma.BotRuntimeUpdateArgs> = z.object({ select: BotRuntimeSelectObjectSchema.optional(), include: BotRuntimeIncludeObjectSchema.optional(), data: z.union([BotRuntimeUpdateInputObjectSchema, BotRuntimeUncheckedUpdateInputObjectSchema]), where: BotRuntimeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BotRuntimeUpdateArgs>;

export const BotRuntimeUpdateOneZodSchema = z.object({ select: BotRuntimeSelectObjectSchema.optional(), include: BotRuntimeIncludeObjectSchema.optional(), data: z.union([BotRuntimeUpdateInputObjectSchema, BotRuntimeUncheckedUpdateInputObjectSchema]), where: BotRuntimeWhereUniqueInputObjectSchema }).strict();