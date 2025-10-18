import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedManyWithoutCountryInputObjectSchema as UserCreateNestedManyWithoutCountryInputObjectSchema } from './UserCreateNestedManyWithoutCountryInput.schema'

const makeSchema = () => z.object({
  code: z.string().max(2),
  name: z.string(),
  users: z.lazy(() => UserCreateNestedManyWithoutCountryInputObjectSchema)
}).strict();
export const CountryCreateInputObjectSchema: z.ZodType<Prisma.CountryCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CountryCreateInput>;
export const CountryCreateInputObjectZodSchema = makeSchema();
