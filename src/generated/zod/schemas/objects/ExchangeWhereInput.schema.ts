import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ExchangeMarketListRelationFilterObjectSchema as ExchangeMarketListRelationFilterObjectSchema } from './ExchangeMarketListRelationFilter.schema';
import { ExchangeCredentialListRelationFilterObjectSchema as ExchangeCredentialListRelationFilterObjectSchema } from './ExchangeCredentialListRelationFilter.schema'

const exchangewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ExchangeWhereInputObjectSchema), z.lazy(() => ExchangeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ExchangeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ExchangeWhereInputObjectSchema), z.lazy(() => ExchangeWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(20)]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional(),
  active: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  supportsFutures: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  markets: z.lazy(() => ExchangeMarketListRelationFilterObjectSchema).optional(),
  credentials: z.lazy(() => ExchangeCredentialListRelationFilterObjectSchema).optional()
}).strict();
export const ExchangeWhereInputObjectSchema: z.ZodType<Prisma.ExchangeWhereInput> = exchangewhereinputSchema as unknown as z.ZodType<Prisma.ExchangeWhereInput>;
export const ExchangeWhereInputObjectZodSchema = exchangewhereinputSchema;
