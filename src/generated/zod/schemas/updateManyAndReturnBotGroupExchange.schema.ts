import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotGroupExchangeSelectObjectSchema as BotGroupExchangeSelectObjectSchema } from './objects/BotGroupExchangeSelect.schema';
import { BotGroupExchangeUpdateManyMutationInputObjectSchema as BotGroupExchangeUpdateManyMutationInputObjectSchema } from './objects/BotGroupExchangeUpdateManyMutationInput.schema';
import { BotGroupExchangeWhereInputObjectSchema as BotGroupExchangeWhereInputObjectSchema } from './objects/BotGroupExchangeWhereInput.schema';

export const BotGroupExchangeUpdateManyAndReturnSchema: z.ZodType<Prisma.BotGroupExchangeUpdateManyAndReturnArgs> = z.object({ select: BotGroupExchangeSelectObjectSchema.optional(), data: BotGroupExchangeUpdateManyMutationInputObjectSchema, where: BotGroupExchangeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BotGroupExchangeUpdateManyAndReturnArgs>;

export const BotGroupExchangeUpdateManyAndReturnZodSchema = z.object({ select: BotGroupExchangeSelectObjectSchema.optional(), data: BotGroupExchangeUpdateManyMutationInputObjectSchema, where: BotGroupExchangeWhereInputObjectSchema.optional() }).strict();