/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Text, Button } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SEO from 'components/seo';
import SectionHeading from 'components/section-heading';
import GalleryCard from 'pages/Gallery/gallery-cards';
import gallery1 from 'assets/images/Inaugration.png';
import gallery2 from 'assets/images/gall2.png';
import gallery3 from 'assets/images/p.png';
import gallery4 from 'assets/images/winner.jpg';
import gallery5 from 'assets/images/patlu.png';
import gallery6 from 'assets/images/junior.png';
import gallery7 from 'assets/images/gallery1.jpeg';
import gallery8 from 'assets/images/gallery2.jpeg';
import gallery9 from 'assets/images/gallery3.jpeg';
import gallery10 from 'assets/images/gallery4.jpeg';
import gallery11 from 'assets/images/gallery5.jpeg';
import gallery12 from 'assets/images/gallery6.jpeg';
import gallery13 from 'assets/images/gallery7.jpeg';
import Footer from './footer';
import { rgba } from 'polished';
import Header from './Header/header';
import { motion } from 'framer-motion';
import RevealHorizontal from 'sections/RevealHori';

const data = [
  {
    id: 1,
    image: gallery1,
    title: 'Inaugration of EcoClub',
  },
  {
    id: 2,
    image: gallery2,
    title: 'Investiture Ceremony',
  },
  {
    id: 3,
    image: gallery3,
  },
  {
    id: 4,
    image: gallery4,
    title: 'Winner Class of Plastic Drive in Senior Branch'

  },
  {
    id: 5,
    image: gallery6,
  },
  {
    id: 6,
    image: gallery5,
    title: 'Plastic Drive',
  },
  {
    id: 7,
    image: gallery7,
    title: 'Plastic Drive',
  },
  {
    id: 8,
    image: gallery8,
    title: 'Plastic Drive',
  },
  {
    id: 9,
    image: gallery9,
    title: 'Plastic Drive',
  },
  {
    id: 10,
    image: gallery10,
    title: 'Parents signing a pledge to Save the environment',
  },
  {
    id: 11,
    image: gallery11,
    title: 'Parents signing a pledge to Save the environment',
  },
  {
    id: 12,
    image: gallery12,
    title: 'Awareness booth held at Junior Branch',
  },
  {
    id: 13,
    image: gallery13,
    title: 'Plastic Drive',
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Media = () => {
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
        duration: 0.7,
      }}
    >
        <SectionHeading
          sx={styles.heading}
          slogan=""
          title="VISUALS FROM OUR PROJECTS"
        />
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
            <RevealHorizontal>
        <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
          {data?.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </Box>
        </RevealHorizontal>
            </motion.div>
        
      </Container>
    </Container>
    </Container>
    <Footer />
    </Container>
  );
};

export default Media;


const styles = {
  Header: {
    m: ['-40px 0px 0', null,null, '-55px 0px 20px', '35px -10px 0'],
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
  section: {
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
},
  heading: {
    mb: [30, 30, 40, 60],
    m: ['100px 0px 0', null, null, '100px 25px 0', '35px -30px 0'],
    color: ['#02073E'],
  },
  galleryWrapper: {
    mx: '30px',
    ml: ['40px', '95px'],
    mt: ['20px', 0]
  },
  footer: {
    backgroundColor: '#F9FAFC',
    pt: 6,
  },
  footerTopInner: {
    gap: [50, null, null, null, 0, 50],
    display: ['grid'],
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      null,
      null,
      'repeat(3, 1fr)',
      'repeat(5, 1fr)',
    ],
    mb: [null, null, null, 7],
  },
  footerInner: {
    borderTop: [null, null, null, `1px solid #D9E0E7`],
    display: ['block', null, 'flex'],
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: ['30px 0 20px', null, null, '30px 0 35px', '35px 0 40px'],
  },
  copyright: {
    display: ['flex'],
    alignItems: 'center',
    flexDirection: ['column', null, null, null, 'row'],
    span: {
      fontSize: '14px',
      lineHeight: 1.29,
      color: rgba('#0F2137', 0.6),
      mt: ['18px', '18px', '7px'],
    },
  },

  footerNav: {
    listStyle: 'none',
    margin: ['15px 0 0', '15px 0 0', '0'],
    padding: 0,
    display: ['flex'],
    flexWrap: ['wrap', null, null, 'unset'],
    justifyContent: ['center', null, 'flex-start'],
    'li + li': {
      ml: ['18px', null, '20px'],
      '@media only screen and (max-width: 400px)': {
        mb: '10px',
      },
    },
    a: {
      color: 'textSecondary',
      fontSize: [1, null, null, 2],
      textDecoration: 'none',
    },
  },
};
