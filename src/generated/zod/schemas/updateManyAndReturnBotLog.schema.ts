import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotLogSelectObjectSchema as BotLogSelectObjectSchema } from './objects/BotLogSelect.schema';
import { BotLogUpdateManyMutationInputObjectSchema as BotLogUpdateManyMutationInputObjectSchema } from './objects/BotLogUpdateManyMutationInput.schema';
import { BotLogWhereInputObjectSchema as BotLogWhereInputObjectSchema } from './objects/BotLogWhereInput.schema';

export const BotLogUpdateManyAndReturnSchema: z.ZodType<Prisma.BotLogUpdateManyAndReturnArgs> = z.object({ select: BotLogSelectObjectSchema.optional(), data: BotLogUpdateManyMutationInputObjectSchema, where: BotLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BotLogUpdateManyAndReturnArgs>;

export const BotLogUpdateManyAndReturnZodSchema = z.object({ select: BotLogSelectObjectSchema.optional(), data: BotLogUpdateManyMutationInputObjectSchema, where: BotLogWhereInputObjectSchema.optional() }).strict();