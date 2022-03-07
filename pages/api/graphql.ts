import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from './schemas';
import { resolvers } from './resolvers';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
