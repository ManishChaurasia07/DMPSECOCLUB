/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container, Heading, Text, Button } from 'theme-ui';
import illustration from 'assets/images/blog/Bax2.png';
import {motion} from "framer-motion";
import Link from 'next/link';

const Banner = () => {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
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
        duration: 1.5,
      }}
    >
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent}>
            <Heading as="h1">
            Cultivating green minds, shaping a sustainable world
            </Heading>
            <Text as="p">
              The phrase highlights the interconnectedness between 
              individual mindset and collective efforts in achieving
               a sustainable future.
            </Text>
            <button sx={styles.button}>Get Started</button>
          </Box>
        </Box>
    </motion.div>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  
  section: {
    background: `transparent url(${illustration}) no-repeat center top / cover `,
    pt: [18, null, null, 10, null, null, 0],
    pb: [12, null, null, 12, 7, 11, 0],
  },
  contentWrapper: {
    gap: [null, null, null, null, 8, 15],
    display: ['block', null, null, null, 'grid'],
    alignItems: 'center',
    gridTemplateColumns: [null, null, null, null, '1fr 1fr', '530px 1fr'],
    minHeight: ['auto', null, null, null, '42vh', '81vh', '100vh'],
    pt: [null, null, null, 50, 0, null],
    '@media only screen and (min-width:1501px) and (max-width:1600px)': {
      pt: 14,
    },
  },
  bannerContent: {
    maxWidth: [null, null, 450, '600px', null, 'none'],
    m: ['20px auto 0', null, null, null, '25px -20px 0'],
    textAlign: ['center', null, null, null, 'left'],
    h1: {
      fontFamily: 'headingAlt',
      fontSize: [ 9, null, null, 10, 12, 45, 56],
      lineHeight: [1.31, null, null, 1.5, null, 1.26],
      letterSpacing: [0, null, null, null, '-1.5px'],
      color: '#12100E',
    },
    p: {
      fontSize: ['13px', null, null, 2, 3],
      lineHeight: [1.87, null, null, 2, null, 2.33],
      color: '#000',
      maxWidth: [null, null, 370, 470],
      m: ['20px auto 0', null, null, null, '25px 0 0'],
    },
  },
  
  button: {
    zIndex: 999,
    m: ['20px auto 0', null, null, null, '25px 0 0'],
    backgroundColor: "transparent",
    fontFamily: "body",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer",
    display: "inline-flex",
    background: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    border: 'none',
    minHeight: "60px",
    padding: "0 30px",
    
    },
  
}


