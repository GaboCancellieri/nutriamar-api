import { Request, Response } from 'express';
import { logger } from '../../../config';
import { HomeBanner } from '../../models/Web';

const getHomeBannerInfo = async (req: Request, res: Response) => {
  const homeBannerInfo = await HomeBanner.findOne();
  logger.info({ homeBannerInfo });
  res.json(homeBannerInfo);
};

const HomeBannerController = {
  getHomeBannerInfo,
};
export default HomeBannerController;
