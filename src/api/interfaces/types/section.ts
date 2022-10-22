import { ICON_DESIGN_OPTIONS } from '../../constants/icon';
import { IFrameType } from './iframe';
import { ImageType } from './image';

export type SectionTextType = {
  text: string;
  color?: string;
  size?: number;
  align?: 'center' | 'right' | 'left' | 'justify';
  fontFamily?: 'lato' | 'dosis';
  textTransform?: 'bold' | 'extraBold' | 'regular' | 'italic' | 'medium' | 'black' | 'blackItalic';
  classname?: string;
};

export type SectionLinkType = {
  url: string;
  iconId?: string;
  iconDesign?: typeof ICON_DESIGN_OPTIONS[number];
  title: string;
  subtitle: string;
};

export type SectionType = {
  id: string;
  title: SectionTextType;
  subtitle?: SectionTextType;
  description?: SectionTextType;
  image?: ImageType;
  iframe?: IFrameType;
  links?: SectionLinkType[];
};
