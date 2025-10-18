import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BoxStrategyWhereUniqueInputObjectSchema as BoxStrategyWhereUniqueInputObjectSchema } from './BoxStrategyWhereUniqueInput.schema';
import { BoxStrategyCreateWithoutStrategyConfigInputObjectSchema as BoxStrategyCreateWithoutStrategyConfigInputObjectSchema } from './BoxStrategyCreateWithoutStrategyConfigInput.schema';
import { BoxStrategyUncheckedCreateWithoutStrategyConfigInputObjectSchema as BoxStrategyUncheckedCreateWithoutStrategyConfigInputObjectSchema } from './BoxStrategyUncheckedCreateWithoutStrategyConfigInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BoxStrategyWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BoxStrategyCreateWithoutStrategyConfigInputObjectSchema), z.lazy(() => BoxStrategyUncheckedCreateWithoutStrategyConfigInputObjectSchema)])
}).strict();
export const BoxStrategyCreateOrConnectWithoutStrategyConfigInputObjectSchema: z.ZodType<Prisma.BoxStrategyCreateOrConnectWithoutStrategyConfigInput> = makeSchema() as unknown as z.ZodType<Prisma.BoxStrategyCreateOrConnectWithoutStrategyConfigInput>;
export const BoxStrategyCreateOrConnectWithoutStrategyConfigInputObjectZodSchema = makeSchema();
