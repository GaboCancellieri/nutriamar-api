import { Schema } from 'mongoose';

export default interface IUser {
  _id: any;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  isActive: boolean;
  isAdmin: boolean;
}
