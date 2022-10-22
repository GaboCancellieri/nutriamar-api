import { Request, Response } from 'express';
import { logger } from '../../../config';
import { HomeBanner } from '../../models/Web';

const getHomeBannerInfo = async (req: Request, res: Response) => {
  const homeBannerInfo = await HomeBanner.findOne({});
  res.json(homeBannerInfo);
};

const updateHomeBannerInfo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { payload } = req.body;
  logger.info({ id, payload });
  const homeBannerInfo = await HomeBanner.findOneAndUpdate({ _id: id }, payload, { new: true });
  console.log({ homeBannerInfo });
  res.json(homeBannerInfo);
};

const HomeBannerController = {
  getHomeBannerInfo,
  updateHomeBannerInfo,
};
export default HomeBannerController;
