import mongoose from 'mongoose';

const entrySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: String,
  mood: String,
  entry: String,
  dateTime: { type: String, default: new Date().toLocaleString() },
});

export default mongoose.model('Entry', entrySchema);
