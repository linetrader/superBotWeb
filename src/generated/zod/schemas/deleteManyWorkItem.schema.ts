import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { WorkItemWhereInputObjectSchema as WorkItemWhereInputObjectSchema } from './objects/WorkItemWhereInput.schema';

export const WorkItemDeleteManySchema: z.ZodType<Prisma.WorkItemDeleteManyArgs> = z.object({ where: WorkItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkItemDeleteManyArgs>;

export const WorkItemDeleteManyZodSchema = z.object({ where: WorkItemWhereInputObjectSchema.optional() }).strict();