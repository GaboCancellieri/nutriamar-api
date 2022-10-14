import { Router, Request, Response } from 'express';
import * as authController from './auth.controller';
import jwt from 'jsonwebtoken';
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
const router = Router();

router.post('/login', async (req: Request, res: Response): Promise<Response> => {
  try {
    console.log({ body: req.body });
    const { email, password } = req.body;
    const user = await authController.checkUserPassword(email, password);
    if (user && ACCESS_TOKEN_SECRET && REFRESH_TOKEN_SECRET) {
      const userPlainObject = {
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        isActive: user.isActive,
        role: user.role,
      };
      const accessToken = await jwt.sign(userPlainObject, ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
      const refreshToken = await jwt.sign(userPlainObject, REFRESH_TOKEN_SECRET);
      await authController.saveRefreshToken(refreshToken);
      res.status(200).json({ accessToken, refreshToken });
    } else {
      res.status(401).json({ title: 'ERROR!', message: 'Usuario o contraseña incorrectos.' });
    }
    return res;
  } catch (error) {
    return res.status(400).json({ title: 'ERROR!', message: 'Error durante el loggueo.' });
  }
});

router.post('/refresh', async (req: Request, res: Response): Promise<Response> => {
  try {
    const authHeader = req.headers['authorization'];
    if (authHeader) {
      const oldRefreshToken = authHeader.split(' ')[1];
      if (oldRefreshToken && ACCESS_TOKEN_SECRET && REFRESH_TOKEN_SECRET) {
        const usuario: any = authController.verifyRefreshToken(oldRefreshToken);
        delete usuario['iat'];
        await authController.deleteRefreshToken(oldRefreshToken);
        const usuarioPlainObject = {
          _id: usuario._id,
          email: usuario.email,
          isActive: usuario.isActive,
          rol: usuario.rol,
        };
        const accessToken = await jwt.sign(usuarioPlainObject, ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
        const refreshToken = await jwt.sign(usuarioPlainObject, REFRESH_TOKEN_SECRET);
        await authController.saveRefreshToken(refreshToken);
        res.status(200).json({ accessToken, refreshToken });
      } else {
        res.status(403).json({ title: 'ERROR!', message: 'Refresh Token invalido.' });
      }
    } else {
      res.status(403).json({ title: 'ERROR!', message: 'Refresh Token invalido.' });
    }
    return res;
  } catch (error) {
    return res.status(403).json({ title: 'ERROR!', message: 'Algo salió mal en auth.routes.' });
  }
});

export default router;
