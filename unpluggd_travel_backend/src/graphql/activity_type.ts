import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from 'graphql';
import { ReviewType } from './review_type';

export const ActivityType = new GraphQLObjectType({
  name: 'ActivityType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    rating: { type: GraphQLString },
    date: { type: GraphQLString },
    time: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    price: { type: GraphQLString },
    description: { type: GraphQLString },
    activities: { type: new GraphQLList(GraphQLString) },
    meetingPoint: { type: GraphQLString },
    longitude: { type: GraphQLString },
    latitude: { type: GraphQLString },
    reviews: { type: new GraphQLList(ReviewType) },
  }),
});
