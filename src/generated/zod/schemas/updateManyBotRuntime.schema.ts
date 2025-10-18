import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotRuntimeUpdateManyMutationInputObjectSchema as BotRuntimeUpdateManyMutationInputObjectSchema } from './objects/BotRuntimeUpdateManyMutationInput.schema';
import { BotRuntimeWhereInputObjectSchema as BotRuntimeWhereInputObjectSchema } from './objects/BotRuntimeWhereInput.schema';

export const BotRuntimeUpdateManySchema: z.ZodType<Prisma.BotRuntimeUpdateManyArgs> = z.object({ data: BotRuntimeUpdateManyMutationInputObjectSchema, where: BotRuntimeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BotRuntimeUpdateManyArgs>;

export const BotRuntimeUpdateManyZodSchema = z.object({ data: BotRuntimeUpdateManyMutationInputObjectSchema, where: BotRuntimeWhereInputObjectSchema.optional() }).strict();