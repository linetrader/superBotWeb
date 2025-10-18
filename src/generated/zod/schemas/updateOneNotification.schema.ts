import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { NotificationSelectObjectSchema as NotificationSelectObjectSchema } from './objects/NotificationSelect.schema';
import { NotificationUpdateInputObjectSchema as NotificationUpdateInputObjectSchema } from './objects/NotificationUpdateInput.schema';
import { NotificationUncheckedUpdateInputObjectSchema as NotificationUncheckedUpdateInputObjectSchema } from './objects/NotificationUncheckedUpdateInput.schema';
import { NotificationWhereUniqueInputObjectSchema as NotificationWhereUniqueInputObjectSchema } from './objects/NotificationWhereUniqueInput.schema';

export const NotificationUpdateOneSchema: z.ZodType<Prisma.NotificationUpdateArgs> = z.object({ select: NotificationSelectObjectSchema.optional(),  data: z.union([NotificationUpdateInputObjectSchema, NotificationUncheckedUpdateInputObjectSchema]), where: NotificationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.NotificationUpdateArgs>;

export const NotificationUpdateOneZodSchema = z.object({ select: NotificationSelectObjectSchema.optional(),  data: z.union([NotificationUpdateInputObjectSchema, NotificationUncheckedUpdateInputObjectSchema]), where: NotificationWhereUniqueInputObjectSchema }).strict();