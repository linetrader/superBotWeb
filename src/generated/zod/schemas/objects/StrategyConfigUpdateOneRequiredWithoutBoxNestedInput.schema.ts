import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigCreateWithoutBoxInputObjectSchema as StrategyConfigCreateWithoutBoxInputObjectSchema } from './StrategyConfigCreateWithoutBoxInput.schema';
import { StrategyConfigUncheckedCreateWithoutBoxInputObjectSchema as StrategyConfigUncheckedCreateWithoutBoxInputObjectSchema } from './StrategyConfigUncheckedCreateWithoutBoxInput.schema';
import { StrategyConfigCreateOrConnectWithoutBoxInputObjectSchema as StrategyConfigCreateOrConnectWithoutBoxInputObjectSchema } from './StrategyConfigCreateOrConnectWithoutBoxInput.schema';
import { StrategyConfigUpsertWithoutBoxInputObjectSchema as StrategyConfigUpsertWithoutBoxInputObjectSchema } from './StrategyConfigUpsertWithoutBoxInput.schema';
import { StrategyConfigWhereUniqueInputObjectSchema as StrategyConfigWhereUniqueInputObjectSchema } from './StrategyConfigWhereUniqueInput.schema';
import { StrategyConfigUpdateToOneWithWhereWithoutBoxInputObjectSchema as StrategyConfigUpdateToOneWithWhereWithoutBoxInputObjectSchema } from './StrategyConfigUpdateToOneWithWhereWithoutBoxInput.schema';
import { StrategyConfigUpdateWithoutBoxInputObjectSchema as StrategyConfigUpdateWithoutBoxInputObjectSchema } from './StrategyConfigUpdateWithoutBoxInput.schema';
import { StrategyConfigUncheckedUpdateWithoutBoxInputObjectSchema as StrategyConfigUncheckedUpdateWithoutBoxInputObjectSchema } from './StrategyConfigUncheckedUpdateWithoutBoxInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StrategyConfigCreateWithoutBoxInputObjectSchema), z.lazy(() => StrategyConfigUncheckedCreateWithoutBoxInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StrategyConfigCreateOrConnectWithoutBoxInputObjectSchema).optional(),
  upsert: z.lazy(() => StrategyConfigUpsertWithoutBoxInputObjectSchema).optional(),
  connect: z.lazy(() => StrategyConfigWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => StrategyConfigUpdateToOneWithWhereWithoutBoxInputObjectSchema), z.lazy(() => StrategyConfigUpdateWithoutBoxInputObjectSchema), z.lazy(() => StrategyConfigUncheckedUpdateWithoutBoxInputObjectSchema)]).optional()
}).strict();
export const StrategyConfigUpdateOneRequiredWithoutBoxNestedInputObjectSchema: z.ZodType<Prisma.StrategyConfigUpdateOneRequiredWithoutBoxNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigUpdateOneRequiredWithoutBoxNestedInput>;
export const StrategyConfigUpdateOneRequiredWithoutBoxNestedInputObjectZodSchema = makeSchema();
