import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BoxStrategyCreateWithoutStrategyConfigInputObjectSchema as BoxStrategyCreateWithoutStrategyConfigInputObjectSchema } from './BoxStrategyCreateWithoutStrategyConfigInput.schema';
import { BoxStrategyUncheckedCreateWithoutStrategyConfigInputObjectSchema as BoxStrategyUncheckedCreateWithoutStrategyConfigInputObjectSchema } from './BoxStrategyUncheckedCreateWithoutStrategyConfigInput.schema';
import { BoxStrategyCreateOrConnectWithoutStrategyConfigInputObjectSchema as BoxStrategyCreateOrConnectWithoutStrategyConfigInputObjectSchema } from './BoxStrategyCreateOrConnectWithoutStrategyConfigInput.schema';
import { BoxStrategyUpsertWithoutStrategyConfigInputObjectSchema as BoxStrategyUpsertWithoutStrategyConfigInputObjectSchema } from './BoxStrategyUpsertWithoutStrategyConfigInput.schema';
import { BoxStrategyWhereInputObjectSchema as BoxStrategyWhereInputObjectSchema } from './BoxStrategyWhereInput.schema';
import { BoxStrategyWhereUniqueInputObjectSchema as BoxStrategyWhereUniqueInputObjectSchema } from './BoxStrategyWhereUniqueInput.schema';
import { BoxStrategyUpdateToOneWithWhereWithoutStrategyConfigInputObjectSchema as BoxStrategyUpdateToOneWithWhereWithoutStrategyConfigInputObjectSchema } from './BoxStrategyUpdateToOneWithWhereWithoutStrategyConfigInput.schema';
import { BoxStrategyUpdateWithoutStrategyConfigInputObjectSchema as BoxStrategyUpdateWithoutStrategyConfigInputObjectSchema } from './BoxStrategyUpdateWithoutStrategyConfigInput.schema';
import { BoxStrategyUncheckedUpdateWithoutStrategyConfigInputObjectSchema as BoxStrategyUncheckedUpdateWithoutStrategyConfigInputObjectSchema } from './BoxStrategyUncheckedUpdateWithoutStrategyConfigInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BoxStrategyCreateWithoutStrategyConfigInputObjectSchema), z.lazy(() => BoxStrategyUncheckedCreateWithoutStrategyConfigInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BoxStrategyCreateOrConnectWithoutStrategyConfigInputObjectSchema).optional(),
  upsert: z.lazy(() => BoxStrategyUpsertWithoutStrategyConfigInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => BoxStrategyWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => BoxStrategyWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => BoxStrategyWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => BoxStrategyUpdateToOneWithWhereWithoutStrategyConfigInputObjectSchema), z.lazy(() => BoxStrategyUpdateWithoutStrategyConfigInputObjectSchema), z.lazy(() => BoxStrategyUncheckedUpdateWithoutStrategyConfigInputObjectSchema)]).optional()
}).strict();
export const BoxStrategyUpdateOneWithoutStrategyConfigNestedInputObjectSchema: z.ZodType<Prisma.BoxStrategyUpdateOneWithoutStrategyConfigNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BoxStrategyUpdateOneWithoutStrategyConfigNestedInput>;
export const BoxStrategyUpdateOneWithoutStrategyConfigNestedInputObjectZodSchema = makeSchema();
