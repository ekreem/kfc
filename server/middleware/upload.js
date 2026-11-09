import multer from 'multer';
export default multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_, file, cb) => cb(file.mimetype.startsWith('image/') ? null : new Error('Yalnız şəkil'), file.mimetype.startsWith('image/')),
});