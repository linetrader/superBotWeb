import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { WorkItemSelectObjectSchema as WorkItemSelectObjectSchema } from './objects/WorkItemSelect.schema';
import { WorkItemIncludeObjectSchema as WorkItemIncludeObjectSchema } from './objects/WorkItemInclude.schema';
import { WorkItemWhereUniqueInputObjectSchema as WorkItemWhereUniqueInputObjectSchema } from './objects/WorkItemWhereUniqueInput.schema';

export const WorkItemFindUniqueOrThrowSchema: z.ZodType<Prisma.WorkItemFindUniqueOrThrowArgs> = z.object({ select: WorkItemSelectObjectSchema.optional(), include: WorkItemIncludeObjectSchema.optional(), where: WorkItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkItemFindUniqueOrThrowArgs>;

export const WorkItemFindUniqueOrThrowZodSchema = z.object({ select: WorkItemSelectObjectSchema.optional(), include: WorkItemIncludeObjectSchema.optional(), where: WorkItemWhereUniqueInputObjectSchema }).strict();