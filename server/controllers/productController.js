import fs from 'fs';
import Product from '../models/Product.js';
export const getProducts = async (req, res) => {
  const filter = req.query.category ? { category: req.query.category } : {};
  res.json(await Product.find(filter).sort('-createdAt'));
};
export const createProduct = async (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'Şəkil yükləyin' });
  try {
    const { name, description, price, category } = req.body;
    res.status(201).json(await Product.create({ name, description, price, category, image: '/uploads/' + req.file.filename }));
  } catch (e) { fs.unlink(req.file.path, () => {}); res.status(400).json({ message: e.message }); }
};
export const deleteProduct = async (req, res) => {
  const p = await Product.findByIdAndDelete(req.params.id);
  if (!p) return res.status(404).json({ message: 'Məhsul tapılmadı' });
  if (p.image.startsWith('/uploads/')) fs.unlink('.' + p.image, () => {});
  res.json({ message: 'Silindi' });
};
