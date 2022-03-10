import { Hero } from '../components/organisms/Hero';
import Layout from '../components/templates/Layout';

const IndexPage = () => {
  return (
    <Layout title="Home">
      <Hero></Hero>
      <Hero></Hero>
    </Layout>
  );
};

export default IndexPage;
