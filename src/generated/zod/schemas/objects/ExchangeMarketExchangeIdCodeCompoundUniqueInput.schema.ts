import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  exchangeId: z.string(),
  code: z.string()
}).strict();
export const ExchangeMarketExchangeIdCodeCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ExchangeMarketExchangeIdCodeCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketExchangeIdCodeCompoundUniqueInput>;
export const ExchangeMarketExchangeIdCodeCompoundUniqueInputObjectZodSchema = makeSchema();
