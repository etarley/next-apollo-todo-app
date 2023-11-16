import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { gql } from 'graphql-tag';
import { NextRequest } from 'next/server';
import { category, task, taskStatus, user } from '@/lib/graphql/schemas';




const typeDefs = gql`
  ${category},
  ${task},
  ${taskStatus},
  ${user}
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
