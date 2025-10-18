import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  parent: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  child: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const ReferralEdgeIncludeObjectSchema: z.ZodType<Prisma.ReferralEdgeInclude> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeInclude>;
export const ReferralEdgeIncludeObjectZodSchema = makeSchema();
