import mongoose from 'mongoose';

const userScehma = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, required: true, default: false },
  code: { type: Number },
  created_at: { type: Date, required: true, default: Date.now },
});

export default mongoose.model('User', userScehma);
