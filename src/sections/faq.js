/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import RevealHorizontal from './RevealHori';
import RevealVertical from './RevealUp';
import Link from 'next/link';

const data = [
  {
    id: 1,
    title: `01. What is the purpose of an Eco Club?`,
    contents: (
      <div>
         The purpose of the Eco Club team is to promote environmental awareness and sustainability within the school.
        Our team has launched projects that combat plastic waste, reduce waste, and promote students to recycle paper.
      </div>
    ),
  },
  {
    id: 2,
    title: `02. Who are the people associated with the Eco Club?`,
    contents: (
      <div>
      The Eco Club, led by Achintya,  is comprised of a motivated group of students from 8th to 10th grade who are passionate about creating a sustainable environment within our school. Our mission is to promote environmental awareness and inspire positive change.
      </div>
    ),
  },
  {
    id: 3,
    title: `03. What is a goal or aim of an Eco Club team?`,
    contents: (
      <div>
        The goal of an Eco Club team is to promote environmental awareness, sustainability, 
        and conservation within the community. They aim to educate,
         inspire action, and create a greener and more environmentally conscious society. Through raising awareness, 
         implementing eco-friendly initiatives, and advocating for positive change, the team works towards
          protecting and preserving the planet for future generations.
      </div>
    ),
  },
  {
    id: 4,
    title: `04. How can we contribute our part?`,
    contents: (
      <div>
      We always appreciate people who are eager to play their part in saving the environment. 
      The easiest way you can contribute to the environment is taking part in the various projects. Your active participation will make a significant impact!
      </div>
    ),
  },
];

const Faq = () => {
  return (
    <section id="faq" sx={styles.section}>
      <Container>
        <RevealHorizontal>
        <SectionHeading
          sx={{ mb: [6, null, null, 12, 17],
          width: 400,
          }}
          slogan=""
          title="Frequently asked questions"
        />
  </RevealHorizontal>
  <RevealVertical>
        <Accordion items={data} />
        </RevealVertical>
        <RevealVertical>
          <Link href="/ContactForm">
        <Box sx={styles.loadMore}>
          <Button variant="text">More questions? Contact us!</Button>
        </Box>
        </Link>
        </RevealVertical>
      </Container>
    </section>
  );
};

export default Faq;

const styles = {
  section: {
    pt: [6, null, null, null, 6, 10, 1],
    pb: [12, null, null, null, 10, 22],
  },
  loadMore: {
    paddingTop: [3, null, null, 0],
    textAlign: 'center',
    ml: [10, 0],
    button: {
      backgroundColor: '#ECF2F7',
      color: '#738295',
      minHeight: 50,
      px: '22px',
      ':hover': {
        backgroundColor: 'primary',
        color: 'white',
      },
    },
  },
};
