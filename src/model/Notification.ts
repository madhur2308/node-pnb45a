import * as mongoose from 'mongoose';
import {Model} from 'mongoose';

interface INotification {
  message: string,
  read: boolean;
}

interface NotificationDoc extends mongoose.Document {
  message: string,
  read: boolean;
}

interface NotificationModelInterface extends Model<NotificationDoc> {
  build(attr: INotification): NotificationDoc;
}

const NotificationSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  read: {
    type: Boolean,
  },
});

NotificationSchema.statics.build = (attr: INotification) => new NotificationModel(attr);
const NotificationModel = mongoose.model<NotificationDoc, NotificationModelInterface>('Notification', NotificationSchema);

export default NotificationModel;
