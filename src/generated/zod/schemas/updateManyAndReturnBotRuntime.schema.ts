import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotRuntimeSelectObjectSchema as BotRuntimeSelectObjectSchema } from './objects/BotRuntimeSelect.schema';
import { BotRuntimeUpdateManyMutationInputObjectSchema as BotRuntimeUpdateManyMutationInputObjectSchema } from './objects/BotRuntimeUpdateManyMutationInput.schema';
import { BotRuntimeWhereInputObjectSchema as BotRuntimeWhereInputObjectSchema } from './objects/BotRuntimeWhereInput.schema';

export const BotRuntimeUpdateManyAndReturnSchema: z.ZodType<Prisma.BotRuntimeUpdateManyAndReturnArgs> = z.object({ select: BotRuntimeSelectObjectSchema.optional(), data: BotRuntimeUpdateManyMutationInputObjectSchema, where: BotRuntimeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BotRuntimeUpdateManyAndReturnArgs>;

export const BotRuntimeUpdateManyAndReturnZodSchema = z.object({ select: BotRuntimeSelectObjectSchema.optional(), data: BotRuntimeUpdateManyMutationInputObjectSchema, where: BotRuntimeWhereInputObjectSchema.optional() }).strict();