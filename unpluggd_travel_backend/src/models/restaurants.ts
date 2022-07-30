import mongoose from 'mongoose';
const { Schema } = mongoose;
import { IReview } from './review';

interface RestaurantAttrs {
  name: string;
  website: string;
  address: string;
  status: boolean;
  rating: string;
  hours: string;
  phoneNumber: string;
  description: string;
  cuisines: [string];
  serving: [string];
  latitude: string;
  longitude: string;
  reviews: [IReview];
}

interface RestaurantModel extends mongoose.Model<IRestaurant> {
  build(attrs: RestaurantAttrs): IRestaurant;
}

interface IRestaurant extends mongoose.Document {
  name: string;
  website: string;
  address: string;
  status: boolean;
  rating: string;
  hours: string;
  phoneNumber: string;
  description: string;
  cuisines: [string];
  serving: [string];
  latitude: string;
  longitude: string;
  reviews: [IReview];
}

const RestaurantSchema = new Schema<IRestaurant>(
  {
    name: { type: String },
    website: { type: String },
    address: { type: String },
    status: { type: Boolean },
    rating: { type: String },
    hours: { type: String },
    phoneNumber: { type: String },
    description: { type: String },
    cuisines: [{ type: String }],
    serving: [{ type: String }],
    latitude: { type: String },
    longitude: { type: String },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  },
  { timestamps: true }
);

RestaurantSchema.statics.build = (attrs: RestaurantAttrs) => {
  return new Restaurant(attrs);
};

const Restaurant = mongoose.model<IRestaurant, RestaurantModel>(
  'Restaurant',
  RestaurantSchema
);

export { Restaurant };
