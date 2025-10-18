import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { NotificationSelectObjectSchema as NotificationSelectObjectSchema } from './objects/NotificationSelect.schema';
import { NotificationWhereUniqueInputObjectSchema as NotificationWhereUniqueInputObjectSchema } from './objects/NotificationWhereUniqueInput.schema';

export const NotificationFindUniqueSchema: z.ZodType<Prisma.NotificationFindUniqueArgs> = z.object({ select: NotificationSelectObjectSchema.optional(),  where: NotificationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.NotificationFindUniqueArgs>;

export const NotificationFindUniqueZodSchema = z.object({ select: NotificationSelectObjectSchema.optional(),  where: NotificationWhereUniqueInputObjectSchema }).strict();