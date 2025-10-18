import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateManyWithoutCountryNestedInputObjectSchema as UserUpdateManyWithoutCountryNestedInputObjectSchema } from './UserUpdateManyWithoutCountryNestedInput.schema'

const makeSchema = () => z.object({
  code: z.union([z.string().max(2), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  users: z.lazy(() => UserUpdateManyWithoutCountryNestedInputObjectSchema).optional()
}).strict();
export const CountryUpdateInputObjectSchema: z.ZodType<Prisma.CountryUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CountryUpdateInput>;
export const CountryUpdateInputObjectZodSchema = makeSchema();
