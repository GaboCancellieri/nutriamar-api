import express from 'express';
import { HomeBannerController } from '../../controllers/Web';
const api = express.Router();

api.get('/web/homeBanner', HomeBannerController.getHomeBannerInfo);

export default api;
