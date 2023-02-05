import express, { Express } from 'express';
import dotenv from 'dotenv';
import notificationRouter from './router/NotificationRouter'
import notificationV2Router from "./router/NotificationV2Router";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';


import {connect} from "./datastore/db";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// todo add version number like v1 etc.
app
  // .use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use('/api/notifications', [notificationRouter])
  .use('/api/v2/notifications', [notificationV2Router]);

app.listen(port, async () => {
  await connect();
  console.log(`⚡️[server]: Server is running at port:${port}`);
});

