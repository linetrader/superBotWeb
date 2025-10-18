import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkItemCreateWithoutBotInputObjectSchema as WorkItemCreateWithoutBotInputObjectSchema } from './WorkItemCreateWithoutBotInput.schema';
import { WorkItemUncheckedCreateWithoutBotInputObjectSchema as WorkItemUncheckedCreateWithoutBotInputObjectSchema } from './WorkItemUncheckedCreateWithoutBotInput.schema';
import { WorkItemCreateOrConnectWithoutBotInputObjectSchema as WorkItemCreateOrConnectWithoutBotInputObjectSchema } from './WorkItemCreateOrConnectWithoutBotInput.schema';
import { WorkItemUpsertWithWhereUniqueWithoutBotInputObjectSchema as WorkItemUpsertWithWhereUniqueWithoutBotInputObjectSchema } from './WorkItemUpsertWithWhereUniqueWithoutBotInput.schema';
import { WorkItemCreateManyBotInputEnvelopeObjectSchema as WorkItemCreateManyBotInputEnvelopeObjectSchema } from './WorkItemCreateManyBotInputEnvelope.schema';
import { WorkItemWhereUniqueInputObjectSchema as WorkItemWhereUniqueInputObjectSchema } from './WorkItemWhereUniqueInput.schema';
import { WorkItemUpdateWithWhereUniqueWithoutBotInputObjectSchema as WorkItemUpdateWithWhereUniqueWithoutBotInputObjectSchema } from './WorkItemUpdateWithWhereUniqueWithoutBotInput.schema';
import { WorkItemUpdateManyWithWhereWithoutBotInputObjectSchema as WorkItemUpdateManyWithWhereWithoutBotInputObjectSchema } from './WorkItemUpdateManyWithWhereWithoutBotInput.schema';
import { WorkItemScalarWhereInputObjectSchema as WorkItemScalarWhereInputObjectSchema } from './WorkItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkItemCreateWithoutBotInputObjectSchema), z.lazy(() => WorkItemCreateWithoutBotInputObjectSchema).array(), z.lazy(() => WorkItemUncheckedCreateWithoutBotInputObjectSchema), z.lazy(() => WorkItemUncheckedCreateWithoutBotInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkItemCreateOrConnectWithoutBotInputObjectSchema), z.lazy(() => WorkItemCreateOrConnectWithoutBotInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => WorkItemUpsertWithWhereUniqueWithoutBotInputObjectSchema), z.lazy(() => WorkItemUpsertWithWhereUniqueWithoutBotInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkItemCreateManyBotInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => WorkItemWhereUniqueInputObjectSchema), z.lazy(() => WorkItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => WorkItemWhereUniqueInputObjectSchema), z.lazy(() => WorkItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => WorkItemWhereUniqueInputObjectSchema), z.lazy(() => WorkItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => WorkItemWhereUniqueInputObjectSchema), z.lazy(() => WorkItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => WorkItemUpdateWithWhereUniqueWithoutBotInputObjectSchema), z.lazy(() => WorkItemUpdateWithWhereUniqueWithoutBotInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => WorkItemUpdateManyWithWhereWithoutBotInputObjectSchema), z.lazy(() => WorkItemUpdateManyWithWhereWithoutBotInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => WorkItemScalarWhereInputObjectSchema), z.lazy(() => WorkItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const WorkItemUpdateManyWithoutBotNestedInputObjectSchema: z.ZodType<Prisma.WorkItemUpdateManyWithoutBotNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemUpdateManyWithoutBotNestedInput>;
export const WorkItemUpdateManyWithoutBotNestedInputObjectZodSchema = makeSchema();
