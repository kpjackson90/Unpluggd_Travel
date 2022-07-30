import mongoose from 'mongoose';
const { Schema } = mongoose;
import { IReview } from './review';

interface ActivityAttrs {
  name: string;
  rating: string;
  date: string;
  time: string;
  phoneNumber: string;
  price: string;
  description: string;
  activities: [string];
  meetingPoint: string;
  longitude: string;
  latitude: string;
  reviews: [IReview];
}

interface ActivityModel extends mongoose.Model<IActivity> {
  build(attrs: ActivityAttrs): IActivity;
}

interface IActivity extends mongoose.Document {
  name: string;
  rating: string;
  date: string;
  time: string;
  phoneNumber: string;
  price: string;
  description: string;
  activities: [string];
  meetingPoint: string;
  longitude: string;
  latitude: string;
  reviews: [IReview];
}

const ActivitySchema = new Schema<IActivity>(
  {
    name: { type: String },
    rating: { type: String },
    date: { type: String },
    time: { type: String },
    phoneNumber: { type: String },
    price: { type: String },
    description: { type: String },
    activities: [{ type: String }],
    meetingPoint: { type: String },
    longitude: { type: String },
    latitude: { type: String },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  },
  { timestamps: true }
);

ActivitySchema.statics.build = (attrs: ActivityAttrs) => {
  return new Activity(attrs);
};

const Activity = mongoose.model<IActivity, ActivityModel>(
  'Activity',
  ActivitySchema
);

export { Activity };
