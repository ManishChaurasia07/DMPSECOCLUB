/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Text, Button } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SEO from 'components/seo';
import SectionHeading from 'components/section-heading';
import GalleryCard from 'pages/Gallery/gallery-cards';
import gallery1 from 'assets/images/Ewaste.jpg';
import gallery2 from 'assets/images/metal.jpg';
import gallery3 from 'assets/images/plastic.jpg';
import Footer from './footer';
import Header from './Header/header';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RevealHorizontal from 'sections/RevealHori';
import RevealVertical from 'sections/RevealUp';

const data = [
  {
    id: 1,
    image: gallery1,
  },
];
const plastic  = [
  {
    id: 2,
    image: gallery2,
  },
]
const drive = [
  {
    id: 3,
    image: gallery3,
  },
]

const masonryOptions = {
  transitionDuration: 0,
};

const Gallery = () => {
  return (
    <Container>
    <Container id="gallery" as="section" sx={styles.section} >
      <Container sx={styles.Header}>
    <Header />
    </Container>
    <Container as="section" id="home" sx={styles.sec}>
      <SEO
          title="DMPS - ECOCLUB"
          description="Hi! We protect our environment by taking some of the steps like a collecting of e-waste which is hazardous to our environment and plastic. We all do some acitivity which can protect us from destroying the world!"
        />
      <Container sx={styles.container}>
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
        <SectionHeading
          sx={styles.heading}
          slogan="Transforming Ideas into Reality"
          title="EXPLORE OUR PROJECT"
        />
        </RevealHorizontal>
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
            <RevealVertical>
        <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
        {data?.map((item) => (
        <GalleryCard key={item.id} item={item}/>
          ))}
          {plastic?.map((item) => (
         <GalleryCard key={item.id} item={item}/>
          ))}
          {drive?.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </Box>
        </RevealVertical>
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
        <Link href="/waste">
        <Text sx={styles.Waste}>E-Waste Recycling Drive</Text>
        </Link>
        <Link href="/waste">
        <Text sx={styles.Plastic}>No Plastic</Text>
        </Link>
        <Link href="/photo">
        <Text sx={styles.Drive}>Plastic Drive</Text>
        </Link>
        </motion.div>
      </Container>
    </Container>
    <Container>
    </Container>

    <Container sx={styles.footer}> 
    <Footer />
    </Container>

    </Container>
    </Container>
  );
};

export default Gallery;


const styles = {
  Header: {
    m: ['-30px 0px 0', null,null, '-40px 8px 20px', '35px -10px 0'],
  },
  layout: {
    container: {
      maxWidth: [
        "100%",
        null,
        null,
        "720px",
        "970px",
        "1140px",
        "1260px",
        "1366px",
      ],
      paddingLeft: [6],
      paddingRight: [6],
      m: "0 auto",
    },
    main: {},
  },
  Waste: {
    color: '#fff',
    m: ['20px -24px 150px', null, null, '-20px -15px 5px', '95px -30px 0'],
    position: 'absolute',
    fontWeight: 700,
    fontSize: 5,
    lineHeight: 1.68,
    letterSpacing: 'heading',
    left: 100,
    bottom: 170,
    zIndex: 1,
    cursor: 'pointer',
  },
    
  Drive: {
    color: '#fff',
    m: ['auto -920px -460px', null, null, 'auto 15px 15px', '95px -30px 0'],
    position: 'absolute',
    fontWeight: 700,
    left: 1000,
    fontSize: 5,
    lineHeight: 1.68,
    letterSpacing: 'heading',
    bottom: 190,
    zIndex: 1,
    cursor: 'pointer',
  },
  Plastic: {
    m: ['auto -470px -180px', null, null, 'auto 5px 15px', '95px -30px 0'],
    color: '#fff',
    position: 'absolute',
    fontWeight: 700,
    fontSize: 5,
    lineHeight: 1.68,
    letterSpacing: 'heading',
    left: 550,
    bottom: 210,
    zIndex: 1,
    cursor: 'pointer',
  },
  section: {
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
  },
  heading: {
    mb: [30, 30, 40, 60],
    m: ['60px 0px 0', null, null, '100px 25px 0', '35px -30px 0'],
    color: ['#02073E'],
  },
  galleryWrapper: {
    mx: '35px',
  },
  footer:{
    m: ['auto 0px -100px', null, null, '100px -25px -100px', '95px -30px 0'],
  }
};
