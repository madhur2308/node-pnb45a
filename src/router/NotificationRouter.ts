import express, {Request, Response} from 'express';
import * as notificationController from "../controller/NotificationController";

const notificationRouter = express.Router();

notificationRouter.get('/health', (req: Request, res: Response) => {
  res.send('HEALTHY!!!');
});

notificationRouter.get('/', (req, res, next) => {
  notificationController.getAllNotifications(req, res, next);
});
notificationRouter.get('/:notif_id', (req, res, next) => {
  notificationController.getSpecificNotification(req, res, next);
});
notificationRouter.get('/unread', function (req, res, next) {
  notificationController.getAllUnreadNotifications(req, res, next);
});
notificationRouter.get('/unread/count', function (req, res, next) {
  notificationController.getUnreadNotificationCount(req, res, next);
});
notificationRouter.put('/read/all', function (req, res, next) {
  notificationController.setAllNotificationsRead(req, res, next);
});
notificationRouter.put('/read/:notif_id', function (req, res, next) {
  notificationController.setNotificationRead(req, res, next);
});


export default notificationRouter;
