/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container, Heading, Text, Button, Image } from 'theme-ui';
import { rgba } from 'polished';
import illustration from 'assets/images/plastics.png';
import SEO from 'components/seo';
import Header from './Header/header';
import Masonry from 'react-masonry-component';
import Footer from './footer';
import Image1 from '../assets/images/plastic1.png';
import Image2 from "../assets/images/plastic2.png";
import { motion } from 'framer-motion';
import RevealVertical from 'sections/RevealUp';
import RevealHorizontal from 'sections/RevealHori';

const masonryOptions = {
  transitionDuration: 0,
};


const Plastic = () => {
  return (
    <Container>
      <Container sx={styles.Header}>
       <Header />
      </Container>
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
    <Box as="section" id="home" sx={styles.section}>
      <Container>
       <SEO
          title="DMPS - ECOCLUB"
          description="Hi! We protect our environment by taking some of the steps like a collecting of e-waste which is hazardous to our environment and plastic. We all do some acitivity which can protect us from destroying the world!"
        />
      </Container>
    
    </Box>
    </motion.div>
    <Container sx={styles.contentWrapper}>
          <Container sx= {styles.bannerContent}>
          <motion.div
      initial={{
        x: -500,
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
      <RevealHorizontal>
            <Heading as="h1">
              About Plastic Drive
            </Heading>
            </RevealHorizontal>
            </motion.div>
            <motion.div
      initial={{
        x: -500,
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
      <RevealVertical>
            <Text as="p">
            We have initiated a plastic collection drive to foster a sustainable environment. In classrooms from 5th to 8th grade, we have placed recyclable bins and encouraged students to deposit any plastic they come across during class. At the end of each month, we recycle the collected plastic through our partnered organizations and replace the bins. The class that collects the most waste is termed the 'start class of the month' and awarded in the assembly. Our dedicated team of driven and motivated students from 8th to 10th grade is committed to making the school a sustainable environment for all.
</Text>
            </RevealVertical>
            </motion.div>
          </Container>
          <RevealHorizontal>
          <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
          <motion.div
      initial={{
        x: -500,
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
      <Image src={Image1} sx={{
        width: ['100%','25%'],
        borderRadius: '10px',
        m: ['20px 20px', '20px 340px']
      }}/>
       <Image src={Image2} sx={{
        width: ['100%','25%'],
        borderRadius: '10px',
        m: ['20px 20px', '-880px 780px 35px'],
        boxShadow: '14px 14px 40px rgba(118, 126, 173, .12)',

      }}/>
          </motion.div>
         
        </Box>
        </RevealHorizontal>
          </Container>
    <Footer />
    </Container>
  );
};
export default Plastic;

const styles = {
  Header: {
    m: ['45px 0px 0px', null,null, '30px 0px 20px', '35px -10px 0'],
  },
  heading: {
    mb: [60, 30, 40, 60],
    color: ['#fff'],
  },
  primary: {
    variant: "buttons.default",
    border: "2px solid #56BBD0",
    color: "white",
    bg: "transparent",
    minHeight: "30px",
    m: ['0px 10px 0', null, null, '-10px -8px auto', '35px -10px 0'],
    padding: "0 30px",
    "&:hover": {
      bg: "#56BBD0",
    },
  },
 
  section: {
    background: `transparent url(${illustration}) no-repeat center top / cover `,
    pt: [278, null, null, 608, null, null, 19],
    pb: [15, null, null, 12, 7, 11, 0],
    m: ['-45px -20px 0px', null, null, '-30px 0px auto', '35px -10px 0'],
  },
  contentWrapper: {
    gap: [null, null, null, null, 8, 15],
    display: ['block', null, null, null, 'grid'],
    alignItems: 'center',
    gridTemplateColumns: [null, null, null, null, '1fr 1fr', '530px 1fr'],
    minHeight: ['auto', null, null, null, '42vh', '81vh', '100vh'],
    pt: [null, null, null, 50, 0, null],
    '@media only screen and (min-width:1501px) and (max-width:1600px)': {
      pt: 64,
    },
  },
  bannerContent: {
    h1: {
      fontFamily: 'headingAlt',
      fontSize: [ 20, null, null, 40, 16, 45, 16],
      lineHeight: [1.31, null, null, 1.5, null, 1.26],
      letterSpacing: [0, null, null, null, '-1.5px'],
      color: 'textSecondary',
    textAlign: ['center', null, null, null, 'center'],
    maxWidth: [null, null, 450, '700px', null, 'none'],
    m: ['20px 0', null, '-20px auto', null, 0],
    textAlign: ['center', null, null, null, 'left'],
    },
    p:{
      fontFamily: 'headingAlt',
      fontSize: [ 18, null, null, 20, 12, 45, 16],
      lineHeight: [1.31, null, null, 1.5, null, 1.26],
      letterSpacing: [1, null, null, null, '-1.5px'],
      color: rgba(0, 0, 0, 0.8),
    textAlign: ['left', 'center', null, null, 'center'],
    maxWidth: [null, null, 550, '880px', null, 'none'],
    m: ['20px 20px', null, '40px auto', null, 0],
    width: '100%'
    },
  },
  right: {
    m: ['20px 0', null, '-630px auto', null, 0],
  }
};
