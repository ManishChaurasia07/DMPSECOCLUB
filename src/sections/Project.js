/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Grid, Heading, Text, Button } from 'theme-ui';
import Image from 'components/image';
import support from 'assets/images/oh.png';
import { IoIosArrowForward } from 'react-icons/io';
import { keyframes } from '@emotion/react';
import Link from 'next/link';
import ScrollReveal from './RevealUp';
import RevealHorizontal from './RevealHori';
import RevealVertical from './RevealUp';

const Project = () => {
  return (
    
      <Box as="section" id='projects' sx={styles.section}>
      <Container>
        <Box sx={styles.grid}>
          <ScrollReveal>
          <Box sx={styles.illustration}>
            <Image src={support} loading="lazy" alt="support" sx={styles.image}/>
          </Box>
          </ScrollReveal>
          
          <Box sx={styles.content}>
            <RevealHorizontal>
            <Heading sx={styles.title}>
              Empowering Change: Eco Club Launches Ambitious Project to Create Sustainable Future
            </Heading>
            <Text as="p" sx={styles.summary}>
              In a bold move towards a sustainable future, the Eco Club has embarked on an ambitious project titled "Empowering Change." With a mission to combat environmental challenges and promote eco-consciousness, the club aims to spearhead transformative initiatives within the community. 
            </Text>
            </RevealHorizontal>
            <RevealVertical>
            <Container sx={styles.button}>
            <Link href="/project">
            <Button sx={styles.bs}>Explore Our Project <IoIosArrowForward size="16px" /></Button>
            </Link>
            </Container>
            </RevealVertical>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Project;

const fadeRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-5px);
  }
  to: {
    opacity: 1;
  }
`;

const styles = {
  section: {
    pt: [8, null, 12, 6, null, 15],
    pb: [null, null, null, 8, 0],
  },
  grid: {
    gap: [null, null, null, null, 2],
    display: ['flex', null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'unset'],
    alignItems: 'center',
    gridTemplateColumns: ['1fr', null, null, null, '470px 1fr', '1fr 549px'],
  },
  image:{
    m: ['-490px 10px 0', null, null, '30px auto', '35px -30px 0'],
  },
  button: {
    m: ['350px 10px 0', null, null, '30px auto', '35px -30px 0'],
  },
  bs: {
    borderRadius: '40px',
    svg: {
      transform: 'translateX(3px)',
      width: ['13px', null, null, '16px'],
    },
    ':hover': {
      svg: {
        animation: `${fadeRight} 0.5s linear`,
      },
    },
  },
  illustration: {
    textAlign: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    mt: [2, null, null, 0, 4, 7],
    img: {
      maxWidth: ['100%', null, null, null, null, '100%'],
    },
  },
  content: {
    marginTop: [null, null, null, null, null, 13],
    marginBottom: [null, null, null, null, null, 16],
    maxWidth: [null, null, null, 420, 560, 'none'],
    margin: [null, null, null, '0 auto', 'unset'],
    textAlign: ['center', null, null, null, 'left'],
    
  },
  title: {
    color: 'heading',
    fontFamily: 'headingAlt',
    fontSize: [4, null, null, 8, null, null, 11],
    fontWeight: 500,
    lineHeight: [1.33, null, 1.4, 1.53],
    letterSpacing: ['-0.5px', null, null, '-1px'],
    mb: 3,
    span: {
      backgroundSize: 'cover',
      px: 2,
    },
  },
  summary: {
    color: 'textSecondary',
    fontSize: ['13px', null, null, 2, '15px', 2],
    lineHeight: [1.86, null, null, null, 1.86, 2.25],
    maxWidth: 470,
  },
  list: {
    gap: '0 18px',
    gridTemplateColumns: ['repeat(2, 142px)', null, null, 'repeat(2, 200px)'],
    justifyContent: [null, null, null, 'center', 'unset'],
    listStyle: 'none',
    mt: [4, null, null, 5, 4, 5],
    p: 0,
    li: {
      fontSize: [0, 1, null, 2, '15px', 2],
      fontWeight: 500,
      alignItems: 'center',
      color: 'textSecondary',
      display: 'flex',
      lineHeight: [2.81, null, null, null, 2.2, 2.81],
    },
  },
};
