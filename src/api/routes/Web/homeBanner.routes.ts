import express from 'express';
import { verifyAccessToken } from '../../auth/auth.controller';
import { HomeBannerController } from '../../controllers/Web';
import { ROUTES } from './constants';
const api = express.Router();
const rootURL = ROUTES.HOME_BANNER_ROUTE;

api.get(rootURL, HomeBannerController.getHomeBannerInfo);
api.patch(`${rootURL}/:id`, verifyAccessToken, HomeBannerController.updateHomeBannerInfo);

export default api;
