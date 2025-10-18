import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkItemCreateManyBotInputObjectSchema as WorkItemCreateManyBotInputObjectSchema } from './WorkItemCreateManyBotInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WorkItemCreateManyBotInputObjectSchema), z.lazy(() => WorkItemCreateManyBotInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const WorkItemCreateManyBotInputEnvelopeObjectSchema: z.ZodType<Prisma.WorkItemCreateManyBotInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemCreateManyBotInputEnvelope>;
export const WorkItemCreateManyBotInputEnvelopeObjectZodSchema = makeSchema();
