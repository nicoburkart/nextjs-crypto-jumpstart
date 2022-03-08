import React from 'react';
import { AppProps } from 'next/app';
import '../styles/global.css';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apollo';

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
