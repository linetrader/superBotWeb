import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotLogUpdateManyMutationInputObjectSchema as BotLogUpdateManyMutationInputObjectSchema } from './objects/BotLogUpdateManyMutationInput.schema';
import { BotLogWhereInputObjectSchema as BotLogWhereInputObjectSchema } from './objects/BotLogWhereInput.schema';

export const BotLogUpdateManySchema: z.ZodType<Prisma.BotLogUpdateManyArgs> = z.object({ data: BotLogUpdateManyMutationInputObjectSchema, where: BotLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BotLogUpdateManyArgs>;

export const BotLogUpdateManyZodSchema = z.object({ data: BotLogUpdateManyMutationInputObjectSchema, where: BotLogWhereInputObjectSchema.optional() }).strict();