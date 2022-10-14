import { model, Schema, Model } from 'mongoose';

export interface IRefreshToken {
  token: string;
}

const TokenSchema = new Schema({
  token: { type: String, required: true, unique: true },
});

export const RefreshToken: Model<IRefreshToken> = model('RefreshToken', TokenSchema, 'refresh_tokens');
