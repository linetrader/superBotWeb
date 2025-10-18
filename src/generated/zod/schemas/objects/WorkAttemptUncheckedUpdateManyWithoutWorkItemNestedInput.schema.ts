import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkAttemptCreateWithoutWorkItemInputObjectSchema as WorkAttemptCreateWithoutWorkItemInputObjectSchema } from './WorkAttemptCreateWithoutWorkItemInput.schema';
import { WorkAttemptUncheckedCreateWithoutWorkItemInputObjectSchema as WorkAttemptUncheckedCreateWithoutWorkItemInputObjectSchema } from './WorkAttemptUncheckedCreateWithoutWorkItemInput.schema';
import { WorkAttemptCreateOrConnectWithoutWorkItemInputObjectSchema as WorkAttemptCreateOrConnectWithoutWorkItemInputObjectSchema } from './WorkAttemptCreateOrConnectWithoutWorkItemInput.schema';
import { WorkAttemptUpsertWithWhereUniqueWithoutWorkItemInputObjectSchema as WorkAttemptUpsertWithWhereUniqueWithoutWorkItemInputObjectSchema } from './WorkAttemptUpsertWithWhereUniqueWithoutWorkItemInput.schema';
import { WorkAttemptCreateManyWorkItemInputEnvelopeObjectSchema as WorkAttemptCreateManyWorkItemInputEnvelopeObjectSchema } from './WorkAttemptCreateManyWorkItemInputEnvelope.schema';
import { WorkAttemptWhereUniqueInputObjectSchema as WorkAttemptWhereUniqueInputObjectSchema } from './WorkAttemptWhereUniqueInput.schema';
import { WorkAttemptUpdateWithWhereUniqueWithoutWorkItemInputObjectSchema as WorkAttemptUpdateWithWhereUniqueWithoutWorkItemInputObjectSchema } from './WorkAttemptUpdateWithWhereUniqueWithoutWorkItemInput.schema';
import { WorkAttemptUpdateManyWithWhereWithoutWorkItemInputObjectSchema as WorkAttemptUpdateManyWithWhereWithoutWorkItemInputObjectSchema } from './WorkAttemptUpdateManyWithWhereWithoutWorkItemInput.schema';
import { WorkAttemptScalarWhereInputObjectSchema as WorkAttemptScalarWhereInputObjectSchema } from './WorkAttemptScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkAttemptCreateWithoutWorkItemInputObjectSchema), z.lazy(() => WorkAttemptCreateWithoutWorkItemInputObjectSchema).array(), z.lazy(() => WorkAttemptUncheckedCreateWithoutWorkItemInputObjectSchema), z.lazy(() => WorkAttemptUncheckedCreateWithoutWorkItemInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkAttemptCreateOrConnectWithoutWorkItemInputObjectSchema), z.lazy(() => WorkAttemptCreateOrConnectWithoutWorkItemInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => WorkAttemptUpsertWithWhereUniqueWithoutWorkItemInputObjectSchema), z.lazy(() => WorkAttemptUpsertWithWhereUniqueWithoutWorkItemInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkAttemptCreateManyWorkItemInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => WorkAttemptWhereUniqueInputObjectSchema), z.lazy(() => WorkAttemptWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => WorkAttemptWhereUniqueInputObjectSchema), z.lazy(() => WorkAttemptWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => WorkAttemptWhereUniqueInputObjectSchema), z.lazy(() => WorkAttemptWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => WorkAttemptWhereUniqueInputObjectSchema), z.lazy(() => WorkAttemptWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => WorkAttemptUpdateWithWhereUniqueWithoutWorkItemInputObjectSchema), z.lazy(() => WorkAttemptUpdateWithWhereUniqueWithoutWorkItemInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => WorkAttemptUpdateManyWithWhereWithoutWorkItemInputObjectSchema), z.lazy(() => WorkAttemptUpdateManyWithWhereWithoutWorkItemInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => WorkAttemptScalarWhereInputObjectSchema), z.lazy(() => WorkAttemptScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const WorkAttemptUncheckedUpdateManyWithoutWorkItemNestedInputObjectSchema: z.ZodType<Prisma.WorkAttemptUncheckedUpdateManyWithoutWorkItemNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkAttemptUncheckedUpdateManyWithoutWorkItemNestedInput>;
export const WorkAttemptUncheckedUpdateManyWithoutWorkItemNestedInputObjectZodSchema = makeSchema();
