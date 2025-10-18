import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkItemWhereInputObjectSchema as WorkItemWhereInputObjectSchema } from './WorkItemWhereInput.schema';
import { WorkItemUpdateWithoutRunsInputObjectSchema as WorkItemUpdateWithoutRunsInputObjectSchema } from './WorkItemUpdateWithoutRunsInput.schema';
import { WorkItemUncheckedUpdateWithoutRunsInputObjectSchema as WorkItemUncheckedUpdateWithoutRunsInputObjectSchema } from './WorkItemUncheckedUpdateWithoutRunsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkItemWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => WorkItemUpdateWithoutRunsInputObjectSchema), z.lazy(() => WorkItemUncheckedUpdateWithoutRunsInputObjectSchema)])
}).strict();
export const WorkItemUpdateToOneWithWhereWithoutRunsInputObjectSchema: z.ZodType<Prisma.WorkItemUpdateToOneWithWhereWithoutRunsInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemUpdateToOneWithWhereWithoutRunsInput>;
export const WorkItemUpdateToOneWithWhereWithoutRunsInputObjectZodSchema = makeSchema();
