import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotGroupExchangeUpdateManyMutationInputObjectSchema as BotGroupExchangeUpdateManyMutationInputObjectSchema } from './objects/BotGroupExchangeUpdateManyMutationInput.schema';
import { BotGroupExchangeWhereInputObjectSchema as BotGroupExchangeWhereInputObjectSchema } from './objects/BotGroupExchangeWhereInput.schema';

export const BotGroupExchangeUpdateManySchema: z.ZodType<Prisma.BotGroupExchangeUpdateManyArgs> = z.object({ data: BotGroupExchangeUpdateManyMutationInputObjectSchema, where: BotGroupExchangeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BotGroupExchangeUpdateManyArgs>;

export const BotGroupExchangeUpdateManyZodSchema = z.object({ data: BotGroupExchangeUpdateManyMutationInputObjectSchema, where: BotGroupExchangeWhereInputObjectSchema.optional() }).strict();