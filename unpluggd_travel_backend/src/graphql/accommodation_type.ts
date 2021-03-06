import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from 'graphql';
import { ReviewType } from './review_type';
import { CategoryType } from './category_type';

export const AccommodationType = new GraphQLObjectType({
  name: 'AccommodationType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    website: { type: GraphQLString },
    address: { type: GraphQLString },
    number: { type: GraphQLString },
    photos: { type: new GraphQLList(GraphQLString) },
    reviews: { type: new GraphQLList(ReviewType) },
    amenities: { type: new GraphQLList(GraphQLString) },
    categories: { type: new GraphQLList(CategoryType) },
    rating: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLString },
  }),
});
