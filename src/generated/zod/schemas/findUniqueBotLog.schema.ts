import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotLogSelectObjectSchema as BotLogSelectObjectSchema } from './objects/BotLogSelect.schema';
import { BotLogIncludeObjectSchema as BotLogIncludeObjectSchema } from './objects/BotLogInclude.schema';
import { BotLogWhereUniqueInputObjectSchema as BotLogWhereUniqueInputObjectSchema } from './objects/BotLogWhereUniqueInput.schema';

export const BotLogFindUniqueSchema: z.ZodType<Prisma.BotLogFindUniqueArgs> = z.object({ select: BotLogSelectObjectSchema.optional(), include: BotLogIncludeObjectSchema.optional(), where: BotLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BotLogFindUniqueArgs>;

export const BotLogFindUniqueZodSchema = z.object({ select: BotLogSelectObjectSchema.optional(), include: BotLogIncludeObjectSchema.optional(), where: BotLogWhereUniqueInputObjectSchema }).strict();