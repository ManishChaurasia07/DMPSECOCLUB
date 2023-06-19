import React from 'react';
import { Container, ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import About from 'sections/About';
import Project from 'sections/Project';
import Blog from 'sections/blog';
import Faq from 'sections/faq';
import Gallery from 'sections/gallery';
import TeamSection from 'sections/team';

export default function IndexPage() {
  return (
    <Container sx={{
      m: ['0px 40px 0', null, null, '30px auto', '35px -30px 0'],
    }}>
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="DMPS - ECOCLUB"
          description="Hi! We protect our environment by taking some of the steps like a collecting of e-waste which is hazardous to our environment and plastic. We all do some acitivity which can protect us from destroying the world!"
        />
        <Banner />
        <About />
        <Project />
        <Gallery />
        <TeamSection />
        <Blog />
        <Faq />
      </Layout>
    </ThemeProvider>
    </Container>
  );
}
