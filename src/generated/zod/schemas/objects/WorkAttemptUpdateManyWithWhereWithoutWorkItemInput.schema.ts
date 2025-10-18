import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkAttemptScalarWhereInputObjectSchema as WorkAttemptScalarWhereInputObjectSchema } from './WorkAttemptScalarWhereInput.schema';
import { WorkAttemptUpdateManyMutationInputObjectSchema as WorkAttemptUpdateManyMutationInputObjectSchema } from './WorkAttemptUpdateManyMutationInput.schema';
import { WorkAttemptUncheckedUpdateManyWithoutWorkItemInputObjectSchema as WorkAttemptUncheckedUpdateManyWithoutWorkItemInputObjectSchema } from './WorkAttemptUncheckedUpdateManyWithoutWorkItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkAttemptScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => WorkAttemptUpdateManyMutationInputObjectSchema), z.lazy(() => WorkAttemptUncheckedUpdateManyWithoutWorkItemInputObjectSchema)])
}).strict();
export const WorkAttemptUpdateManyWithWhereWithoutWorkItemInputObjectSchema: z.ZodType<Prisma.WorkAttemptUpdateManyWithWhereWithoutWorkItemInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkAttemptUpdateManyWithWhereWithoutWorkItemInput>;
export const WorkAttemptUpdateManyWithWhereWithoutWorkItemInputObjectZodSchema = makeSchema();
