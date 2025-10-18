import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotRuntimeSelectObjectSchema as BotRuntimeSelectObjectSchema } from './objects/BotRuntimeSelect.schema';
import { BotRuntimeIncludeObjectSchema as BotRuntimeIncludeObjectSchema } from './objects/BotRuntimeInclude.schema';
import { BotRuntimeWhereUniqueInputObjectSchema as BotRuntimeWhereUniqueInputObjectSchema } from './objects/BotRuntimeWhereUniqueInput.schema';

export const BotRuntimeFindUniqueSchema: z.ZodType<Prisma.BotRuntimeFindUniqueArgs> = z.object({ select: BotRuntimeSelectObjectSchema.optional(), include: BotRuntimeIncludeObjectSchema.optional(), where: BotRuntimeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BotRuntimeFindUniqueArgs>;

export const BotRuntimeFindUniqueZodSchema = z.object({ select: BotRuntimeSelectObjectSchema.optional(), include: BotRuntimeIncludeObjectSchema.optional(), where: BotRuntimeWhereUniqueInputObjectSchema }).strict();