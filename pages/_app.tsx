import React from 'react';
import { AppProps } from 'next/app';
import '../styles/global.css';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apollo';
import { CtxProvider } from '../lib/ContextProvider';

function App({ Component, pageProps }: AppProps) {
  return (
    <CtxProvider>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </CtxProvider>
  );
}

export default App;
