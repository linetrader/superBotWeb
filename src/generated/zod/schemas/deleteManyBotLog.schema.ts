import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotLogWhereInputObjectSchema as BotLogWhereInputObjectSchema } from './objects/BotLogWhereInput.schema';

export const BotLogDeleteManySchema: z.ZodType<Prisma.BotLogDeleteManyArgs> = z.object({ where: BotLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BotLogDeleteManyArgs>;

export const BotLogDeleteManyZodSchema = z.object({ where: BotLogWhereInputObjectSchema.optional() }).strict();