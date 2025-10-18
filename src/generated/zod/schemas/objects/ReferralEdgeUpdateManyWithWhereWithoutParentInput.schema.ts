import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ReferralEdgeScalarWhereInputObjectSchema as ReferralEdgeScalarWhereInputObjectSchema } from './ReferralEdgeScalarWhereInput.schema';
import { ReferralEdgeUpdateManyMutationInputObjectSchema as ReferralEdgeUpdateManyMutationInputObjectSchema } from './ReferralEdgeUpdateManyMutationInput.schema';
import { ReferralEdgeUncheckedUpdateManyWithoutParentInputObjectSchema as ReferralEdgeUncheckedUpdateManyWithoutParentInputObjectSchema } from './ReferralEdgeUncheckedUpdateManyWithoutParentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReferralEdgeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReferralEdgeUpdateManyMutationInputObjectSchema), z.lazy(() => ReferralEdgeUncheckedUpdateManyWithoutParentInputObjectSchema)])
}).strict();
export const ReferralEdgeUpdateManyWithWhereWithoutParentInputObjectSchema: z.ZodType<Prisma.ReferralEdgeUpdateManyWithWhereWithoutParentInput> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeUpdateManyWithWhereWithoutParentInput>;
export const ReferralEdgeUpdateManyWithWhereWithoutParentInputObjectZodSchema = makeSchema();
