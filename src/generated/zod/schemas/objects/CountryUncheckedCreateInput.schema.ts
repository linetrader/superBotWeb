import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUncheckedCreateNestedManyWithoutCountryInputObjectSchema as UserUncheckedCreateNestedManyWithoutCountryInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutCountryInput.schema'

const makeSchema = () => z.object({
  code: z.string().max(2),
  name: z.string(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutCountryInputObjectSchema)
}).strict();
export const CountryUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CountryUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CountryUncheckedCreateInput>;
export const CountryUncheckedCreateInputObjectZodSchema = makeSchema();
