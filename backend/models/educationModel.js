import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const educationSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    institute: { type: String, required: true },
    degree: { type: String, required: true },
    year: { type: String, required: true },
  });
  
  const Education = mongoose.model('Education', educationSchema);

  export default Education;
  