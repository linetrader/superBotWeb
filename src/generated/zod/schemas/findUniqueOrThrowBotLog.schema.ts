import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotLogSelectObjectSchema as BotLogSelectObjectSchema } from './objects/BotLogSelect.schema';
import { BotLogIncludeObjectSchema as BotLogIncludeObjectSchema } from './objects/BotLogInclude.schema';
import { BotLogWhereUniqueInputObjectSchema as BotLogWhereUniqueInputObjectSchema } from './objects/BotLogWhereUniqueInput.schema';

export const BotLogFindUniqueOrThrowSchema: z.ZodType<Prisma.BotLogFindUniqueOrThrowArgs> = z.object({ select: BotLogSelectObjectSchema.optional(), include: BotLogIncludeObjectSchema.optional(), where: BotLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BotLogFindUniqueOrThrowArgs>;

export const BotLogFindUniqueOrThrowZodSchema = z.object({ select: BotLogSelectObjectSchema.optional(), include: BotLogIncludeObjectSchema.optional(), where: BotLogWhereUniqueInputObjectSchema }).strict();