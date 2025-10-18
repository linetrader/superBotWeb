import * as z from 'zod';
export const ReferralEdgeUpsertResultSchema = z.object({
  id: z.string(),
  type: z.unknown(),
  parentId: z.string(),
  parent: z.unknown(),
  childId: z.string(),
  child: z.unknown(),
  position: z.number().int().optional(),
  groupNo: z.number().int().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
});