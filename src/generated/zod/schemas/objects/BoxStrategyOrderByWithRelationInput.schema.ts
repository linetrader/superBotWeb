import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { StrategyConfigOrderByWithRelationInputObjectSchema as StrategyConfigOrderByWithRelationInputObjectSchema } from './StrategyConfigOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  strategyConfigId: SortOrderSchema.optional(),
  lowerTh: SortOrderSchema.optional(),
  upperTh: SortOrderSchema.optional(),
  boxTouchPct: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  strategyConfig: z.lazy(() => StrategyConfigOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const BoxStrategyOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.BoxStrategyOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.BoxStrategyOrderByWithRelationInput>;
export const BoxStrategyOrderByWithRelationInputObjectZodSchema = makeSchema();
