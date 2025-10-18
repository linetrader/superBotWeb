import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkItemCreateWithoutRunsInputObjectSchema as WorkItemCreateWithoutRunsInputObjectSchema } from './WorkItemCreateWithoutRunsInput.schema';
import { WorkItemUncheckedCreateWithoutRunsInputObjectSchema as WorkItemUncheckedCreateWithoutRunsInputObjectSchema } from './WorkItemUncheckedCreateWithoutRunsInput.schema';
import { WorkItemCreateOrConnectWithoutRunsInputObjectSchema as WorkItemCreateOrConnectWithoutRunsInputObjectSchema } from './WorkItemCreateOrConnectWithoutRunsInput.schema';
import { WorkItemUpsertWithoutRunsInputObjectSchema as WorkItemUpsertWithoutRunsInputObjectSchema } from './WorkItemUpsertWithoutRunsInput.schema';
import { WorkItemWhereUniqueInputObjectSchema as WorkItemWhereUniqueInputObjectSchema } from './WorkItemWhereUniqueInput.schema';
import { WorkItemUpdateToOneWithWhereWithoutRunsInputObjectSchema as WorkItemUpdateToOneWithWhereWithoutRunsInputObjectSchema } from './WorkItemUpdateToOneWithWhereWithoutRunsInput.schema';
import { WorkItemUpdateWithoutRunsInputObjectSchema as WorkItemUpdateWithoutRunsInputObjectSchema } from './WorkItemUpdateWithoutRunsInput.schema';
import { WorkItemUncheckedUpdateWithoutRunsInputObjectSchema as WorkItemUncheckedUpdateWithoutRunsInputObjectSchema } from './WorkItemUncheckedUpdateWithoutRunsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkItemCreateWithoutRunsInputObjectSchema), z.lazy(() => WorkItemUncheckedCreateWithoutRunsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WorkItemCreateOrConnectWithoutRunsInputObjectSchema).optional(),
  upsert: z.lazy(() => WorkItemUpsertWithoutRunsInputObjectSchema).optional(),
  connect: z.lazy(() => WorkItemWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => WorkItemUpdateToOneWithWhereWithoutRunsInputObjectSchema), z.lazy(() => WorkItemUpdateWithoutRunsInputObjectSchema), z.lazy(() => WorkItemUncheckedUpdateWithoutRunsInputObjectSchema)]).optional()
}).strict();
export const WorkItemUpdateOneRequiredWithoutRunsNestedInputObjectSchema: z.ZodType<Prisma.WorkItemUpdateOneRequiredWithoutRunsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemUpdateOneRequiredWithoutRunsNestedInput>;
export const WorkItemUpdateOneRequiredWithoutRunsNestedInputObjectZodSchema = makeSchema();
