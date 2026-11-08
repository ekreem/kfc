import multer from 'multer';
import path from 'path';
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (_, file, cb) => cb(null, Date.now() + '-' + Math.round(Math.random() * 1e6) + path.extname(file.originalname)),
});
export default multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_, file, cb) => cb(file.mimetype.startsWith('image/') ? null : new Error('Yalnız şəkil'), file.mimetype.startsWith('image/')),
});
