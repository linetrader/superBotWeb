import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ReferralEdgeWhereUniqueInputObjectSchema as ReferralEdgeWhereUniqueInputObjectSchema } from './ReferralEdgeWhereUniqueInput.schema';
import { ReferralEdgeCreateWithoutParentInputObjectSchema as ReferralEdgeCreateWithoutParentInputObjectSchema } from './ReferralEdgeCreateWithoutParentInput.schema';
import { ReferralEdgeUncheckedCreateWithoutParentInputObjectSchema as ReferralEdgeUncheckedCreateWithoutParentInputObjectSchema } from './ReferralEdgeUncheckedCreateWithoutParentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReferralEdgeCreateWithoutParentInputObjectSchema), z.lazy(() => ReferralEdgeUncheckedCreateWithoutParentInputObjectSchema)])
}).strict();
export const ReferralEdgeCreateOrConnectWithoutParentInputObjectSchema: z.ZodType<Prisma.ReferralEdgeCreateOrConnectWithoutParentInput> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeCreateOrConnectWithoutParentInput>;
export const ReferralEdgeCreateOrConnectWithoutParentInputObjectZodSchema = makeSchema();
