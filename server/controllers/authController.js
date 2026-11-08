import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
const sendToken = (res, user, status = 200) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.cookie('token', token, { httpOnly: true, sameSite: 'lax', maxAge: 7 * 864e5 });
  const { password, ...safe } = user.toObject();
  res.status(status).json(safe);
};
export const register = async (req, res) => {
  const { name, email, phone, password } = req.body;
  if (!name || !email || !phone || !password) return res.status(400).json({ message: 'Bütün sahələri doldurun' });
  if (password.length < 6) return res.status(400).json({ message: 'Şifrə ən azı 6 simvol olmalıdır' });
  if (await User.findOne({ email: email.toLowerCase() })) return res.status(400).json({ message: 'Bu email artıq qeydiyyatdadır' });
  const user = await User.create({ name, email, phone, password: await bcrypt.hash(password, 10) });
  sendToken(res, user, 201);
};
export const login = async (req, res) => {
  const user = await User.findOne({ email: (req.body.email || '').toLowerCase() });
  if (!user || !(await bcrypt.compare(req.body.password || '', user.password)))
    return res.status(400).json({ message: 'Email və ya şifrə yanlışdır' });
  sendToken(res, user);
};
export const logout = (_, res) => { res.clearCookie('token'); res.json({ message: 'Çıxış edildi' }); };
export const me = (req, res) => res.json(req.user);
