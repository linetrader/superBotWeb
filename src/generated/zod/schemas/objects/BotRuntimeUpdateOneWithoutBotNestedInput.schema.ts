import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotRuntimeCreateWithoutBotInputObjectSchema as BotRuntimeCreateWithoutBotInputObjectSchema } from './BotRuntimeCreateWithoutBotInput.schema';
import { BotRuntimeUncheckedCreateWithoutBotInputObjectSchema as BotRuntimeUncheckedCreateWithoutBotInputObjectSchema } from './BotRuntimeUncheckedCreateWithoutBotInput.schema';
import { BotRuntimeCreateOrConnectWithoutBotInputObjectSchema as BotRuntimeCreateOrConnectWithoutBotInputObjectSchema } from './BotRuntimeCreateOrConnectWithoutBotInput.schema';
import { BotRuntimeUpsertWithoutBotInputObjectSchema as BotRuntimeUpsertWithoutBotInputObjectSchema } from './BotRuntimeUpsertWithoutBotInput.schema';
import { BotRuntimeWhereInputObjectSchema as BotRuntimeWhereInputObjectSchema } from './BotRuntimeWhereInput.schema';
import { BotRuntimeWhereUniqueInputObjectSchema as BotRuntimeWhereUniqueInputObjectSchema } from './BotRuntimeWhereUniqueInput.schema';
import { BotRuntimeUpdateToOneWithWhereWithoutBotInputObjectSchema as BotRuntimeUpdateToOneWithWhereWithoutBotInputObjectSchema } from './BotRuntimeUpdateToOneWithWhereWithoutBotInput.schema';
import { BotRuntimeUpdateWithoutBotInputObjectSchema as BotRuntimeUpdateWithoutBotInputObjectSchema } from './BotRuntimeUpdateWithoutBotInput.schema';
import { BotRuntimeUncheckedUpdateWithoutBotInputObjectSchema as BotRuntimeUncheckedUpdateWithoutBotInputObjectSchema } from './BotRuntimeUncheckedUpdateWithoutBotInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BotRuntimeCreateWithoutBotInputObjectSchema), z.lazy(() => BotRuntimeUncheckedCreateWithoutBotInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BotRuntimeCreateOrConnectWithoutBotInputObjectSchema).optional(),
  upsert: z.lazy(() => BotRuntimeUpsertWithoutBotInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => BotRuntimeWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => BotRuntimeWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => BotRuntimeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => BotRuntimeUpdateToOneWithWhereWithoutBotInputObjectSchema), z.lazy(() => BotRuntimeUpdateWithoutBotInputObjectSchema), z.lazy(() => BotRuntimeUncheckedUpdateWithoutBotInputObjectSchema)]).optional()
}).strict();
export const BotRuntimeUpdateOneWithoutBotNestedInputObjectSchema: z.ZodType<Prisma.BotRuntimeUpdateOneWithoutBotNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BotRuntimeUpdateOneWithoutBotNestedInput>;
export const BotRuntimeUpdateOneWithoutBotNestedInputObjectZodSchema = makeSchema();
