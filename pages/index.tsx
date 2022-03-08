import Link from 'next/link';
import { useState } from 'react';
import { Hero } from '../components/organisms/Hero';
import Layout from '../components/templates/Layout';

const IndexPage = () => {
  const [user, setUser] = useState('');

  return (
    <Layout title="Home">
      <h1>{user}</h1>
      <Hero></Hero>
      <Hero></Hero>
    </Layout>
  );
};

export default IndexPage;
