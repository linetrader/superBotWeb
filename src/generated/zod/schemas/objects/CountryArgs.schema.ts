import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CountrySelectObjectSchema as CountrySelectObjectSchema } from './CountrySelect.schema';
import { CountryIncludeObjectSchema as CountryIncludeObjectSchema } from './CountryInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CountrySelectObjectSchema).optional(),
  include: z.lazy(() => CountryIncludeObjectSchema).optional()
}).strict();
export const CountryArgsObjectSchema = makeSchema();
export const CountryArgsObjectZodSchema = makeSchema();
