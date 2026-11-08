import User from '../models/User.js';
export const getUsers = async (_, res) => res.json(await User.find().select('-password').sort('-createdAt'));
