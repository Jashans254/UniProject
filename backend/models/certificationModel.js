import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const certificationSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    issuingOrganization: { type: String, required: true },
    year: { type: String },
    image: { type: String }
  });
  
  const Certification = mongoose.model('Certification', certificationSchema);
  
  export default Certification;
  