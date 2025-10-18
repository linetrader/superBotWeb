import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { MarketKindSchema } from '../enums/MarketKind.schema'

const makeSchema = () => z.object({
  set: MarketKindSchema.optional()
}).strict();
export const NullableEnumMarketKindFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumMarketKindFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumMarketKindFieldUpdateOperationsInput>;
export const NullableEnumMarketKindFieldUpdateOperationsInputObjectZodSchema = makeSchema();
