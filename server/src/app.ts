import express from 'express';
import authRoutes from './routes/auth';
import { connectToMongoDB } from '../db';
import cors from 'cors'

const app = express();

// Middleware to understand JSON
app.use(express.json());
app.use(cors())

// Middleware to add a route file
app.use("/", authRoutes);

// Checking if server is listening
app.listen(3001, () => {
  console.log("Node API running on port 3001!");
});

// Connecting to mongoDB
connectToMongoDB()
