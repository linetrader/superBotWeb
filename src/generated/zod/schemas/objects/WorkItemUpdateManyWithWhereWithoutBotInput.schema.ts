import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkItemScalarWhereInputObjectSchema as WorkItemScalarWhereInputObjectSchema } from './WorkItemScalarWhereInput.schema';
import { WorkItemUpdateManyMutationInputObjectSchema as WorkItemUpdateManyMutationInputObjectSchema } from './WorkItemUpdateManyMutationInput.schema';
import { WorkItemUncheckedUpdateManyWithoutBotInputObjectSchema as WorkItemUncheckedUpdateManyWithoutBotInputObjectSchema } from './WorkItemUncheckedUpdateManyWithoutBotInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => WorkItemUpdateManyMutationInputObjectSchema), z.lazy(() => WorkItemUncheckedUpdateManyWithoutBotInputObjectSchema)])
}).strict();
export const WorkItemUpdateManyWithWhereWithoutBotInputObjectSchema: z.ZodType<Prisma.WorkItemUpdateManyWithWhereWithoutBotInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemUpdateManyWithWhereWithoutBotInput>;
export const WorkItemUpdateManyWithWhereWithoutBotInputObjectZodSchema = makeSchema();
