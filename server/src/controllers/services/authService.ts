import User from '../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const findUserByEmail = async (email: string) => {
  const user = await User.findOne({ email });
  return user;
};

export const createUser = async (email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const createdUser = await User.create({
    email,
    password: hashedPassword,
  });

  return createdUser;
};

export const isValidPassword = async (password: string, hashedPassword: string) => {
  const isValid = await bcrypt.compare(password, hashedPassword);
  return isValid;
};

export const generateAuthToken = (email: string) => {
  return jwt.sign({ email }, 'my-super-secret-key', {
    expiresIn: '1h', // Set the token expiration time
  });
};
