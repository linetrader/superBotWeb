import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyKindSchema } from '../enums/StrategyKind.schema'

const makeSchema = () => z.object({
  set: StrategyKindSchema.optional()
}).strict();
export const EnumStrategyKindFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumStrategyKindFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumStrategyKindFieldUpdateOperationsInput>;
export const EnumStrategyKindFieldUpdateOperationsInputObjectZodSchema = makeSchema();
