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
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const NotificationCreateManyInputObjectSchema: z.ZodType<Prisma.NotificationCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationCreateManyInput>;
export const NotificationCreateManyInputObjectZodSchema = makeSchema();
