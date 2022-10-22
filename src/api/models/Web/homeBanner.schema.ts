import { model, Schema } from 'mongoose';
import { IHomeBanner } from '../../interfaces/Web';
import { ImageSchema } from '../common/image.schema';

const HomeBannerSchema = new Schema({
  title: { type: String, require: true },
  subtitle: { type: String, require: true },
  buttonText: { type: String, require: true },
  image: { type: ImageSchema, require: true },
});

// Duplicate the ID field.
HomeBannerSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
HomeBannerSchema.set('toJSON', {
  virtuals: true,
});

HomeBannerSchema.set('toObject', { virtuals: true });

const HomeBanner = model<IHomeBanner>('HomeBanner', HomeBannerSchema, 'web_home_banner');
export default HomeBanner;
