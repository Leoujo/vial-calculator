import express from 'express';
import authRoutes from './routes/auth';
import { connectToMongoDB } from '../db';

const app = express();

// Middleware to understand JSON
app.use(express.json());

// Middleware to add a route file
app.use("/", authRoutes);

// Checking if server is listening
app.listen(3000, () => {
  console.log("Node API running on port 3000!");
});

// Connecting to mongoDB
connectToMongoDB()
