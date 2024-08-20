import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profilePicture: { type: String, default: 'default_profile_pic_url' },
  bio: { type: String },
  company: { type: String },
  password: { type: String, required: true },
  education: [{ type: Schema.Types.ObjectId, ref: 'Education' }],
  skills: [{ type: Schema.Types.ObjectId, ref: 'Skill' }],
  certifications: [{ type: Schema.Types.ObjectId, ref: 'Certification' }],
  experience: [{ type: Schema.Types.ObjectId, ref: 'Experience' }],
  publications: [{ type: Schema.Types.ObjectId, ref: 'Publication' }],
  role: { type: String, enum: ['admin', 'user'], default: 'user' }, // Role-based access control
  contactInfo: { type: String }, // Contact information field
  address: { type: String }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);


