import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLBoolean,
} from 'graphql';
import { ReviewType } from './review_type';

export const RestaurantType = new GraphQLObjectType({
  name: 'RestaurantType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    website: { type: GraphQLString },
    address: { type: GraphQLString },
    status: { type: GraphQLBoolean },
    rating: { type: GraphQLString },
    hours: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    description: { type: GraphQLString },
    cuisines: { type: new GraphQLList(GraphQLString) },
    serving: { type: new GraphQLList(GraphQLString) },
    latitude: { type: GraphQLString },
    longitude: { type: GraphQLString },
    reviews: { type: new GraphQLList(ReviewType) },
  }),
});
