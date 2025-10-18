import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { WorkItemSelectObjectSchema as WorkItemSelectObjectSchema } from './objects/WorkItemSelect.schema';
import { WorkItemIncludeObjectSchema as WorkItemIncludeObjectSchema } from './objects/WorkItemInclude.schema';
import { WorkItemCreateInputObjectSchema as WorkItemCreateInputObjectSchema } from './objects/WorkItemCreateInput.schema';
import { WorkItemUncheckedCreateInputObjectSchema as WorkItemUncheckedCreateInputObjectSchema } from './objects/WorkItemUncheckedCreateInput.schema';

export const WorkItemCreateOneSchema: z.ZodType<Prisma.WorkItemCreateArgs> = z.object({ select: WorkItemSelectObjectSchema.optional(), include: WorkItemIncludeObjectSchema.optional(), data: z.union([WorkItemCreateInputObjectSchema, WorkItemUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.WorkItemCreateArgs>;

export const WorkItemCreateOneZodSchema = z.object({ select: WorkItemSelectObjectSchema.optional(), include: WorkItemIncludeObjectSchema.optional(), data: z.union([WorkItemCreateInputObjectSchema, WorkItemUncheckedCreateInputObjectSchema]) }).strict();