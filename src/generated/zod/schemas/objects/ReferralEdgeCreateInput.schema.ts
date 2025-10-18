import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { EdgeTypeSchema } from '../enums/EdgeType.schema';
import { UserCreateNestedOneWithoutDownlinesInputObjectSchema as UserCreateNestedOneWithoutDownlinesInputObjectSchema } from './UserCreateNestedOneWithoutDownlinesInput.schema';
import { UserCreateNestedOneWithoutUplinesInputObjectSchema as UserCreateNestedOneWithoutUplinesInputObjectSchema } from './UserCreateNestedOneWithoutUplinesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  type: EdgeTypeSchema,
  position: z.number().int().optional().nullable(),
  groupNo: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  parent: z.lazy(() => UserCreateNestedOneWithoutDownlinesInputObjectSchema),
  child: z.lazy(() => UserCreateNestedOneWithoutUplinesInputObjectSchema)
}).strict();
export const ReferralEdgeCreateInputObjectSchema: z.ZodType<Prisma.ReferralEdgeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeCreateInput>;
export const ReferralEdgeCreateInputObjectZodSchema = makeSchema();
