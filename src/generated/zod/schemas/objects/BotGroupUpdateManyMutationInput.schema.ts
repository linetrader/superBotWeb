import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { GroupKeySchema } from '../enums/GroupKey.schema';
import { EnumGroupKeyFieldUpdateOperationsInputObjectSchema as EnumGroupKeyFieldUpdateOperationsInputObjectSchema } from './EnumGroupKeyFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  key: z.union([GroupKeySchema, z.lazy(() => EnumGroupKeyFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const BotGroupUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.BotGroupUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupUpdateManyMutationInput>;
export const BotGroupUpdateManyMutationInputObjectZodSchema = makeSchema();
