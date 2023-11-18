import { addCategory } from '@/lib/graphql/resolvers/';
import {
  category,
  mutations,
  queries,
  structuredResponses,
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

  type Query {
    numberSix: Int! # Should always return the number 6 when queried
    numberSeven: Int! # Should always return 7
  }

  #Schema definitions
  ${category}
  ${task}
  ${user}

  #Query Types definitions
  ${queries}

  #Enum Types
  ${taskStatus}

  #Mutations types definitions
  ${mutations}
  ${structuredResponses}

  #Input types definitions
  ${taskOrderByInput}
`;

const resolvers = {
  Query: {
    // server tests
    hello: () => 'world',
    numberSix() {
      return 6;
    },
    numberSeven() {
      return 7;
    },
  },
  Mutation: {
    addCategory,
  },
};
const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server);

export { handler as GET, handler as POST };
