import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotGroupUpdateManyMutationInputObjectSchema as BotGroupUpdateManyMutationInputObjectSchema } from './objects/BotGroupUpdateManyMutationInput.schema';
import { BotGroupWhereInputObjectSchema as BotGroupWhereInputObjectSchema } from './objects/BotGroupWhereInput.schema';

export const BotGroupUpdateManySchema: z.ZodType<Prisma.BotGroupUpdateManyArgs> = z.object({ data: BotGroupUpdateManyMutationInputObjectSchema, where: BotGroupWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BotGroupUpdateManyArgs>;

export const BotGroupUpdateManyZodSchema = z.object({ data: BotGroupUpdateManyMutationInputObjectSchema, where: BotGroupWhereInputObjectSchema.optional() }).strict();