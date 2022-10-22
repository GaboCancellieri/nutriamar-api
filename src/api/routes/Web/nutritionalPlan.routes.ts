import express from 'express';
import { verifyAccessToken } from '../../auth/auth.controller';
import { NutritionalPlanController } from '../../controllers/Web';
const api = express.Router();

api.get('/web/nutritionalPlan', NutritionalPlanController.getNutritionalPlanInfo);
api.patch('/web/nutritionalPlan/:id', verifyAccessToken, NutritionalPlanController.updateNutritionalPlanInfo);

export default api;
