import * as z from 'zod';

export const ReferralEdgeScalarFieldEnumSchema = z.enum(['id', 'type', 'parentId', 'childId', 'position', 'groupNo', 'createdAt', 'updatedAt'])

export type ReferralEdgeScalarFieldEnum = z.infer<typeof ReferralEdgeScalarFieldEnumSchema>;