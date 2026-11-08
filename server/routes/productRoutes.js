import { Router } from 'express';
import { getProducts, createProduct, deleteProduct } from '../controllers/productController.js';
import { protect, adminOnly } from '../middleware/auth.js';
import upload from '../middleware/upload.js';
const r = Router();
r.get('/', getProducts);
r.post('/', protect, adminOnly, upload.single('image'), createProduct);
r.delete('/:id', protect, adminOnly, deleteProduct);
export default r;
