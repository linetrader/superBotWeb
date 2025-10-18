import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkAttemptCreateManyWorkItemInputObjectSchema as WorkAttemptCreateManyWorkItemInputObjectSchema } from './WorkAttemptCreateManyWorkItemInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WorkAttemptCreateManyWorkItemInputObjectSchema), z.lazy(() => WorkAttemptCreateManyWorkItemInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const WorkAttemptCreateManyWorkItemInputEnvelopeObjectSchema: z.ZodType<Prisma.WorkAttemptCreateManyWorkItemInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.WorkAttemptCreateManyWorkItemInputEnvelope>;
export const WorkAttemptCreateManyWorkItemInputEnvelopeObjectZodSchema = makeSchema();
