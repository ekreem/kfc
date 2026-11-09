import { Router } from 'express';
import { getProducts, getProductImage, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';
import { protect, adminOnly } from '../middleware/auth.js';
import upload from '../middleware/upload.js';

const r = Router();

r.get('/', getProducts);
r.get('/:id/image', getProductImage);
r.post('/', protect, adminOnly, upload.single('image'), createProduct);
r.put('/:id', protect, adminOnly, upload.single('image'), updateProduct);
r.delete('/:id', protect, adminOnly, deleteProduct);

export default r;