import { model, Schema } from 'mongoose';
import ITestimony from '../../interfaces/Web/ITestimonies';

const TestimoniesSchema = new Schema({
  name: { type: String, require: true },
  lastName: { type: String, require: false },
  age: { type: String, require: true },
  comment: { type: String, require: true },
  imageURL: { type: String, require: true },
});

// Duplicate the ID field.
TestimoniesSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
TestimoniesSchema.set('toJSON', {
  virtuals: true,
});

TestimoniesSchema.set('toObject', { virtuals: true });

const Testimonies = model<ITestimony>('Testimonies', TestimoniesSchema, 'web_testimonies');
export default Testimonies;
