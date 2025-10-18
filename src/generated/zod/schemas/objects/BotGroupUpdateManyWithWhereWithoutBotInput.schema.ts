import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupScalarWhereInputObjectSchema as BotGroupScalarWhereInputObjectSchema } from './BotGroupScalarWhereInput.schema';
import { BotGroupUpdateManyMutationInputObjectSchema as BotGroupUpdateManyMutationInputObjectSchema } from './BotGroupUpdateManyMutationInput.schema';
import { BotGroupUncheckedUpdateManyWithoutBotInputObjectSchema as BotGroupUncheckedUpdateManyWithoutBotInputObjectSchema } from './BotGroupUncheckedUpdateManyWithoutBotInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BotGroupScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BotGroupUpdateManyMutationInputObjectSchema), z.lazy(() => BotGroupUncheckedUpdateManyWithoutBotInputObjectSchema)])
}).strict();
export const BotGroupUpdateManyWithWhereWithoutBotInputObjectSchema: z.ZodType<Prisma.BotGroupUpdateManyWithWhereWithoutBotInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupUpdateManyWithWhereWithoutBotInput>;
export const BotGroupUpdateManyWithWhereWithoutBotInputObjectZodSchema = makeSchema();
