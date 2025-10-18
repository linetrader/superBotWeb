import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { WorkItemSelectObjectSchema as WorkItemSelectObjectSchema } from './objects/WorkItemSelect.schema';
import { WorkItemIncludeObjectSchema as WorkItemIncludeObjectSchema } from './objects/WorkItemInclude.schema';
import { WorkItemWhereUniqueInputObjectSchema as WorkItemWhereUniqueInputObjectSchema } from './objects/WorkItemWhereUniqueInput.schema';
import { WorkItemCreateInputObjectSchema as WorkItemCreateInputObjectSchema } from './objects/WorkItemCreateInput.schema';
import { WorkItemUncheckedCreateInputObjectSchema as WorkItemUncheckedCreateInputObjectSchema } from './objects/WorkItemUncheckedCreateInput.schema';
import { WorkItemUpdateInputObjectSchema as WorkItemUpdateInputObjectSchema } from './objects/WorkItemUpdateInput.schema';
import { WorkItemUncheckedUpdateInputObjectSchema as WorkItemUncheckedUpdateInputObjectSchema } from './objects/WorkItemUncheckedUpdateInput.schema';

export const WorkItemUpsertOneSchema: z.ZodType<Prisma.WorkItemUpsertArgs> = z.object({ select: WorkItemSelectObjectSchema.optional(), include: WorkItemIncludeObjectSchema.optional(), where: WorkItemWhereUniqueInputObjectSchema, create: z.union([ WorkItemCreateInputObjectSchema, WorkItemUncheckedCreateInputObjectSchema ]), update: z.union([ WorkItemUpdateInputObjectSchema, WorkItemUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.WorkItemUpsertArgs>;

export const WorkItemUpsertOneZodSchema = z.object({ select: WorkItemSelectObjectSchema.optional(), include: WorkItemIncludeObjectSchema.optional(), where: WorkItemWhereUniqueInputObjectSchema, create: z.union([ WorkItemCreateInputObjectSchema, WorkItemUncheckedCreateInputObjectSchema ]), update: z.union([ WorkItemUpdateInputObjectSchema, WorkItemUncheckedUpdateInputObjectSchema ]) }).strict();