import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkItemWhereUniqueInputObjectSchema as WorkItemWhereUniqueInputObjectSchema } from './WorkItemWhereUniqueInput.schema';
import { WorkItemUpdateWithoutBotInputObjectSchema as WorkItemUpdateWithoutBotInputObjectSchema } from './WorkItemUpdateWithoutBotInput.schema';
import { WorkItemUncheckedUpdateWithoutBotInputObjectSchema as WorkItemUncheckedUpdateWithoutBotInputObjectSchema } from './WorkItemUncheckedUpdateWithoutBotInput.schema';
import { WorkItemCreateWithoutBotInputObjectSchema as WorkItemCreateWithoutBotInputObjectSchema } from './WorkItemCreateWithoutBotInput.schema';
import { WorkItemUncheckedCreateWithoutBotInputObjectSchema as WorkItemUncheckedCreateWithoutBotInputObjectSchema } from './WorkItemUncheckedCreateWithoutBotInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => WorkItemUpdateWithoutBotInputObjectSchema), z.lazy(() => WorkItemUncheckedUpdateWithoutBotInputObjectSchema)]),
  create: z.union([z.lazy(() => WorkItemCreateWithoutBotInputObjectSchema), z.lazy(() => WorkItemUncheckedCreateWithoutBotInputObjectSchema)])
}).strict();
export const WorkItemUpsertWithWhereUniqueWithoutBotInputObjectSchema: z.ZodType<Prisma.WorkItemUpsertWithWhereUniqueWithoutBotInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemUpsertWithWhereUniqueWithoutBotInput>;
export const WorkItemUpsertWithWhereUniqueWithoutBotInputObjectZodSchema = makeSchema();
