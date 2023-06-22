/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Text, Button, Grid, ThemeProvider } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SEO from 'components/seo';
import SectionHeading from 'components/section-heading';
import Member1 from '../assets/images/Team/member-1.png';
import Member2 from '../assets/images/Team/member-2.png';
import Member3 from '../assets/images/Team/member-1.png';
import Member4 from '../assets/images/Team/me.png';
import TeamCard from 'components/team-card';
import Footer from './footer';
import Header from './Header/header';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import RevealHorizontal from 'sections/RevealHori';
import theme from 'theme';

const data = [
    {
      id: 1,
      imgSrc: Member2,
      altText: 'Charoo kalra',
      title: 'Charoo kalra',
      designation: 'Incharge',
     
    },
    {
      id: 2,
      imgSrc: Member2,
      altText: 'Soma ..',
      title: 'Soma ..',
      designation: 'Head Incharge',
    },
    {
      id: 3,
      imgSrc: Member3,
      altText: 'Achintya Pasricha',
      title: 'Achintya Pasricha',
      designation: 'President',
    },
    {
      id: 4,
      imgSrc: Member4,
      altText: 'Manish Chaurasia',
      title: 'Manish Chaurasia',
      designation: 'Vice President & Developer',
    },
    {
        id: 5,
        imgSrc: Member3,
        altText: 'Shivansh Singh',
        title: 'Shivansh Singh',
        designation: 'Designer',
      },
      {
        id: 6,
        imgSrc: Member2,
        altText: 'Glory Sam',
        title: 'Glory Sam',
        designation: '...',
      },
      {
        id: 7,
        imgSrc: Member2,
        altText: 'Navya ...',
        title: 'Navya ..',
        designation: '...',
      },
      {
        id: 8,
        imgSrc: Member2,
        altText: 'Jagriti Bisht',
        title: 'Jagriti Bisht',
        designation: '...',
      },
      {
        id: 9,
        imgSrc: Member2,
        altText: 'Anushka Goel',
        title: 'Anushka Goel',
        designation: '...',
      },
      {
        id: 10,
        imgSrc: Member2,
        altText: 'Unnati Goel',
        title: 'Unnati Goel',
        designation: '...',
      },
      {
        id: 11,
        imgSrc: Member2,
        altText: 'Shefali ..',
        title: 'Shefali ..',
        designation: '...',
      },
      {
        id: 12,
        imgSrc: Member2,
        altText: 'Riddhi Bhardwaj',
        title: 'Riddhi Bhardwaj',
        designation: '...',
      },
      {
        id: 13,
        imgSrc: Member2,
        altText: 'Riddhi Bhardwaj',
        title: 'Riddhi Bhardwaj',
        designation: '...',
      },
      {
        id: 14,
        imgSrc: Member3,
        altText: 'Muhammad Bilal',
        title: 'Muhammad Bilal',
        designation: '...',
      },
      {
        id: 15,
        imgSrc: Member2,
        altText: 'Manya ..',
        title: 'Manya ..',
        designation: '...',
      },
      {
        id: 16,
        imgSrc: Member2,
        altText: 'Shamreen ..',
        title: 'Shamreen ..',
        designation: '...',
      },
  ];

const masonryOptions = {
  transitionDuration: 0,
};

const Team = () => {
  return (
    <Container>
    <Container sx={styles.Header}>
    <Header />
    </Container>
    <ThemeProvider theme={theme}>
    <Container>
    <Container id="gallery" as="section" sx={styles.section} >
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
          slogan="Meet the Dream Team: Uniting Talent, Passion, and Expertise!"
          title="Let's Meet our Team Members"
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
          <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
        </Box>
        </RevealHorizontal>
            </motion.div>
        
      </Container>
    </Container>
    </Container>
    <Footer />
    </Container>
    </ThemeProvider>
    </Container>
  );
};

export default Team;


const styles = {
  Header: {
    m: ['-20px 0px 0', null,null, '-35px 0px 20px', '35px -10px 0'],
  },
  section: {
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
  },
  heading: {
    mb: [30, 30, 40, 60],
    m: ['60px -105px 0', null, null, '100px 25px', '35px 0px 0'],
    color: ['#02073E'],
    width: ['250%', '100%'],
  },
  grid: {
    mt: [0, null, -6, null, 4],
    m: ['20px -80px 0px', null, null, '0px 0px', '0px 0px 0px'],
    gridGap: ['25px 55px', null, '20px 0px 0px', null, null, '20px 30px'],
    width: ['200%', '100%'],
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      null,
      'repeat(2, 1fr)',
      null,
      'repeat(4, 1fr)',
      'repeat(4, 1fr)', // Added for 512px mobile size
    ],

  },
  };
