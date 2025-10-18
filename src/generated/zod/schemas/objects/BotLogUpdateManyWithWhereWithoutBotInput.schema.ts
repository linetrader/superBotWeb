import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotLogScalarWhereInputObjectSchema as BotLogScalarWhereInputObjectSchema } from './BotLogScalarWhereInput.schema';
import { BotLogUpdateManyMutationInputObjectSchema as BotLogUpdateManyMutationInputObjectSchema } from './BotLogUpdateManyMutationInput.schema';
import { BotLogUncheckedUpdateManyWithoutBotInputObjectSchema as BotLogUncheckedUpdateManyWithoutBotInputObjectSchema } from './BotLogUncheckedUpdateManyWithoutBotInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BotLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BotLogUpdateManyMutationInputObjectSchema), z.lazy(() => BotLogUncheckedUpdateManyWithoutBotInputObjectSchema)])
}).strict();
export const BotLogUpdateManyWithWhereWithoutBotInputObjectSchema: z.ZodType<Prisma.BotLogUpdateManyWithWhereWithoutBotInput> = makeSchema() as unknown as z.ZodType<Prisma.BotLogUpdateManyWithWhereWithoutBotInput>;
export const BotLogUpdateManyWithWhereWithoutBotInputObjectZodSchema = makeSchema();
