import { Request, Response } from 'express';
import { logger } from '../../../config';
import { Testimonies } from '../../models/Web';

const getTestimonies = async (req: Request, res: Response) => {
  const testimonies = await Testimonies.find({});
  logger.info(testimonies);
  res.json(testimonies);
};

const updateTestimony = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { payload } = req.body;
  const homeBannerInfo = await Testimonies.findOneAndUpdate({ _id: id }, payload, { new: true });
  console.log({ homeBannerInfo });
  res.json(homeBannerInfo);
};

const addTestimony = async (req: Request, res: Response) => {
  const { payload } = req.body;
  const testimony = await Testimonies.insertMany([payload]);
  console.log({ testimony });
  res.json(testimony);
};

const deleteTestimony = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { payload } = req.body;
  const homeBannerInfo = await Testimonies.findOneAndUpdate({ _id: id }, payload, { new: true });
  console.log({ homeBannerInfo });
  res.json(homeBannerInfo);
};

const TestimoniesController = {
  getTestimonies,
  updateTestimony,
  addTestimony,
  deleteTestimony,
};
export default TestimoniesController;
