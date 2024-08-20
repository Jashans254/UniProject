import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const publicationSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    authors: { type: String, required: true },
    journal: { type: String, required: true },
    citedBy: { type: Number, default: 0 },
    year: { type: Number, required: true }
  });
  
  const Publication = mongoose.model('Publication', publicationSchema);
  
  export default Publication;
  