import * as z from 'zod';
export const ReferralEdgeAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    type: z.number(),
    parentId: z.number(),
    parent: z.number(),
    childId: z.number(),
    child: z.number(),
    position: z.number(),
    groupNo: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    position: z.number().nullable(),
    groupNo: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    position: z.number().nullable(),
    groupNo: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    parentId: z.string().nullable(),
    childId: z.string().nullable(),
    position: z.number().int().nullable(),
    groupNo: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    parentId: z.string().nullable(),
    childId: z.string().nullable(),
    position: z.number().int().nullable(),
    groupNo: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});