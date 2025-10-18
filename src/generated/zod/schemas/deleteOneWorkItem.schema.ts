import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { WorkItemSelectObjectSchema as WorkItemSelectObjectSchema } from './objects/WorkItemSelect.schema';
import { WorkItemIncludeObjectSchema as WorkItemIncludeObjectSchema } from './objects/WorkItemInclude.schema';
import { WorkItemWhereUniqueInputObjectSchema as WorkItemWhereUniqueInputObjectSchema } from './objects/WorkItemWhereUniqueInput.schema';

export const WorkItemDeleteOneSchema: z.ZodType<Prisma.WorkItemDeleteArgs> = z.object({ select: WorkItemSelectObjectSchema.optional(), include: WorkItemIncludeObjectSchema.optional(), where: WorkItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkItemDeleteArgs>;

export const WorkItemDeleteOneZodSchema = z.object({ select: WorkItemSelectObjectSchema.optional(), include: WorkItemIncludeObjectSchema.optional(), where: WorkItemWhereUniqueInputObjectSchema }).strict();