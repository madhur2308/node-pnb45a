import NotificationModel from "../model/Notification";

const PAGINATION_LIMIT = 10;

export async function findNotificationById(notificationId: string) {
  return NotificationModel.find({_id: notificationId});
}

export async function findAllNotifications() {
  return NotificationModel.find({});
}

export async function findNotificationsUsingPagination(lastNotificationId: string, filter?: {}) {
  if (!lastNotificationId) {
    if (!filter) {
      filter = {};
    }
  } else {
    filter = {...filter, '_id': {'$gt': lastNotificationId}};
  }
  return NotificationModel.find(filter).limit(PAGINATION_LIMIT);
}

export async function findAllUnreadNotifications() {
  return NotificationModel.find({read: false});
}

export async function findAllUnreadNotificationsCount() {
  return NotificationModel.find({read: false}).count();
}

export async function updateNotificationReadStatus(notifId: string, set: boolean) {
  return NotificationModel.updateOne({_id: notifId}, {$set: {read: set}});
}

export async function markAllNotificationsRead() {
  return NotificationModel.updateMany({read: false}, {$set: {read: true}});
}

export async function markAllNotificationsUnRead() {
  return NotificationModel.updateMany({read: true}, {$set: {read: false}});
}