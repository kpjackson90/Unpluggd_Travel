import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from 'graphql';

export const ReviewType = new GraphQLObjectType({
  name: 'ReviewType',
  fields: () => ({
    id: { type: GraphQLID },
    rating: { type: GraphQLString },
    visitType: { type: GraphQLString },
    fromDate: { type: GraphQLString },
    toDate: { type: GraphQLString },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    images: { type: new GraphQLList(GraphQLString) },
  }),
});
