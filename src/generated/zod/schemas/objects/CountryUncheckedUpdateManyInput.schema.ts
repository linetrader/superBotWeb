import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  code: z.union([z.string().max(2), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CountryUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.CountryUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CountryUncheckedUpdateManyInput>;
export const CountryUncheckedUpdateManyInputObjectZodSchema = makeSchema();
