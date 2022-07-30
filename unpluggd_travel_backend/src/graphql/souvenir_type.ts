import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

export const SouvenirType = new GraphQLObjectType({
  name: 'SouvenirType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    price: { type: GraphQLString },
    description: { type: GraphQLString },
    image: { type: GraphQLString },
    creator: { type: GraphQLString },
    owner: { type: GraphQLString },
  }),
});
