import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { UserInfoOrderByWithRelationInputObjectSchema as UserInfoOrderByWithRelationInputObjectSchema } from './objects/UserInfoOrderByWithRelationInput.schema';
import { UserInfoWhereInputObjectSchema as UserInfoWhereInputObjectSchema } from './objects/UserInfoWhereInput.schema';
import { UserInfoWhereUniqueInputObjectSchema as UserInfoWhereUniqueInputObjectSchema } from './objects/UserInfoWhereUniqueInput.schema';
import { UserInfoCountAggregateInputObjectSchema as UserInfoCountAggregateInputObjectSchema } from './objects/UserInfoCountAggregateInput.schema';

export const UserInfoCountSchema: z.ZodType<Prisma.UserInfoCountArgs> = z.object({ orderBy: z.union([UserInfoOrderByWithRelationInputObjectSchema, UserInfoOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserInfoWhereInputObjectSchema.optional(), cursor: UserInfoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UserInfoCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.UserInfoCountArgs>;

export const UserInfoCountZodSchema = z.object({ orderBy: z.union([UserInfoOrderByWithRelationInputObjectSchema, UserInfoOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserInfoWhereInputObjectSchema.optional(), cursor: UserInfoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UserInfoCountAggregateInputObjectSchema ]).optional() }).strict();