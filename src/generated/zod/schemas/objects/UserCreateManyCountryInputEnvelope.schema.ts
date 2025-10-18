import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateManyCountryInputObjectSchema as UserCreateManyCountryInputObjectSchema } from './UserCreateManyCountryInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => UserCreateManyCountryInputObjectSchema), z.lazy(() => UserCreateManyCountryInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UserCreateManyCountryInputEnvelopeObjectSchema: z.ZodType<Prisma.UserCreateManyCountryInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateManyCountryInputEnvelope>;
export const UserCreateManyCountryInputEnvelopeObjectZodSchema = makeSchema();
