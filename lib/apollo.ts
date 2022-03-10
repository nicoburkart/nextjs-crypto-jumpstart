import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const httpLink = new HttpLink({ uri: 'http://localhost:3000/api/graphql' });

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('login-with-metamask:auth');
  operation.setContext({
    headers: {
      authorization: token ? token : '',
    },
  });

  return forward(operation);
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default apolloClient;
