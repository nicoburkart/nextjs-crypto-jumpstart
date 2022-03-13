import { Features } from '../components/organisms/Features';
import { Hero } from '../components/organisms/Hero';
import Layout from '../components/templates/Layout';

const IndexPage = () => {
  return (
    <Layout title="Home">
      <Hero></Hero>
      <Features></Features>
    </Layout>
  );
};

export default IndexPage;
