import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { WorkItemSelectObjectSchema as WorkItemSelectObjectSchema } from './objects/WorkItemSelect.schema';
import { WorkItemUpdateManyMutationInputObjectSchema as WorkItemUpdateManyMutationInputObjectSchema } from './objects/WorkItemUpdateManyMutationInput.schema';
import { WorkItemWhereInputObjectSchema as WorkItemWhereInputObjectSchema } from './objects/WorkItemWhereInput.schema';

export const WorkItemUpdateManyAndReturnSchema: z.ZodType<Prisma.WorkItemUpdateManyAndReturnArgs> = z.object({ select: WorkItemSelectObjectSchema.optional(), data: WorkItemUpdateManyMutationInputObjectSchema, where: WorkItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkItemUpdateManyAndReturnArgs>;

export const WorkItemUpdateManyAndReturnZodSchema = z.object({ select: WorkItemSelectObjectSchema.optional(), data: WorkItemUpdateManyMutationInputObjectSchema, where: WorkItemWhereInputObjectSchema.optional() }).strict();