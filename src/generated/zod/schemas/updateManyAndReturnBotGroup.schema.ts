import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotGroupSelectObjectSchema as BotGroupSelectObjectSchema } from './objects/BotGroupSelect.schema';
import { BotGroupUpdateManyMutationInputObjectSchema as BotGroupUpdateManyMutationInputObjectSchema } from './objects/BotGroupUpdateManyMutationInput.schema';
import { BotGroupWhereInputObjectSchema as BotGroupWhereInputObjectSchema } from './objects/BotGroupWhereInput.schema';

export const BotGroupUpdateManyAndReturnSchema: z.ZodType<Prisma.BotGroupUpdateManyAndReturnArgs> = z.object({ select: BotGroupSelectObjectSchema.optional(), data: BotGroupUpdateManyMutationInputObjectSchema, where: BotGroupWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BotGroupUpdateManyAndReturnArgs>;

export const BotGroupUpdateManyAndReturnZodSchema = z.object({ select: BotGroupSelectObjectSchema.optional(), data: BotGroupUpdateManyMutationInputObjectSchema, where: BotGroupWhereInputObjectSchema.optional() }).strict();