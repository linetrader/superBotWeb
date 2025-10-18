import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ReferralEdgeScalarWhereInputObjectSchema as ReferralEdgeScalarWhereInputObjectSchema } from './ReferralEdgeScalarWhereInput.schema';
import { ReferralEdgeUpdateManyMutationInputObjectSchema as ReferralEdgeUpdateManyMutationInputObjectSchema } from './ReferralEdgeUpdateManyMutationInput.schema';
import { ReferralEdgeUncheckedUpdateManyWithoutChildInputObjectSchema as ReferralEdgeUncheckedUpdateManyWithoutChildInputObjectSchema } from './ReferralEdgeUncheckedUpdateManyWithoutChildInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReferralEdgeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReferralEdgeUpdateManyMutationInputObjectSchema), z.lazy(() => ReferralEdgeUncheckedUpdateManyWithoutChildInputObjectSchema)])
}).strict();
export const ReferralEdgeUpdateManyWithWhereWithoutChildInputObjectSchema: z.ZodType<Prisma.ReferralEdgeUpdateManyWithWhereWithoutChildInput> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeUpdateManyWithWhereWithoutChildInput>;
export const ReferralEdgeUpdateManyWithWhereWithoutChildInputObjectZodSchema = makeSchema();
