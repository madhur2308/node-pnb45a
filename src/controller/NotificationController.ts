import { Request, Response, NextFunction } from 'express';
import {
  findAllNotifications,
  findAllUnreadNotifications,
  findAllUnreadNotificationsCount,
  findNotificationById,
  findNotificationsUsingPagination,
  markAllNotificationsRead,
  markAllNotificationsUnRead,
  updateNotificationReadStatus,
} from '../datastore/NotificationDatastore';
import { NotificationService } from '../service/NotificationService';

const notifService = new NotificationService();
export async function getAllNotifications(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const result = await findAllNotifications();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}

export async function getSpecificNotification(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { notif_id } = req.params;
    const result = await findNotificationById(notif_id);
    if (!result || result?.length <= 0) {
      res.status(404).send(`No Notification found by id - ${notif_id}`);
    } else {
      res.send(result);
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getAllUnreadNotifications(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const result = await findAllUnreadNotifications();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}

export async function getUnreadNotificationCount(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const count = await findAllUnreadNotificationsCount();
    res.send(count.toString());
  } catch (err) {
    console.log(err);
  }
}

export async function setAllNotificationsRead(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    await markAllNotificationsRead();
    res.send('Process Triggered');
  } catch (err) {
    console.log(err);
  }
}

export async function setNotificationRead(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { notif_id } = req.params;
    const { set = 'true' } = req.query;
    console.log(set);
    await updateNotificationReadStatus(notif_id, set === 'true');
    res.send('Done!!');
  } catch (err) {
    console.log(err);
  }
}

export async function getPaginatedNotifications(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { last_notif_id: lastNotificationId } = req.query;
    const response = await notifService.getPaginatedNotifications(
      (lastNotificationId as string) ?? undefined
    );
    res.send(response);
  } catch (err) {
    console.log(err);
  }
}

export async function getAllUnreadNotificationsPaginated(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { last_notif_id: lastNotificationId } = req.query;
    const response = await notifService.getPaginatedNotifications(
      (lastNotificationId as string) ?? undefined,
      { read: false }
    );
    res.send(response);
  } catch (err) {
    console.log(err);
  }
}
