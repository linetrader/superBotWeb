import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkAttemptCreateWithoutWorkItemInputObjectSchema as WorkAttemptCreateWithoutWorkItemInputObjectSchema } from './WorkAttemptCreateWithoutWorkItemInput.schema';
import { WorkAttemptUncheckedCreateWithoutWorkItemInputObjectSchema as WorkAttemptUncheckedCreateWithoutWorkItemInputObjectSchema } from './WorkAttemptUncheckedCreateWithoutWorkItemInput.schema';
import { WorkAttemptCreateOrConnectWithoutWorkItemInputObjectSchema as WorkAttemptCreateOrConnectWithoutWorkItemInputObjectSchema } from './WorkAttemptCreateOrConnectWithoutWorkItemInput.schema';
import { WorkAttemptCreateManyWorkItemInputEnvelopeObjectSchema as WorkAttemptCreateManyWorkItemInputEnvelopeObjectSchema } from './WorkAttemptCreateManyWorkItemInputEnvelope.schema';
import { WorkAttemptWhereUniqueInputObjectSchema as WorkAttemptWhereUniqueInputObjectSchema } from './WorkAttemptWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkAttemptCreateWithoutWorkItemInputObjectSchema), z.lazy(() => WorkAttemptCreateWithoutWorkItemInputObjectSchema).array(), z.lazy(() => WorkAttemptUncheckedCreateWithoutWorkItemInputObjectSchema), z.lazy(() => WorkAttemptUncheckedCreateWithoutWorkItemInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkAttemptCreateOrConnectWithoutWorkItemInputObjectSchema), z.lazy(() => WorkAttemptCreateOrConnectWithoutWorkItemInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkAttemptCreateManyWorkItemInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => WorkAttemptWhereUniqueInputObjectSchema), z.lazy(() => WorkAttemptWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const WorkAttemptCreateNestedManyWithoutWorkItemInputObjectSchema: z.ZodType<Prisma.WorkAttemptCreateNestedManyWithoutWorkItemInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkAttemptCreateNestedManyWithoutWorkItemInput>;
export const WorkAttemptCreateNestedManyWithoutWorkItemInputObjectZodSchema = makeSchema();
