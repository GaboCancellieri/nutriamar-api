import { model, Schema } from 'mongoose';
import { IHomeBanner } from '../../interfaces/Web';

const HomeBannerSchema = new Schema({
  title: { type: String, require: true },
  subtitle: { type: String, require: true },
  buttonText: { type: String, require: true },
  imageURL: { type: String, require: true },
});

const HomeBanner = model<IHomeBanner>('HomeBanner', HomeBannerSchema, 'web_home_banner');
export default HomeBanner;
