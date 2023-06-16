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
    title: `01. What is the purpose of our eco club ?`,
    contents: (
      <div>
        The purpose of the eco club team is to promote environmental awareness 
        and sustainability within the school or community. The team may engage in activities  
        such as organizing recycling programs, implementing energy-saving 
        initiatives, raising awareness about environmental issues, and undertaking projects
         to protect and restore the local ecosystem.
      </div>
    ),
  },
  {
    id: 2,
    title: `02. What types of projects or initiatives does the eco club team undertake?`,
    contents: (
      <div>
        Eco club teams undertake various projects and initiatives depending on their goals 
        and targeted environmental issues. These commonly include organizing recycling
         programs, implementing energy-saving measures, raising awareness through campaigns,
          participating in community clean-ups, and collaborating with other organizations for broader initiatives. 
      </div>
    ),
  },
  {
    id: 3,
    title: `03. What activities does the eco club team organize?`,
    contents: (
      <div>
        The eco club team organizes activities such as recycling programs, 
        energy-saving measures, awareness campaigns, community clean-ups, educational 
        workshops, policy advocacy, and collaborations with other organizations.
         Their goal is to promote environmental awareness and sustainability, inspiring
          individuals to take action for a greener future.
      </div>
    ),
  },
  {
    id: 4,
    title: `04. What is a goal or aim of an eco club team?`,
    contents: (
      <div>
        The goal of an eco club team is to promote environmental awareness, sustainability, 
        and conservation within the community. They aim to educate,
         inspire action, and create a greener and more environmentally conscious society. Through raising awareness, 
         implementing eco-friendly initiatives, and advocating for positive change, the team works towards
          protecting and preserving the planet for future generations.
      </div>
    ),
  },
  {
    id: 5,
    title: `05. How can the eco club make a broader impact beyond the school?`,
    contents: (
      <div>
        The eco club can make a broader impact by partnering with local environmental
         organizations, participating in community initiatives, organizing awareness 
         campaigns, advocating for sustainable policies, and using social media platforms 
         to engage a wider audience.
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
          sx={{ mb: [6, null, null, 12, 17] }}
          slogan="Get your question answer"
          title="Frequently asked question"
        />
  </RevealHorizontal>
  <RevealVertical>
        <Accordion items={data} />
        </RevealVertical>
        <RevealVertical>
          <Link href="/ContactForm">
        <Box sx={styles.loadMore}>
          <Button variant="text">Still Question? Contact us</Button>
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
