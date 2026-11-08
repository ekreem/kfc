import { Router } from 'express';
import { getUsers } from '../controllers/userController.js';
import { protect, adminOnly } from '../middleware/auth.js';
const r = Router();
r.get('/', protect, adminOnly, getUsers);
export default r;
