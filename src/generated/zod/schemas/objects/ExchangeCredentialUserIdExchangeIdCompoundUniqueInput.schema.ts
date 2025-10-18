import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  userId: z.string(),
  exchangeId: z.string()
}).strict();
export const ExchangeCredentialUserIdExchangeIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialUserIdExchangeIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialUserIdExchangeIdCompoundUniqueInput>;
export const ExchangeCredentialUserIdExchangeIdCompoundUniqueInputObjectZodSchema = makeSchema();
