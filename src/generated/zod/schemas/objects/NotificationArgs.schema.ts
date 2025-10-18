import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { NotificationSelectObjectSchema as NotificationSelectObjectSchema } from './NotificationSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => NotificationSelectObjectSchema).optional()
}).strict();
export const NotificationArgsObjectSchema = makeSchema();
export const NotificationArgsObjectZodSchema = makeSchema();
