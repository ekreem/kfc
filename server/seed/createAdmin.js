import 'dotenv/config';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import connectDB from '../config/db.js';
import User from '../models/User.js';
await connectDB();
const email = process.env.ADMIN_EMAIL.toLowerCase();
const exists = await User.findOne({ email });
if (exists) console.log('Admin artıq mövcuddur');
else {
  await User.create({ name: 'Admin', email, phone: '-', role: 'admin', password: await bcrypt.hash(process.env.ADMIN_PASSWORD, 10) });
  console.log('Admin yaradıldı:', email);
}
await mongoose.disconnect();
