import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByRelationAggregateInputObjectSchema as UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  code: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  users: z.lazy(() => UserOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CountryOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CountryOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CountryOrderByWithRelationInput>;
export const CountryOrderByWithRelationInputObjectZodSchema = makeSchema();
