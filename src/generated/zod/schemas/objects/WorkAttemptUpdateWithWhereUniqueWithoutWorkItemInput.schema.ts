import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkAttemptWhereUniqueInputObjectSchema as WorkAttemptWhereUniqueInputObjectSchema } from './WorkAttemptWhereUniqueInput.schema';
import { WorkAttemptUpdateWithoutWorkItemInputObjectSchema as WorkAttemptUpdateWithoutWorkItemInputObjectSchema } from './WorkAttemptUpdateWithoutWorkItemInput.schema';
import { WorkAttemptUncheckedUpdateWithoutWorkItemInputObjectSchema as WorkAttemptUncheckedUpdateWithoutWorkItemInputObjectSchema } from './WorkAttemptUncheckedUpdateWithoutWorkItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkAttemptWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => WorkAttemptUpdateWithoutWorkItemInputObjectSchema), z.lazy(() => WorkAttemptUncheckedUpdateWithoutWorkItemInputObjectSchema)])
}).strict();
export const WorkAttemptUpdateWithWhereUniqueWithoutWorkItemInputObjectSchema: z.ZodType<Prisma.WorkAttemptUpdateWithWhereUniqueWithoutWorkItemInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkAttemptUpdateWithWhereUniqueWithoutWorkItemInput>;
export const WorkAttemptUpdateWithWhereUniqueWithoutWorkItemInputObjectZodSchema = makeSchema();
