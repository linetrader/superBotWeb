import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkAttemptWhereUniqueInputObjectSchema as WorkAttemptWhereUniqueInputObjectSchema } from './WorkAttemptWhereUniqueInput.schema';
import { WorkAttemptCreateWithoutWorkItemInputObjectSchema as WorkAttemptCreateWithoutWorkItemInputObjectSchema } from './WorkAttemptCreateWithoutWorkItemInput.schema';
import { WorkAttemptUncheckedCreateWithoutWorkItemInputObjectSchema as WorkAttemptUncheckedCreateWithoutWorkItemInputObjectSchema } from './WorkAttemptUncheckedCreateWithoutWorkItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkAttemptWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WorkAttemptCreateWithoutWorkItemInputObjectSchema), z.lazy(() => WorkAttemptUncheckedCreateWithoutWorkItemInputObjectSchema)])
}).strict();
export const WorkAttemptCreateOrConnectWithoutWorkItemInputObjectSchema: z.ZodType<Prisma.WorkAttemptCreateOrConnectWithoutWorkItemInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkAttemptCreateOrConnectWithoutWorkItemInput>;
export const WorkAttemptCreateOrConnectWithoutWorkItemInputObjectZodSchema = makeSchema();
