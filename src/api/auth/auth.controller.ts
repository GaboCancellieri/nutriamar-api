const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
import bcrypt from 'bcrypt';
import { IRefreshToken, RefreshToken } from './refreshToken.schema';
import jwt from 'jsonwebtoken';
import { Query } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import { User } from '../models/System/user.schema';
import { IUser } from '../interfaces/System';

export const checkUserPassword = async (email: string, contrasenia: string): Promise<Partial<IUser> | null> => {
  try {
    let res: Partial<IUser> | null = null;
    const user = await User.findOne({ email });
    if (user && user.password) {
      let matchPassword = false;
      matchPassword = await bcrypt.compare(contrasenia, user.password);
      if (matchPassword) {
        res = new User({
          _id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          isActive: user.isActive,
          role: user.role,
        });
      }
    }
    return res;
  } catch (error) {
    return null;
  }
};

export const saveRefreshToken = (token: string): Promise<IRefreshToken> => {
  return new RefreshToken({ token }).save();
};

export const deleteRefreshToken = (
  token: string,
): Query<
  { ok?: number | undefined; n?: number | undefined } & { deletedCount?: number | undefined },
  IRefreshToken,
  {}
> => {
  return RefreshToken.deleteOne({ token });
};

export const verifyAccessToken = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const authHeader = req.headers['authorization'];
    if (authHeader) {
      const accessToken = authHeader.split(' ')[1];
      if (accessToken && ACCESS_TOKEN_SECRET) {
        const user = await jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
        req.body.user = user;
        next();
      } else {
        res.status(403).json({ title: 'ERROR!', message: 'AccessToken is null.' });
      }
    } else {
      res.status(403).json({ title: 'ERROR!', message: 'autHeader is null.' });
    }
    return res;
  } catch (error) {
    return res.status(403).json({ title: 'ERROR!', message: 'Token invalido.' });
  }
};

export const verifyRefreshToken = (refreshToken: string): string | object | null => {
  return REFRESH_TOKEN_SECRET ? jwt.verify(refreshToken, REFRESH_TOKEN_SECRET) : null;
};
