import {
  category,
  mutations,
  queries,
  task,
  taskOrderByInput,
  taskStatus,
  user,
} from '@/lib/graphql/typeDefs';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
import { NextRequest } from 'next/server';

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
