import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { WorkItemUpdateManyMutationInputObjectSchema as WorkItemUpdateManyMutationInputObjectSchema } from './objects/WorkItemUpdateManyMutationInput.schema';
import { WorkItemWhereInputObjectSchema as WorkItemWhereInputObjectSchema } from './objects/WorkItemWhereInput.schema';

export const WorkItemUpdateManySchema: z.ZodType<Prisma.WorkItemUpdateManyArgs> = z.object({ data: WorkItemUpdateManyMutationInputObjectSchema, where: WorkItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkItemUpdateManyArgs>;

export const WorkItemUpdateManyZodSchema = z.object({ data: WorkItemUpdateManyMutationInputObjectSchema, where: WorkItemWhereInputObjectSchema.optional() }).strict();