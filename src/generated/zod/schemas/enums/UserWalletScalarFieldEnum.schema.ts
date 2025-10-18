import * as z from 'zod';

export const UserWalletScalarFieldEnumSchema = z.enum(['id', 'userId', 'depositAddress', 'withdrawAddress', 'depositPrivCipher', 'depositPrivIv', 'depositPrivTag', 'depositKeyAlg', 'depositKeyVersion', 'createdAt', 'updatedAt'])

export type UserWalletScalarFieldEnum = z.infer<typeof UserWalletScalarFieldEnumSchema>;