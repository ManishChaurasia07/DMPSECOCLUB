/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container, Heading, Text, Button } from 'theme-ui';
import { rgba } from 'polished';
import illustration from 'assets/images/0.png';
import SEO from 'components/seo';
import Header from './Header/header';
import Masonry from 'react-masonry-component';
import gallery1 from 'assets/images/Ewaste.jpg';
import gallery3 from 'assets/images/plastic.jpg';
import GalleryCard from './Gallery/Card';
import Card from "./Gallery/Data";
import Right from "./Gallery/Right";
import RightLeft from "./Gallery/Right2";
import Footer from './footer';
import { motion } from 'framer-motion';
import RevealVertical from 'sections/RevealUp';
import RevealHorizontal from 'sections/RevealHori';

const masonryOptions = {
  transitionDuration: 0,
};
const data = [
  {
    id: 1,
    image: gallery1,
  },
];
const data2 = [

  {
    id: 3,
    image: gallery3,
  },
]
const right = [
  {
    id: 1,
    image: gallery1,
  },
];
const rightleft = [
  {
    id: 3,
    image: gallery3,
  },
]

const Waste = () => {
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
            duration: 1.5,
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
        duration: 1.5,
      }}
    >
      <RevealHorizontal>
            <Heading as="h1">
              About the E-Waste Recycling Drive
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
        duration: 1.5,
      }}
    >
      <RevealVertical>
            <Text as="p">
            Ayika Foundation, in collaboration with The Recycling Company, hosted an e-waste recyclothon on the Indian Independence Day(15th August, 2022) to collect e-waste, spread awareness, and send the waste for recycling. Improper management of e-waste can cause diseases like asthma, cancer, skin diseases, other respiratory diseases, and so on. Simply throwing away e-waste can also cause soil contamination and deadening of plant and animal life dependent on that soil. 8 members from our team educated residents of 2 societies about the importance of recycling e-waste, and collected 50 kgs+ e-waste, with 800+ people participating in the recyclothon.
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
        duration: 1.5,
      }}
    >
          {data?.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
                {data2?.map((item) => (
            <Card key={item.id} item={item} />
          ))}
          </motion.div>
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
              {right?.map((item) => (
            <Right key={item.id} item={item} />
          ))}
          {rightleft?.map((item) => (
            <RightLeft key={item.id} item={item} />
          ))}
  </motion.div>
        </Box>
        </RevealHorizontal>
          </Container>
    <Footer />
    </Container>
  );
};
export default Waste;

const styles = {
  Header: {
    m: ['45px 0px 0px', null,null, '30px 8px 20px', '35px -10px 0'],
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
    pt: [318, null, null, 518, null, null, 19],
    pb: [13, null, null, 12, 7, 11, 0],
    m: ['-45px 0px 0', null, null, '-30px -10px auto', '35px -10px 0'],
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
    textAlign: ['center', null, null, null, 'center'],
    maxWidth: [null, null, 550, '880px', null, 'none'],
    m: ['20px 0', null, '40px auto', null, 0],
    textAlign: ['center', null, null, null, 'left'],
    },
  },
};

