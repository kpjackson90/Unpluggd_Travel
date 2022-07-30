import { app } from './app';
import mongoose from 'mongoose';
import { DatabaseConnectionError, logger } from './middlewares';

const start = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (err: any) {
    throw new DatabaseConnectionError();
  }

  logger.log({
    level: 'info',
    message: `Database is connected`,
  });

  app.listen(5000, () => {
    logger.log({ level: 'info', message: 'Server running on Port 5000' });
  });
};

start();
