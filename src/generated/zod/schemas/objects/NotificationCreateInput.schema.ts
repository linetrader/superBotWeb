import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { NotifyStatusSchema } from '../enums/NotifyStatus.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  channel: z.string(),
  target: z.string().optional().nullable(),
  payload: z.union([JsonNullValueInputSchema, jsonSchema]),
  status: NotifyStatusSchema.optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const NotificationCreateInputObjectSchema: z.ZodType<Prisma.NotificationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationCreateInput>;
export const NotificationCreateInputObjectZodSchema = makeSchema();
