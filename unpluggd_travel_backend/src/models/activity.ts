import mongoose from 'mongoose';
const { Schema } = mongoose;
import { IReview, Review } from './review';
import { ICategory } from './category';

interface ActivityAttrs {
  name: string;
  rating: string;
  date: string;
  time: string;
  phoneNumber: string;
  price: string;
  description: string;
  categories: [ICategory];
  activities: [string];
  meetingPoint: string;
  longitude: string;
  latitude: string;
  reviews: [IReview];
}

interface ActivityModel extends mongoose.Model<IActivity> {
  build(attrs: ActivityAttrs): IActivity;
  addReview(
    id: string,
    rating: string,
    visitType: string,
    fromDate: string,
    toDate: string,
    title: string,
    body: string,
    images: [string]
  ): IActivity;
}

interface IActivity extends mongoose.Document {
  name: string;
  rating: string;
  date: string;
  time: string;
  phoneNumber: string;
  price: string;
  description: string;
  categories: [ICategory];
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
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
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

ActivitySchema.statics.addReview = function (
  id,
  rating,
  visitType,
  fromDate,
  toDate,
  title,
  body,
  images
) {
  return this.findById(id).then((activity: IActivity) => {
    if (activity.id) {
      const review = new Review({
        rating,
        visitType,
        fromDate,
        toDate,
        title,
        body,
        images,
      });

      if (typeof activity.reviews !== 'undefined') {
        activity.reviews.push(review);
      }

      return Promise.all([review.save(), activity.save()]).then(
        ([review, activity]) => activity
      );
    }
  });
};

ActivitySchema.statics.findReview = function (id) {
  return this.findById(id)
    .populate('review')
    .then((activity: IActivity) => activity.reviews);
};

const Activity = mongoose.model<IActivity, ActivityModel>(
  'Activity',
  ActivitySchema
);

export { Activity };
