import express from 'express';
import { verifyAccessToken } from '../../auth/auth.controller';
import { TestimoniesController } from '../../controllers/Web';
import { ROUTES } from './constants';
const api = express.Router();
const rootURL = ROUTES.TESTIMONIES_ROUTE;

api.get(rootURL, TestimoniesController.getTestimonies);
api.post(rootURL, verifyAccessToken, TestimoniesController.addTestimony);
api.patch(`${rootURL}/:id`, verifyAccessToken, TestimoniesController.updateTestimony);
api.delete(`${rootURL}/:id`, verifyAccessToken, TestimoniesController.deleteTestimony);

export default api;
