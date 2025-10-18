import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BoxStrategyCreateWithoutStrategyConfigInputObjectSchema as BoxStrategyCreateWithoutStrategyConfigInputObjectSchema } from './BoxStrategyCreateWithoutStrategyConfigInput.schema';
import { BoxStrategyUncheckedCreateWithoutStrategyConfigInputObjectSchema as BoxStrategyUncheckedCreateWithoutStrategyConfigInputObjectSchema } from './BoxStrategyUncheckedCreateWithoutStrategyConfigInput.schema';
import { BoxStrategyCreateOrConnectWithoutStrategyConfigInputObjectSchema as BoxStrategyCreateOrConnectWithoutStrategyConfigInputObjectSchema } from './BoxStrategyCreateOrConnectWithoutStrategyConfigInput.schema';
import { BoxStrategyWhereUniqueInputObjectSchema as BoxStrategyWhereUniqueInputObjectSchema } from './BoxStrategyWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BoxStrategyCreateWithoutStrategyConfigInputObjectSchema), z.lazy(() => BoxStrategyUncheckedCreateWithoutStrategyConfigInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BoxStrategyCreateOrConnectWithoutStrategyConfigInputObjectSchema).optional(),
  connect: z.lazy(() => BoxStrategyWhereUniqueInputObjectSchema).optional()
}).strict();
export const BoxStrategyUncheckedCreateNestedOneWithoutStrategyConfigInputObjectSchema: z.ZodType<Prisma.BoxStrategyUncheckedCreateNestedOneWithoutStrategyConfigInput> = makeSchema() as unknown as z.ZodType<Prisma.BoxStrategyUncheckedCreateNestedOneWithoutStrategyConfigInput>;
export const BoxStrategyUncheckedCreateNestedOneWithoutStrategyConfigInputObjectZodSchema = makeSchema();
