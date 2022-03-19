import React from 'react';
import { AppProps } from 'next/app';
import '../styles/global.css';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apollo';
import { CtxProvider } from '../lib/ContextProvider';
import { WagmiProvider } from 'wagmi';
import { connectors } from '../services/wagmi.service';

function App({ Component, pageProps }: AppProps) {
  return (
    <CtxProvider>
      <ApolloProvider client={apolloClient}>
        <WagmiProvider autoConnect connectors={connectors}>
          <Component {...pageProps} />
        </WagmiProvider>
      </ApolloProvider>
    </CtxProvider>
  );
}

export default App;
