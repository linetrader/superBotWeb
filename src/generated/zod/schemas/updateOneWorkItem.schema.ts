import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { WorkItemSelectObjectSchema as WorkItemSelectObjectSchema } from './objects/WorkItemSelect.schema';
import { WorkItemIncludeObjectSchema as WorkItemIncludeObjectSchema } from './objects/WorkItemInclude.schema';
import { WorkItemUpdateInputObjectSchema as WorkItemUpdateInputObjectSchema } from './objects/WorkItemUpdateInput.schema';
import { WorkItemUncheckedUpdateInputObjectSchema as WorkItemUncheckedUpdateInputObjectSchema } from './objects/WorkItemUncheckedUpdateInput.schema';
import { WorkItemWhereUniqueInputObjectSchema as WorkItemWhereUniqueInputObjectSchema } from './objects/WorkItemWhereUniqueInput.schema';

export const WorkItemUpdateOneSchema: z.ZodType<Prisma.WorkItemUpdateArgs> = z.object({ select: WorkItemSelectObjectSchema.optional(), include: WorkItemIncludeObjectSchema.optional(), data: z.union([WorkItemUpdateInputObjectSchema, WorkItemUncheckedUpdateInputObjectSchema]), where: WorkItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkItemUpdateArgs>;

export const WorkItemUpdateOneZodSchema = z.object({ select: WorkItemSelectObjectSchema.optional(), include: WorkItemIncludeObjectSchema.optional(), data: z.union([WorkItemUpdateInputObjectSchema, WorkItemUncheckedUpdateInputObjectSchema]), where: WorkItemWhereUniqueInputObjectSchema }).strict();