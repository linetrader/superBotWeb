import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkItemWhereUniqueInputObjectSchema as WorkItemWhereUniqueInputObjectSchema } from './WorkItemWhereUniqueInput.schema';
import { WorkItemCreateWithoutRunsInputObjectSchema as WorkItemCreateWithoutRunsInputObjectSchema } from './WorkItemCreateWithoutRunsInput.schema';
import { WorkItemUncheckedCreateWithoutRunsInputObjectSchema as WorkItemUncheckedCreateWithoutRunsInputObjectSchema } from './WorkItemUncheckedCreateWithoutRunsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WorkItemCreateWithoutRunsInputObjectSchema), z.lazy(() => WorkItemUncheckedCreateWithoutRunsInputObjectSchema)])
}).strict();
export const WorkItemCreateOrConnectWithoutRunsInputObjectSchema: z.ZodType<Prisma.WorkItemCreateOrConnectWithoutRunsInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemCreateOrConnectWithoutRunsInput>;
export const WorkItemCreateOrConnectWithoutRunsInputObjectZodSchema = makeSchema();
