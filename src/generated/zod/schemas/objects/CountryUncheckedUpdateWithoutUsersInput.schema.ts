import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CountryUncheckedUpdateWithoutUsersInputObjectSchema: z.ZodType<Prisma.CountryUncheckedUpdateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.CountryUncheckedUpdateWithoutUsersInput>;
export const CountryUncheckedUpdateWithoutUsersInputObjectZodSchema = makeSchema();
