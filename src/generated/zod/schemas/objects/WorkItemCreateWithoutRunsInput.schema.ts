import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkTypeSchema } from '../enums/WorkType.schema';
import { WorkStatusSchema } from '../enums/WorkStatus.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { TradingBotCreateNestedOneWithoutWorkItemsInputObjectSchema as TradingBotCreateNestedOneWithoutWorkItemsInputObjectSchema } from './TradingBotCreateNestedOneWithoutWorkItemsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  type: WorkTypeSchema,
  status: WorkStatusSchema.optional(),
  dedupeKey: z.string().optional().nullable(),
  sqsMessageId: z.string().optional().nullable(),
  sqsGroupId: z.string().optional().nullable(),
  payload: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  attempts: z.number().int().optional(),
  nextVisibleAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  bot: z.lazy(() => TradingBotCreateNestedOneWithoutWorkItemsInputObjectSchema).optional()
}).strict();
export const WorkItemCreateWithoutRunsInputObjectSchema: z.ZodType<Prisma.WorkItemCreateWithoutRunsInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemCreateWithoutRunsInput>;
export const WorkItemCreateWithoutRunsInputObjectZodSchema = makeSchema();
