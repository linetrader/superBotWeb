import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { UserWalletOrderByWithRelationInputObjectSchema as UserWalletOrderByWithRelationInputObjectSchema } from './objects/UserWalletOrderByWithRelationInput.schema';
import { UserWalletWhereInputObjectSchema as UserWalletWhereInputObjectSchema } from './objects/UserWalletWhereInput.schema';
import { UserWalletWhereUniqueInputObjectSchema as UserWalletWhereUniqueInputObjectSchema } from './objects/UserWalletWhereUniqueInput.schema';
import { UserWalletCountAggregateInputObjectSchema as UserWalletCountAggregateInputObjectSchema } from './objects/UserWalletCountAggregateInput.schema';

export const UserWalletCountSchema: z.ZodType<Prisma.UserWalletCountArgs> = z.object({ orderBy: z.union([UserWalletOrderByWithRelationInputObjectSchema, UserWalletOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWalletWhereInputObjectSchema.optional(), cursor: UserWalletWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UserWalletCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.UserWalletCountArgs>;

export const UserWalletCountZodSchema = z.object({ orderBy: z.union([UserWalletOrderByWithRelationInputObjectSchema, UserWalletOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWalletWhereInputObjectSchema.optional(), cursor: UserWalletWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UserWalletCountAggregateInputObjectSchema ]).optional() }).strict();