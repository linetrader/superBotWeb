import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkItemWhereUniqueInputObjectSchema as WorkItemWhereUniqueInputObjectSchema } from './WorkItemWhereUniqueInput.schema';
import { WorkItemCreateWithoutBotInputObjectSchema as WorkItemCreateWithoutBotInputObjectSchema } from './WorkItemCreateWithoutBotInput.schema';
import { WorkItemUncheckedCreateWithoutBotInputObjectSchema as WorkItemUncheckedCreateWithoutBotInputObjectSchema } from './WorkItemUncheckedCreateWithoutBotInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WorkItemCreateWithoutBotInputObjectSchema), z.lazy(() => WorkItemUncheckedCreateWithoutBotInputObjectSchema)])
}).strict();
export const WorkItemCreateOrConnectWithoutBotInputObjectSchema: z.ZodType<Prisma.WorkItemCreateOrConnectWithoutBotInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemCreateOrConnectWithoutBotInput>;
export const WorkItemCreateOrConnectWithoutBotInputObjectZodSchema = makeSchema();
