import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserFindManySchema as UserFindManySchema } from '../findManyUser.schema';
import { CountryCountOutputTypeArgsObjectSchema as CountryCountOutputTypeArgsObjectSchema } from './CountryCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CountryCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CountryIncludeObjectSchema: z.ZodType<Prisma.CountryInclude> = makeSchema() as unknown as z.ZodType<Prisma.CountryInclude>;
export const CountryIncludeObjectZodSchema = makeSchema();
