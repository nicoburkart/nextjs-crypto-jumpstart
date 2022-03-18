import { ReactNode } from 'react';
import { Title } from '../atoms/Typography';
import { Feature } from '../molecules/Feature';
import { Container } from '../templates/Container';

export const Features = () => {
  return (
    <section className="text-gray-800 body-font bg-gradient-to-r from-primary to-secondary bg-animate-pulse">
      <Container className="py-24">
        <div className="text-center mb-20">
          <Title>Service</Title>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-green-100 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <Feature
            title="Consulting"
            desc="haldjfalsfjlsa hkjlhkl ljljkl hljkljjm jhlijljl jljljöjöj hjkhljl holjljlj fgjkghj hgkhjkl hlhjkjkhk hkhkfzkfg guilkgkg gugfujv"
            buttonUrl={'/'}
            icon="assets/icons/test.svg"
          ></Feature>
          <Feature
            title="Development"
            desc="haldjfalsfjlsa hkjlhkl ljljkl hljkljjm jhlijljl jljljöjöj hjkhljl holjljlj fgjkghj hgkhjkl hlhjkjkhk hkhkfzkfg guilkgkg gugfujv"
            buttonUrl={'/'}
            icon="assets/icons/test.svg"
          ></Feature>
          <Feature
            title="Tokenomics"
            desc="haldjfalsfjlsa hkjlhkl ljljkl hljkljjm jhlijljl jljljöjöj hjkhljl holjljlj fgjkghj hgkhjkl hlhjkjkhk hkhkfzkfg guilkgkg gugfujv"
            buttonUrl={'/'}
            icon="assets/icons/test.svg"
          ></Feature>
        </div>
      </Container>
    </section>
  );
};
