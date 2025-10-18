import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkAttemptWhereUniqueInputObjectSchema as WorkAttemptWhereUniqueInputObjectSchema } from './WorkAttemptWhereUniqueInput.schema';
import { WorkAttemptUpdateWithoutWorkItemInputObjectSchema as WorkAttemptUpdateWithoutWorkItemInputObjectSchema } from './WorkAttemptUpdateWithoutWorkItemInput.schema';
import { WorkAttemptUncheckedUpdateWithoutWorkItemInputObjectSchema as WorkAttemptUncheckedUpdateWithoutWorkItemInputObjectSchema } from './WorkAttemptUncheckedUpdateWithoutWorkItemInput.schema';
import { WorkAttemptCreateWithoutWorkItemInputObjectSchema as WorkAttemptCreateWithoutWorkItemInputObjectSchema } from './WorkAttemptCreateWithoutWorkItemInput.schema';
import { WorkAttemptUncheckedCreateWithoutWorkItemInputObjectSchema as WorkAttemptUncheckedCreateWithoutWorkItemInputObjectSchema } from './WorkAttemptUncheckedCreateWithoutWorkItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkAttemptWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => WorkAttemptUpdateWithoutWorkItemInputObjectSchema), z.lazy(() => WorkAttemptUncheckedUpdateWithoutWorkItemInputObjectSchema)]),
  create: z.union([z.lazy(() => WorkAttemptCreateWithoutWorkItemInputObjectSchema), z.lazy(() => WorkAttemptUncheckedCreateWithoutWorkItemInputObjectSchema)])
}).strict();
export const WorkAttemptUpsertWithWhereUniqueWithoutWorkItemInputObjectSchema: z.ZodType<Prisma.WorkAttemptUpsertWithWhereUniqueWithoutWorkItemInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkAttemptUpsertWithWhereUniqueWithoutWorkItemInput>;
export const WorkAttemptUpsertWithWhereUniqueWithoutWorkItemInputObjectZodSchema = makeSchema();
