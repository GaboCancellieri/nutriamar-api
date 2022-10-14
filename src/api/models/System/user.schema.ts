import { model, Schema, Model } from 'mongoose';
import { IUser } from '../../interfaces/System';

const UserSchema = new Schema({
  _id: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  isActive: { type: Boolean, required: true, default: true },
  isAdmin: { type: Boolean, required: true, default: false },
});

export const User: Model<IUser> = model('Usuario', UserSchema, 'users');
