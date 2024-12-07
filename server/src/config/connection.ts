
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGODB_URL ||'mongodb://localhost:27017/maypo_deluxe');

export default mongoose.connection;