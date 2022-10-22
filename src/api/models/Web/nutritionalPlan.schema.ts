import { model, Schema } from 'mongoose';
import INutritionalPlan from '../../interfaces/Web/INutritionalPlan';
import { SectionSchema } from '../common/section.schema';

const NutritionalPlanSchema = new Schema({
  section1: { type: SectionSchema, require: true },
  section2: { type: SectionSchema, require: true },
});

// Duplicate the ID field.
NutritionalPlanSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
NutritionalPlanSchema.set('toJSON', {
  virtuals: true,
});

NutritionalPlanSchema.set('toObject', { virtuals: true });

const NutritionalPlan = model<INutritionalPlan>('NutritionalPlan', NutritionalPlanSchema, 'web_nutritional_plan');
export default NutritionalPlan;
