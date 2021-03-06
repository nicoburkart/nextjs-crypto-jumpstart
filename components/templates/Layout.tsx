import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Navigation } from '../organisms/Navigation';
import { Footer } from '../organisms/Footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Navigation></Navigation>

    {children}

    <Footer></Footer>
  </div>
);

export default Layout;
