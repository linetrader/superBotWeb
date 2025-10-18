import * as z from 'zod';
export const ReferralEdgeFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});