import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CountryOrderByWithRelationInputObjectSchema as CountryOrderByWithRelationInputObjectSchema } from './CountryOrderByWithRelationInput.schema';
import { ReferralEdgeOrderByRelationAggregateInputObjectSchema as ReferralEdgeOrderByRelationAggregateInputObjectSchema } from './ReferralEdgeOrderByRelationAggregateInput.schema';
import { UserInfoOrderByWithRelationInputObjectSchema as UserInfoOrderByWithRelationInputObjectSchema } from './UserInfoOrderByWithRelationInput.schema';
import { UserWalletOrderByWithRelationInputObjectSchema as UserWalletOrderByWithRelationInputObjectSchema } from './UserWalletOrderByWithRelationInput.schema';
import { ExchangeCredentialOrderByRelationAggregateInputObjectSchema as ExchangeCredentialOrderByRelationAggregateInputObjectSchema } from './ExchangeCredentialOrderByRelationAggregateInput.schema';
import { StrategyConfigOrderByRelationAggregateInputObjectSchema as StrategyConfigOrderByRelationAggregateInputObjectSchema } from './StrategyConfigOrderByRelationAggregateInput.schema';
import { TradingBotOrderByRelationAggregateInputObjectSchema as TradingBotOrderByRelationAggregateInputObjectSchema } from './TradingBotOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  passwordHash: SortOrderSchema.optional(),
  countryCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  country: z.lazy(() => CountryOrderByWithRelationInputObjectSchema).optional(),
  downlines: z.lazy(() => ReferralEdgeOrderByRelationAggregateInputObjectSchema).optional(),
  uplines: z.lazy(() => ReferralEdgeOrderByRelationAggregateInputObjectSchema).optional(),
  info: z.lazy(() => UserInfoOrderByWithRelationInputObjectSchema).optional(),
  wallet: z.lazy(() => UserWalletOrderByWithRelationInputObjectSchema).optional(),
  exchangeCredentials: z.lazy(() => ExchangeCredentialOrderByRelationAggregateInputObjectSchema).optional(),
  strategyConfigs: z.lazy(() => StrategyConfigOrderByRelationAggregateInputObjectSchema).optional(),
  tradingBots: z.lazy(() => TradingBotOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
