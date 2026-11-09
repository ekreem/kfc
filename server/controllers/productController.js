import Product from '../models/Product.js';
export const getProducts = async (req, res) => {
  const filter = req.query.category ? { category: req.query.category } : {};
  res.json(await Product.find(filter).select('-image').sort('-createdAt'));
};
export const getProductImage = async (req, res) => {
  try {
    const p = await Product.findById(req.params.id).select('image');
    if (!p?.image?.data) return res.status(404).end();
    res.set('Content-Type', p.image.contentType);
    res.set('Cache-Control', 'public, max-age=86400');
    res.send(p.image.data);
  } catch { res.status(404).end(); }
};
export const createProduct = async (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'Şəkil yükləyin' });
  try {
    const { name, description, price, category } = req.body;
    const p = await Product.create({ name, description, price, category, image: { data: req.file.buffer, contentType: req.file.mimetype } });
    res.status(201).json({ _id: p._id, name: p.name });
  } catch (e) { res.status(400).json({ message: e.message }); }
};
export const deleteProduct = async (req, res) => {
  const p = await Product.findByIdAndDelete(req.params.id);
  if (!p) return res.status(404).json({ message: 'Məhsul tapılmadı' });
  res.json({ message: 'Silindi' });
};
export const updateProduct = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const update = { name, description, price, category };
    if (req.file) update.image = { data: req.file.buffer, contentType: req.file.mimetype };
    const p = await Product.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true }).select('-image');
    if (!p) return res.status(404).json({ message: 'Məhsul tapılmadı' });
    res.json(p);
  } catch (e) { res.status(400).json({ message: e.message }); }
};