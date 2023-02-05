import mongoose from 'mongoose';
import NotificationModel from '../model/Notification';
import config from "config";

let database: mongoose.Connection;
const MONGO_HOST: string = config.get('MONGO_HOST');

export const connect = () => {

  if (database) {
    return;
  }

  mongoose.connect(MONGO_HOST, { dbName: 'interview' });

  database = mongoose.connection;
  // When mentioned database is available and successfully connects
  database.once('open', async () => {
    console.log('Connected to database successfully');
  });

  // In case of any error
  database.on('error', () => {
    console.log(`Error connecting to database. Check Whether mongoDB
      installed or you can try to give opensource Mongo Atlas database`);
  });

  return {
    NotificationModel
  };
};

// Safer way to get disconnected
export const disconnect = async () => {
  if (!database) {
    return;
  }

  await mongoose.disconnect();
};