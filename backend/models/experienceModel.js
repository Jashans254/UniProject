import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const experienceSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    position: { type: String, required: true },
    company: { type: String, required: true },
    dates: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String }
  });
  
export const Experience = mongoose.model('Experience', experienceSchema);
  
  