import { Request, Response } from 'express';
import { logger } from '../../../config';
import { NutritionalPlan } from '../../models/Web';

const getNutritionalPlanInfo = async (req: Request, res: Response) => {
  const nutritionalPlanInfo = await NutritionalPlan.findOne({});
  res.json(nutritionalPlanInfo);
};

const updateNutritionalPlanInfo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { payload } = req.body;
  logger.info({ id, payload });
  const nutritionalPlanInfo = await NutritionalPlan.findOneAndUpdate({ _id: id }, payload, { new: true });
  res.json(nutritionalPlanInfo);
};

const NutritionalPlanController = {
  getNutritionalPlanInfo,
  updateNutritionalPlanInfo,
};
export default NutritionalPlanController;
