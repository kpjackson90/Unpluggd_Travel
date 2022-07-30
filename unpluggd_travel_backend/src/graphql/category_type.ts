import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

export const CategoryType = new GraphQLObjectType({
  name: 'CategoryType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    icon: { type: GraphQLString },
  }),
});
