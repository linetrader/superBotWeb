import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { NotificationOrderByWithRelationInputObjectSchema as NotificationOrderByWithRelationInputObjectSchema } from './objects/NotificationOrderByWithRelationInput.schema';
import { NotificationWhereInputObjectSchema as NotificationWhereInputObjectSchema } from './objects/NotificationWhereInput.schema';
import { NotificationWhereUniqueInputObjectSchema as NotificationWhereUniqueInputObjectSchema } from './objects/NotificationWhereUniqueInput.schema';
import { NotificationScalarFieldEnumSchema } from './enums/NotificationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const NotificationFindFirstOrThrowSelectSchema: z.ZodType<Prisma.NotificationSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    channel: z.boolean().optional(),
    target: z.boolean().optional(),
    payload: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.NotificationSelect>;

export const NotificationFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    channel: z.boolean().optional(),
    target: z.boolean().optional(),
    payload: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const NotificationFindFirstOrThrowSchema: z.ZodType<Prisma.NotificationFindFirstOrThrowArgs> = z.object({ select: NotificationFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([NotificationOrderByWithRelationInputObjectSchema, NotificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: NotificationWhereInputObjectSchema.optional(), cursor: NotificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([NotificationScalarFieldEnumSchema, NotificationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.NotificationFindFirstOrThrowArgs>;

export const NotificationFindFirstOrThrowZodSchema = z.object({ select: NotificationFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([NotificationOrderByWithRelationInputObjectSchema, NotificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: NotificationWhereInputObjectSchema.optional(), cursor: NotificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([NotificationScalarFieldEnumSchema, NotificationScalarFieldEnumSchema.array()]).optional() }).strict();