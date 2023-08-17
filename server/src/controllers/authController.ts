import { Request, Response } from 'express';
import { createUser, findUserByEmail, generateAuthToken, isValidPassword } from './services/authService';

export const signup = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

	 // Checking if user exists
    const user = await findUserByEmail(email);
    if (user) {
      return res.status(409).json({ error: 'Email already registered' });
    }

	 // Creating new user
    const createdUser = await createUser(email, password);
    const token = generateAuthToken(createdUser.email);

    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

	 // Checking if user exists
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

	 // Checking if user's password is valid
    const isValidPass = await isValidPassword(password, user.password);
    if (!isValidPass) {
      return res.status(401).json({ error: 'Wrong password' });
    }
    const token = generateAuthToken(email);

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};
