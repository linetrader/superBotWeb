import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotRuntimeWhereInputObjectSchema as BotRuntimeWhereInputObjectSchema } from './objects/BotRuntimeWhereInput.schema';

export const BotRuntimeDeleteManySchema: z.ZodType<Prisma.BotRuntimeDeleteManyArgs> = z.object({ where: BotRuntimeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BotRuntimeDeleteManyArgs>;

export const BotRuntimeDeleteManyZodSchema = z.object({ where: BotRuntimeWhereInputObjectSchema.optional() }).strict();