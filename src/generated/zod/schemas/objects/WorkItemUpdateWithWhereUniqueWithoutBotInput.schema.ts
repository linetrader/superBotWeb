import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkItemWhereUniqueInputObjectSchema as WorkItemWhereUniqueInputObjectSchema } from './WorkItemWhereUniqueInput.schema';
import { WorkItemUpdateWithoutBotInputObjectSchema as WorkItemUpdateWithoutBotInputObjectSchema } from './WorkItemUpdateWithoutBotInput.schema';
import { WorkItemUncheckedUpdateWithoutBotInputObjectSchema as WorkItemUncheckedUpdateWithoutBotInputObjectSchema } from './WorkItemUncheckedUpdateWithoutBotInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => WorkItemUpdateWithoutBotInputObjectSchema), z.lazy(() => WorkItemUncheckedUpdateWithoutBotInputObjectSchema)])
}).strict();
export const WorkItemUpdateWithWhereUniqueWithoutBotInputObjectSchema: z.ZodType<Prisma.WorkItemUpdateWithWhereUniqueWithoutBotInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemUpdateWithWhereUniqueWithoutBotInput>;
export const WorkItemUpdateWithWhereUniqueWithoutBotInputObjectZodSchema = makeSchema();
