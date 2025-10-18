import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkItemCreateWithoutBotInputObjectSchema as WorkItemCreateWithoutBotInputObjectSchema } from './WorkItemCreateWithoutBotInput.schema';
import { WorkItemUncheckedCreateWithoutBotInputObjectSchema as WorkItemUncheckedCreateWithoutBotInputObjectSchema } from './WorkItemUncheckedCreateWithoutBotInput.schema';
import { WorkItemCreateOrConnectWithoutBotInputObjectSchema as WorkItemCreateOrConnectWithoutBotInputObjectSchema } from './WorkItemCreateOrConnectWithoutBotInput.schema';
import { WorkItemCreateManyBotInputEnvelopeObjectSchema as WorkItemCreateManyBotInputEnvelopeObjectSchema } from './WorkItemCreateManyBotInputEnvelope.schema';
import { WorkItemWhereUniqueInputObjectSchema as WorkItemWhereUniqueInputObjectSchema } from './WorkItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkItemCreateWithoutBotInputObjectSchema), z.lazy(() => WorkItemCreateWithoutBotInputObjectSchema).array(), z.lazy(() => WorkItemUncheckedCreateWithoutBotInputObjectSchema), z.lazy(() => WorkItemUncheckedCreateWithoutBotInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkItemCreateOrConnectWithoutBotInputObjectSchema), z.lazy(() => WorkItemCreateOrConnectWithoutBotInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkItemCreateManyBotInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => WorkItemWhereUniqueInputObjectSchema), z.lazy(() => WorkItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const WorkItemUncheckedCreateNestedManyWithoutBotInputObjectSchema: z.ZodType<Prisma.WorkItemUncheckedCreateNestedManyWithoutBotInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemUncheckedCreateNestedManyWithoutBotInput>;
export const WorkItemUncheckedCreateNestedManyWithoutBotInputObjectZodSchema = makeSchema();
