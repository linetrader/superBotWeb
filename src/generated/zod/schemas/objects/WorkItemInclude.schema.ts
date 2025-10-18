import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotArgsObjectSchema as TradingBotArgsObjectSchema } from './TradingBotArgs.schema';
import { WorkAttemptFindManySchema as WorkAttemptFindManySchema } from '../findManyWorkAttempt.schema';
import { WorkItemCountOutputTypeArgsObjectSchema as WorkItemCountOutputTypeArgsObjectSchema } from './WorkItemCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  bot: z.union([z.boolean(), z.lazy(() => TradingBotArgsObjectSchema)]).optional(),
  runs: z.union([z.boolean(), z.lazy(() => WorkAttemptFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => WorkItemCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const WorkItemIncludeObjectSchema: z.ZodType<Prisma.WorkItemInclude> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemInclude>;
export const WorkItemIncludeObjectZodSchema = makeSchema();
