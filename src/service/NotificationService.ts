import {findAllUnreadNotifications, findNotificationsUsingPagination} from "../datastore/NotificationDatastore";

export class NotificationService {

  constructor() {}

  async getUnreadNotificationCount() {
    const response = await findAllUnreadNotifications() || [];
    return response.length
  }

  async getPaginatedNotifications(lastNotificationId: string, filter?: {}) {
    const response = await findNotificationsUsingPagination(lastNotificationId, filter);
    return {notifications: response, last_notif_id: response[response.length-1]._id};
  }

}
