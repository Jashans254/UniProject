import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    details: { type: String, required: true }
  });
  
export const Skill = mongoose.model('Skill', skillSchema);
  