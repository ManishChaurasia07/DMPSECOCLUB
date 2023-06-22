/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Text, Button, ThemeProvider } from 'theme-ui';
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
import theme from 'theme';

const data = [
  {
    id: 1,
    image: gallery1,
    title: "E-Waste Recycling Drive",
    path: "/waste"
  },
];
const plastic = [
  {
    id: 2,
    image: gallery2,
    title: "Plastic Drive",
    path: "/"
  },
]
const drive = [
   
  {
    id: 3,
    image: gallery3,
    title: "Plastic",
    path: "/"
  }
]

const masonryOptions = {
  transitionDuration: 0,
};

const Project = () => {
  return (
    <Container>
      <Container sx={styles.Header}>
    <Header />
    </Container>
    <Box as="section" id="home" sx={styles.sec}>
      <SEO
          title="DMPS - ECOCLUB"
          description="Hi! We protect our environment by taking some of the steps like a collecting of e-waste which is hazardous to our environment and plastic. We all do some acitivity which can protect us from destroying the world!"
        />
    <Container id="gallery" as="section" sx={styles.section} >
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
        duration: 0.7,
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
            duration: 0.7,
          }}
          >
            <RevealVertical>
        <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
          <Container sx={styles.waste}>
        {data?.map((item) => (
      <Link href={item.path} key={item.id}>
        <a>
          <GalleryCard key={item.id} item={item} />
        </a>
      </Link>
    ))}
  </Container>
  <Container sx={styles.plastic}>
{plastic?.map((item) => (
      <Link href={item.path} key={item.id}>
        <a>
          <GalleryCard key={item.id} item={item} />
        </a>
      </Link>
    ))}
</Container>
  <Container sx={styles.drive}>
    {drive?.map((item) => (
      <Link href={item.path} key={item.id}>
        <a>
          <GalleryCard key={item.id} item={item} />
        </a>
      </Link>
    ))}
    </Container>
        </Box>
        </RevealVertical>
        </motion.div>
      </Container>
    </Container>
    <Container>
    </Container>

    <Container sx={styles.footer}> 
    <Footer />
    </Container>

    </Box>
    </Container>
  );
};

export default Project;

const styles = {
  Header: {
    m: ['-10px 0px -20px', null,null, '-30px 0px 20px', '35px -10px 0'],
  },
  plastic: {
    m: ['0px 10px 0px', null,null, '-380px 508px 0px', '35px -10px 0'],
  },
  waste: {
    m: ['0px 10px 0px', null,null, '0px px 0px', '35px -10px 0'],
  },
  drive: {
    m: ['0px 10px 0px', null,null, '-340px 1008px 0px', '0px 0px 0px'],
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
};
