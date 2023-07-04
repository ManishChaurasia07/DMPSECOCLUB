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
    description: `We are a group of dedicated and passionate students from grades 8 to 10, united by our love for the environment. Our primary goal is to promote a sustainable and eco-friendly environment within our school and beyond.
    Through various initiatives and projects, we aim to raise awareness about environmental issues and encourage sustainable practices among students, teachers, and the whole school.
    `,
  },
  {
    id: 2,
    icon: icon6,
    path: '#!',
    title: 'WHAT WE DO',
    description: `We are passionate about creating a sustainable environment within our school and beyond. Our club focuses on launching various projects that actively promote eco-friendly practices, including waste reduction, plastic recycling, and responsible consumption. By implementing these initiatives, we strive to establish a greener and healthier school environment for all.`
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
            duration: 0.7,
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
    alignItem: 'center',
    ml: [-14, 400],
    width: 500,
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  grid: {
    gap: [3, null, 0],
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
