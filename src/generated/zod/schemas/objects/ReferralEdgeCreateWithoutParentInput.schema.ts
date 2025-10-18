import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { EdgeTypeSchema } from '../enums/EdgeType.schema';
import { UserCreateNestedOneWithoutUplinesInputObjectSchema as UserCreateNestedOneWithoutUplinesInputObjectSchema } from './UserCreateNestedOneWithoutUplinesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  type: EdgeTypeSchema,
  position: z.number().int().optional().nullable(),
  groupNo: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  child: z.lazy(() => UserCreateNestedOneWithoutUplinesInputObjectSchema)
}).strict();
export const ReferralEdgeCreateWithoutParentInputObjectSchema: z.ZodType<Prisma.ReferralEdgeCreateWithoutParentInput> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeCreateWithoutParentInput>;
export const ReferralEdgeCreateWithoutParentInputObjectZodSchema = makeSchema();
