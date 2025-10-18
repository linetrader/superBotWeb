import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkItemCreateWithoutRunsInputObjectSchema as WorkItemCreateWithoutRunsInputObjectSchema } from './WorkItemCreateWithoutRunsInput.schema';
import { WorkItemUncheckedCreateWithoutRunsInputObjectSchema as WorkItemUncheckedCreateWithoutRunsInputObjectSchema } from './WorkItemUncheckedCreateWithoutRunsInput.schema';
import { WorkItemCreateOrConnectWithoutRunsInputObjectSchema as WorkItemCreateOrConnectWithoutRunsInputObjectSchema } from './WorkItemCreateOrConnectWithoutRunsInput.schema';
import { WorkItemWhereUniqueInputObjectSchema as WorkItemWhereUniqueInputObjectSchema } from './WorkItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkItemCreateWithoutRunsInputObjectSchema), z.lazy(() => WorkItemUncheckedCreateWithoutRunsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WorkItemCreateOrConnectWithoutRunsInputObjectSchema).optional(),
  connect: z.lazy(() => WorkItemWhereUniqueInputObjectSchema).optional()
}).strict();
export const WorkItemCreateNestedOneWithoutRunsInputObjectSchema: z.ZodType<Prisma.WorkItemCreateNestedOneWithoutRunsInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemCreateNestedOneWithoutRunsInput>;
export const WorkItemCreateNestedOneWithoutRunsInputObjectZodSchema = makeSchema();
