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
const User = mongoose.model('User');
const Activity = mongoose.model('Activity');
const Accommodation = mongoose.model('Accommodation');
const Restaurant = mongoose.model('Restaurant');
const Review = mongoose.model('Review');
const Souvenir = mongoose.model('Souvenir');

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
    activities: {
      type: new GraphQLList(ActivityType),
      resolve() {
        return Activity.find({});
      },
    },
    activity: {
      type: ActivityType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Activity.findById(id);
      },
    },
    accommodations: {
      type: new GraphQLList(AccommodationType),
      resolve() {
        return Accommodation.find({});
      },
    },
    accommodation: {
      type: AccommodationType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Accommodation.findById(id);
      },
    },
    restaurants: {
      type: new GraphQLList(RestaurantType),
      resolve() {
        return Restaurant.find({});
      },
    },
    restaurant: {
      type: RestaurantType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Restaurant.findById(id);
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
        return Souvenir.find({});
      },
    },
    souvenir: {
      type: SouvenirType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Souvenir.findById(id);
      },
    },
  }),
});
