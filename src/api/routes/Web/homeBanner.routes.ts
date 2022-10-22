import express from 'express';
import { verifyAccessToken } from '../../auth/auth.controller';
import { HomeBannerController } from '../../controllers/Web';
const api = express.Router();

api.get('/web/homeBanner', HomeBannerController.getHomeBannerInfo);
api.patch('/web/homeBanner/:id', verifyAccessToken, HomeBannerController.updateHomeBannerInfo);

export default api;
