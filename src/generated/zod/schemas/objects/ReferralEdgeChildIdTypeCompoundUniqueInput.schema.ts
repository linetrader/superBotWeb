import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { EdgeTypeSchema } from '../enums/EdgeType.schema'

const makeSchema = () => z.object({
  childId: z.string(),
  type: EdgeTypeSchema
}).strict();
export const ReferralEdgeChildIdTypeCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ReferralEdgeChildIdTypeCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeChildIdTypeCompoundUniqueInput>;
export const ReferralEdgeChildIdTypeCompoundUniqueInputObjectZodSchema = makeSchema();
