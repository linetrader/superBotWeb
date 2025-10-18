import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserFindManySchema as UserFindManySchema } from '../findManyUser.schema';
import { CountryCountOutputTypeArgsObjectSchema as CountryCountOutputTypeArgsObjectSchema } from './CountryCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  code: z.boolean().optional(),
  name: z.boolean().optional(),
  users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CountryCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CountrySelectObjectSchema: z.ZodType<Prisma.CountrySelect> = makeSchema() as unknown as z.ZodType<Prisma.CountrySelect>;
export const CountrySelectObjectZodSchema = makeSchema();
