import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { gql } from 'graphql-tag';
import { NextRequest } from 'next/server';
import {
  category,
  mutations,
  queries,
  task,
  taskStatus,
  user,
  taskOrderByInput,
} from '@/lib/graphql/typeDefs';

const typeDefs = gql`
  #server test
  type Query {
    hello: String
  }

  #Schema definitions
  ${category}
  ${task}
  ${taskStatus}
  ${user}

  #Query Types definitions
  ${queries}

  #Mutations types definitions
  ${mutations}

  #Input types definitions
  ${taskOrderByInput}
`;

const resolvers = {
  Query: {
    hello: () => 'world',
  },
};
const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server);

export { handler as GET, handler as POST };
