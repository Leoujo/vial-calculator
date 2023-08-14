import jwt from 'jsonwebtoken';
import { User } from '../../types/User';

export const generateAuthToken = (user: User) => {
  return jwt.sign({ email: user.email }, 'my-super-secret-key', {
    expiresIn: '1h', // Set the token expiration time
  });
};
