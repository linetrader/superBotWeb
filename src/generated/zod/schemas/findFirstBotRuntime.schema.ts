import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotRuntimeIncludeObjectSchema as BotRuntimeIncludeObjectSchema } from './objects/BotRuntimeInclude.schema';
import { BotRuntimeOrderByWithRelationInputObjectSchema as BotRuntimeOrderByWithRelationInputObjectSchema } from './objects/BotRuntimeOrderByWithRelationInput.schema';
import { BotRuntimeWhereInputObjectSchema as BotRuntimeWhereInputObjectSchema } from './objects/BotRuntimeWhereInput.schema';
import { BotRuntimeWhereUniqueInputObjectSchema as BotRuntimeWhereUniqueInputObjectSchema } from './objects/BotRuntimeWhereUniqueInput.schema';
import { BotRuntimeScalarFieldEnumSchema } from './enums/BotRuntimeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BotRuntimeFindFirstSelectSchema: z.ZodType<Prisma.BotRuntimeSelect> = z.object({
    id: z.boolean().optional(),
    botId: z.boolean().optional(),
    bot: z.boolean().optional(),
    status: z.boolean().optional(),
    pid: z.boolean().optional(),
    queueJobId: z.boolean().optional(),
    startedAt: z.boolean().optional(),
    stoppedAt: z.boolean().optional(),
    lastHeartbeat: z.boolean().optional(),
    lastError: z.boolean().optional(),
    workerTaskArn: z.boolean().optional(),
    workerRevision: z.boolean().optional(),
    desiredState: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.BotRuntimeSelect>;

export const BotRuntimeFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    botId: z.boolean().optional(),
    bot: z.boolean().optional(),
    status: z.boolean().optional(),
    pid: z.boolean().optional(),
    queueJobId: z.boolean().optional(),
    startedAt: z.boolean().optional(),
    stoppedAt: z.boolean().optional(),
    lastHeartbeat: z.boolean().optional(),
    lastError: z.boolean().optional(),
    workerTaskArn: z.boolean().optional(),
    workerRevision: z.boolean().optional(),
    desiredState: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const BotRuntimeFindFirstSchema: z.ZodType<Prisma.BotRuntimeFindFirstArgs> = z.object({ select: BotRuntimeFindFirstSelectSchema.optional(), include: z.lazy(() => BotRuntimeIncludeObjectSchema.optional()), orderBy: z.union([BotRuntimeOrderByWithRelationInputObjectSchema, BotRuntimeOrderByWithRelationInputObjectSchema.array()]).optional(), where: BotRuntimeWhereInputObjectSchema.optional(), cursor: BotRuntimeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BotRuntimeScalarFieldEnumSchema, BotRuntimeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BotRuntimeFindFirstArgs>;

export const BotRuntimeFindFirstZodSchema = z.object({ select: BotRuntimeFindFirstSelectSchema.optional(), include: z.lazy(() => BotRuntimeIncludeObjectSchema.optional()), orderBy: z.union([BotRuntimeOrderByWithRelationInputObjectSchema, BotRuntimeOrderByWithRelationInputObjectSchema.array()]).optional(), where: BotRuntimeWhereInputObjectSchema.optional(), cursor: BotRuntimeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BotRuntimeScalarFieldEnumSchema, BotRuntimeScalarFieldEnumSchema.array()]).optional() }).strict();