import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { EdgeTypeSchema } from '../enums/EdgeType.schema';
import { UserCreateNestedOneWithoutDownlinesInputObjectSchema as UserCreateNestedOneWithoutDownlinesInputObjectSchema } from './UserCreateNestedOneWithoutDownlinesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  type: EdgeTypeSchema,
  position: z.number().int().optional().nullable(),
  groupNo: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  parent: z.lazy(() => UserCreateNestedOneWithoutDownlinesInputObjectSchema)
}).strict();
export const ReferralEdgeCreateWithoutChildInputObjectSchema: z.ZodType<Prisma.ReferralEdgeCreateWithoutChildInput> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeCreateWithoutChildInput>;
export const ReferralEdgeCreateWithoutChildInputObjectZodSchema = makeSchema();
