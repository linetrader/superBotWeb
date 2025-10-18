import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUncheckedUpdateManyWithoutCountryNestedInputObjectSchema as UserUncheckedUpdateManyWithoutCountryNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutCountryNestedInput.schema'

const makeSchema = () => z.object({
  code: z.union([z.string().max(2), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  users: z.lazy(() => UserUncheckedUpdateManyWithoutCountryNestedInputObjectSchema).optional()
}).strict();
export const CountryUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.CountryUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CountryUncheckedUpdateInput>;
export const CountryUncheckedUpdateInputObjectZodSchema = makeSchema();
