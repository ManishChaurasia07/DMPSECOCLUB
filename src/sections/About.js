/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';
import icon5 from 'assets/images/features/hein.png';
import icon6 from 'assets/images/features/goal.png';
import { motion } from 'framer-motion';
import ScrollReveal from './RevealUp';

const data = [
 
  {
    id: 1,
    icon: icon5,
    path: '#!',
    title: 'WHO WE ARE',
    description: `We are the dedicated members of the Eco Club team, united by our passion for the environment and our collective goal of making a positive impact on our planet. Comprising students, teachers, and community members, we come from diverse backgrounds but share a common vision: to protect and preserve the natural world. We believe that through education, awareness, and hands-on initiatives, we can inspire change and promote sustainable practices within our school and beyond.`,
  },
  {
    id: 2,
    icon: icon6,
    path: '#!',
    title: 'WHAT WE DO',
    description: `We are the dedicated members of the Eco Club team, united by our passion for the environment and our collective goal of making a positive impact on our planet. Comprising students, teachers, and community members, we come from diverse backgrounds but share a common vision: to protect and preserve the natural world. We believe that through education, awareness, and hands-on initiatives, we can inspire change and promote sustainable practices within our school and beyond.`,
  },
];
const About = () => {
  
  return (
    <section id="about" sx={styles.section}>
      <Container>
      <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          >
            <ScrollReveal>
        <SectionHeading
          sx={styles.heading}
          slogan="Empowering Change Through Innovation"
          title="ABOUT US"
        />
        </ScrollReveal>
       <ScrollReveal>
        <Box sx={styles.grid}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
        </ScrollReveal>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;

const styles = {
  section: {
    backgroundColor: '#F2F2F2',
    pt: [8, null, null, 12, null, 10],
    pb: [9, null, null, 12, 16, 28],
  },
  heading: {
    marginBottom: [7, null, null, 8, 7],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  grid: {
    gap: [8, null, 0],
    display: 'grid',
    maxWidth: 2000,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1r)',
      null,
      null,
      'repeat(2, 1fr)',
    ],
    borderTop: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    borderLeft: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
  },
};
