import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotGroupWhereInputObjectSchema as BotGroupWhereInputObjectSchema } from './objects/BotGroupWhereInput.schema';

export const BotGroupDeleteManySchema: z.ZodType<Prisma.BotGroupDeleteManyArgs> = z.object({ where: BotGroupWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BotGroupDeleteManyArgs>;

export const BotGroupDeleteManyZodSchema = z.object({ where: BotGroupWhereInputObjectSchema.optional() }).strict();