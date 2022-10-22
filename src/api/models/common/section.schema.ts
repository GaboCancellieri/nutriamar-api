import { Schema } from 'mongoose';
import { ICON_DESIGN_OPTIONS } from '../../constants/icon';
import { IFrameSchema } from './iframe.schema';
import { ImageSchema } from './image.schema';

const SectionTextSchema = new Schema(
  {
    text: { type: String, require: true },
    color: { type: String, require: false },
    size: { type: Number, require: false },
    align: { type: String, require: false, enum: ['center', 'right', 'left', 'justify'] },
    fontFamily: { type: String, require: false, enum: ['lato', 'dosis'] },
    textTransform: {
      type: String,
      require: false,
      enum: ['bold', 'extraBold', 'regular', 'italic', 'medium', 'black', 'blackItalic'],
    },
    classname: { type: String, require: false },
  },
  { _id: false },
);

const SectionLinkSchema = new Schema(
  {
    url: { type: String, require: true },
    title: { type: String, require: true },
    subtitle: { type: String, require: true },
    iconId: { type: String, require: false },
    iconDesign: { type: String, require: false, enum: [...ICON_DESIGN_OPTIONS] },
  },
  { _id: false },
);

export const SectionSchema = new Schema(
  {
    title: { type: SectionTextSchema, require: true },
    subtitle: { type: SectionTextSchema, require: false },
    description: { type: SectionTextSchema, require: false },
    image: { type: ImageSchema, require: false },
    iframe: { type: IFrameSchema, require: false },
    links: { type: [SectionLinkSchema], require: false },
  },
  { _id: false },
);
