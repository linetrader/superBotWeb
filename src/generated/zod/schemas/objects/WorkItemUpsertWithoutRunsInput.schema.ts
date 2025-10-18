import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkItemUpdateWithoutRunsInputObjectSchema as WorkItemUpdateWithoutRunsInputObjectSchema } from './WorkItemUpdateWithoutRunsInput.schema';
import { WorkItemUncheckedUpdateWithoutRunsInputObjectSchema as WorkItemUncheckedUpdateWithoutRunsInputObjectSchema } from './WorkItemUncheckedUpdateWithoutRunsInput.schema';
import { WorkItemCreateWithoutRunsInputObjectSchema as WorkItemCreateWithoutRunsInputObjectSchema } from './WorkItemCreateWithoutRunsInput.schema';
import { WorkItemUncheckedCreateWithoutRunsInputObjectSchema as WorkItemUncheckedCreateWithoutRunsInputObjectSchema } from './WorkItemUncheckedCreateWithoutRunsInput.schema';
import { WorkItemWhereInputObjectSchema as WorkItemWhereInputObjectSchema } from './WorkItemWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => WorkItemUpdateWithoutRunsInputObjectSchema), z.lazy(() => WorkItemUncheckedUpdateWithoutRunsInputObjectSchema)]),
  create: z.union([z.lazy(() => WorkItemCreateWithoutRunsInputObjectSchema), z.lazy(() => WorkItemUncheckedCreateWithoutRunsInputObjectSchema)]),
  where: z.lazy(() => WorkItemWhereInputObjectSchema).optional()
}).strict();
export const WorkItemUpsertWithoutRunsInputObjectSchema: z.ZodType<Prisma.WorkItemUpsertWithoutRunsInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemUpsertWithoutRunsInput>;
export const WorkItemUpsertWithoutRunsInputObjectZodSchema = makeSchema();
