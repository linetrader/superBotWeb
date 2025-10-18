import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string().max(20),
  name: z.string().max(50),
  active: z.boolean().optional(),
  supportsFutures: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ExchangeCreateManyInputObjectSchema: z.ZodType<Prisma.ExchangeCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCreateManyInput>;
export const ExchangeCreateManyInputObjectZodSchema = makeSchema();
