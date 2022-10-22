import { Schema } from 'mongoose';

export const ImageSchema = new Schema(
  {
    altText: { type: String, require: true },
    url: { type: String, require: true },
  },
  { _id: false },
);
