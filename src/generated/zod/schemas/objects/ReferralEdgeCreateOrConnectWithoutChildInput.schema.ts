import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ReferralEdgeWhereUniqueInputObjectSchema as ReferralEdgeWhereUniqueInputObjectSchema } from './ReferralEdgeWhereUniqueInput.schema';
import { ReferralEdgeCreateWithoutChildInputObjectSchema as ReferralEdgeCreateWithoutChildInputObjectSchema } from './ReferralEdgeCreateWithoutChildInput.schema';
import { ReferralEdgeUncheckedCreateWithoutChildInputObjectSchema as ReferralEdgeUncheckedCreateWithoutChildInputObjectSchema } from './ReferralEdgeUncheckedCreateWithoutChildInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReferralEdgeCreateWithoutChildInputObjectSchema), z.lazy(() => ReferralEdgeUncheckedCreateWithoutChildInputObjectSchema)])
}).strict();
export const ReferralEdgeCreateOrConnectWithoutChildInputObjectSchema: z.ZodType<Prisma.ReferralEdgeCreateOrConnectWithoutChildInput> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeCreateOrConnectWithoutChildInput>;
export const ReferralEdgeCreateOrConnectWithoutChildInputObjectZodSchema = makeSchema();
