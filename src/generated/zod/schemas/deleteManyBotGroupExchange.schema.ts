import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotGroupExchangeWhereInputObjectSchema as BotGroupExchangeWhereInputObjectSchema } from './objects/BotGroupExchangeWhereInput.schema';

export const BotGroupExchangeDeleteManySchema: z.ZodType<Prisma.BotGroupExchangeDeleteManyArgs> = z.object({ where: BotGroupExchangeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BotGroupExchangeDeleteManyArgs>;

export const BotGroupExchangeDeleteManyZodSchema = z.object({ where: BotGroupExchangeWhereInputObjectSchema.optional() }).strict();