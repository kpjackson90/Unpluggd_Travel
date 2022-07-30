import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from 'graphql';
import { CategoryType } from './category_type';
import { UserType } from './user_type';

export const SouvenirType = new GraphQLObjectType({
  name: 'SouvenirType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    price: { type: GraphQLString },
    description: { type: GraphQLString },
    categories: { type: new GraphQLList(CategoryType) },
    image: { type: GraphQLString },
    creator: { type: GraphQLString },
    owner: { type: GraphQLString },
  }),
});
