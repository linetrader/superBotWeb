import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigCreateWithoutTrendInputObjectSchema as StrategyConfigCreateWithoutTrendInputObjectSchema } from './StrategyConfigCreateWithoutTrendInput.schema';
import { StrategyConfigUncheckedCreateWithoutTrendInputObjectSchema as StrategyConfigUncheckedCreateWithoutTrendInputObjectSchema } from './StrategyConfigUncheckedCreateWithoutTrendInput.schema';
import { StrategyConfigCreateOrConnectWithoutTrendInputObjectSchema as StrategyConfigCreateOrConnectWithoutTrendInputObjectSchema } from './StrategyConfigCreateOrConnectWithoutTrendInput.schema';
import { StrategyConfigUpsertWithoutTrendInputObjectSchema as StrategyConfigUpsertWithoutTrendInputObjectSchema } from './StrategyConfigUpsertWithoutTrendInput.schema';
import { StrategyConfigWhereUniqueInputObjectSchema as StrategyConfigWhereUniqueInputObjectSchema } from './StrategyConfigWhereUniqueInput.schema';
import { StrategyConfigUpdateToOneWithWhereWithoutTrendInputObjectSchema as StrategyConfigUpdateToOneWithWhereWithoutTrendInputObjectSchema } from './StrategyConfigUpdateToOneWithWhereWithoutTrendInput.schema';
import { StrategyConfigUpdateWithoutTrendInputObjectSchema as StrategyConfigUpdateWithoutTrendInputObjectSchema } from './StrategyConfigUpdateWithoutTrendInput.schema';
import { StrategyConfigUncheckedUpdateWithoutTrendInputObjectSchema as StrategyConfigUncheckedUpdateWithoutTrendInputObjectSchema } from './StrategyConfigUncheckedUpdateWithoutTrendInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StrategyConfigCreateWithoutTrendInputObjectSchema), z.lazy(() => StrategyConfigUncheckedCreateWithoutTrendInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StrategyConfigCreateOrConnectWithoutTrendInputObjectSchema).optional(),
  upsert: z.lazy(() => StrategyConfigUpsertWithoutTrendInputObjectSchema).optional(),
  connect: z.lazy(() => StrategyConfigWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => StrategyConfigUpdateToOneWithWhereWithoutTrendInputObjectSchema), z.lazy(() => StrategyConfigUpdateWithoutTrendInputObjectSchema), z.lazy(() => StrategyConfigUncheckedUpdateWithoutTrendInputObjectSchema)]).optional()
}).strict();
export const StrategyConfigUpdateOneRequiredWithoutTrendNestedInputObjectSchema: z.ZodType<Prisma.StrategyConfigUpdateOneRequiredWithoutTrendNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigUpdateOneRequiredWithoutTrendNestedInput>;
export const StrategyConfigUpdateOneRequiredWithoutTrendNestedInputObjectZodSchema = makeSchema();
