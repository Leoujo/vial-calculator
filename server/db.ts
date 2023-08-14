import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config()

export const connectToMongoDB = () => {
  const mongodbPassword = process.env.MONGODB_PASSWORD;

  return mongoose
    .connect(`mongodb+srv://leoujo:${mongodbPassword}@calculator.08w9opg.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.log(err);
    });
};
