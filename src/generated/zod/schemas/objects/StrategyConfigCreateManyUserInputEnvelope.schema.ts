import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigCreateManyUserInputObjectSchema as StrategyConfigCreateManyUserInputObjectSchema } from './StrategyConfigCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => StrategyConfigCreateManyUserInputObjectSchema), z.lazy(() => StrategyConfigCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const StrategyConfigCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.StrategyConfigCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigCreateManyUserInputEnvelope>;
export const StrategyConfigCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
