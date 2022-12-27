import express from 'express';
import { verifyAccessToken } from '../../auth/auth.controller';
import { NutritionalPlanController } from '../../controllers/Web';
import { ROUTES } from './constants';
const api = express.Router();
const rootURL = ROUTES.NUTRITIONAL_PLAN_ROUTE;

api.get(rootURL, NutritionalPlanController.getNutritionalPlanInfo);
api.patch(`${rootURL}/:id`, verifyAccessToken, NutritionalPlanController.updateNutritionalPlanInfo);

export default api;
