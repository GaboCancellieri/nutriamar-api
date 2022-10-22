export type IFrameBackgroundType = 'none' | 'phone' | 'tablet' | 'desktop';

export type IFrameType = {
  url: string;
  background: IFrameBackgroundType;
};
