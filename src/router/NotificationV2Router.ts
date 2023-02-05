import * as notificationController from "../controller/NotificationController";
import express from "express";

const notificationV2Router = express.Router();


notificationV2Router.get('/', (req, res, next) => {
  notificationController.getPaginatedNotifications(req, res, next);
});

notificationV2Router.get('/unread', (req, res, next) => {
  notificationController.getAllUnreadNotificationsPaginated(req, res, next);
});

export default notificationV2Router