import { Schema } from 'mongoose';

export const IFrameSchema = new Schema(
  {
    url: { type: String, require: true },
    background: { type: String, require: true, enum: ['none', 'phone', 'tablet', 'desktop'] },
  },
  { _id: false },
);
