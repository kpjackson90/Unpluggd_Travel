import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';
import mongoose from 'mongoose';
import { ActivityType } from './activity_type';
import { RestaurantType } from './restaurant_type';
import { ReviewType } from './review_type';
import { SouvenirType } from './souvenir_type';
import { UserType } from './user_type';
import { AccommodationType } from './accommodation_type';
import { CategoryType } from './category_type';
import {
  User,
  Activity,
  Accommodation,
  Restaurant,
  Review,
  Souvenir,
  Category,
} from '../models';

export const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({});
      },
    },
    user: {
      type: UserType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return User.findById(id);
      },
    },
    categories: {
      type: new GraphQLList(CategoryType),
      resolve() {
        return Category.find({});
      },
    },
    category: {
      type: CategoryType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Category.findById(id);
      },
    },
    activities: {
      type: new GraphQLList(ActivityType),
      resolve() {
        return Activity.find({}).populate({ path: 'reviews', model: 'Review' });
      },
    },
    activity: {
      type: ActivityType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Activity.findById(id).populate({
          path: 'reviews',
          model: 'Review',
        });
      },
    },
    accommodations: {
      type: new GraphQLList(AccommodationType),
      resolve() {
        return Accommodation.find({}).populate({
          path: 'reviews',
          model: 'Review',
        });
      },
    },
    accommodation: {
      type: AccommodationType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Accommodation.findById(id).populate({
          path: 'reviews',
          model: 'Review',
        });
      },
    },
    restaurants: {
      type: new GraphQLList(RestaurantType),
      resolve() {
        return Restaurant.find({}).populate({
          path: 'reviews',
          model: 'Review',
        });
      },
    },
    restaurant: {
      type: RestaurantType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Restaurant.findById(id).populate({
          path: 'reviews',
          model: 'Review',
        });
      },
    },
    reviews: {
      type: new GraphQLList(ReviewType),
      resolve() {
        return Review.find({});
      },
    },
    review: {
      type: ReviewType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Review.findById(id);
      },
    },
    souvenirs: {
      type: new GraphQLList(SouvenirType),
      resolve() {
        return Souvenir.find({}).populate({
          path: 'creator owner',
          model: 'User',
        });
      },
    },
    souvenir: {
      type: SouvenirType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Souvenir.findById(id).populate({
          path: 'creator owner',
          model: 'User',
        });
      },
    },
  }),
});
