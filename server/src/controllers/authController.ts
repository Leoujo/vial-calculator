import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User';
import { generateAuthToken } from '../utils/authUtils';

export const signup = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Checking if email is already registered
    const registeredUser = await User.findOne({ email });
    if (registeredUser) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    // Sending token
    const user = await User.create({
      email,
      password: hashedPassword,
    });

    const token = generateAuthToken(user);

    res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    // Finding user
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    // Checking is password matches
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Sending token
    const token = generateAuthToken(user);

    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
