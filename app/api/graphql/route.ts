import {
  category,
  mutations,
  queries,
  task,
  taskOrderByInput,
  taskStatus,
  user,
<<<<<<< HEAD
=======
  taskOrderByInput,
  structuredResponses,
>>>>>>> 63f1448e0a53a5ec7d3917bc9ca91ec955768fe5
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
  ${structuredResponses}

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
