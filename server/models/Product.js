import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, default: '' },
  price: { type: Number, required: true, min: 0 },
  category: { type: String, required: true, enum: ['Burger', 'Toyuq', 'Combo', 'Qəlyanaltı', 'İçki', 'Desert'] },
  image: { type: String, required: true },
}, { timestamps: true });
export default mongoose.model('Product', productSchema);
