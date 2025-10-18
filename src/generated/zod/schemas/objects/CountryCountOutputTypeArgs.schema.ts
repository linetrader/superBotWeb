import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CountryCountOutputTypeSelectObjectSchema as CountryCountOutputTypeSelectObjectSchema } from './CountryCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CountryCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const CountryCountOutputTypeArgsObjectSchema = makeSchema();
export const CountryCountOutputTypeArgsObjectZodSchema = makeSchema();
