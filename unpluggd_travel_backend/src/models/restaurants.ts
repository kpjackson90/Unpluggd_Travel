import mongoose from 'mongoose';
const { Schema } = mongoose;
import { IReview, Review } from './review';
import { ICategory } from './category';

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
  categories: [ICategory];
  reviews?: [IReview];
}

interface RestaurantModel extends mongoose.Model<IRestaurant> {
  build(attrs: RestaurantAttrs): IRestaurant;
  addReview(
    id: string,
    rating: string,
    visitType: string,
    fromDate: string,
    toDate: string,
    title: string,
    body: string,
    images: [string]
  ): IRestaurant;
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
  categories: [ICategory];
  reviews?: [IReview];
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
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Categories' }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  },
  { timestamps: true }
);

RestaurantSchema.statics.build = (attrs: RestaurantAttrs) => {
  return new Restaurant(attrs);
};

RestaurantSchema.statics.addReview = function (
  id,
  rating,
  visitType,
  fromDate,
  toDate,
  title,
  body,
  images
) {
  return this.findById(id).then((restaurant: IRestaurant) => {
    if (restaurant.id) {
      const review = new Review({
        rating,
        visitType,
        fromDate,
        toDate,
        title,
        body,
        images,
      });
      if (typeof restaurant.reviews !== 'undefined') {
        restaurant.reviews.push(review);
      }

      return Promise.all([review.save(), restaurant.save()]).then(
        ([review, restaurant]) => restaurant
      );
    }
  });
};

RestaurantSchema.statics.findReview = function (id) {
  return this.findById(id)
    .populate('review')
    .then((restaurant: IRestaurant) => restaurant.reviews);
};

const Restaurant = mongoose.model<IRestaurant, RestaurantModel>(
  'Restaurant',
  RestaurantSchema
);

export { Restaurant };
