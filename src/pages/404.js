import Link from 'next/link'
import { Box, Button, Container, Heading, ThemeProvider } from 'theme-ui'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { keyframes } from '@emotion/react';
import error from "assets/images/404.png";
import Header from './Header/header';
import Footer from './footer';
import SEO from 'components/seo';

export default function FourOhFour() {
  return <>
  <Container sx={styles.Header}>
    <Header />
  </Container>

  <Box as="section" id="home" sx={styles.section}>
      <Container>
       <SEO
          title="DMPS - ECOCLUB"
          description="Hi! We protect our environment by taking some of the steps like a collecting of e-waste which is hazardous to our environment and plastic. We all do some acitivity which can protect us from destroying the world!"
        />
        </Container>
        </Box>

    <Box as="section" id="home" sx={styles.buttons}>
      <Container sx={styles.button}>
    <Link href="/">
    <Button sx={styles.bs}> <IoIosArrowBack size="16px" />Back</Button>
      </Link>
      </Container>
    </Box>
    <Footer />
  </>
}

const fadeLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(5px);
  }
  to: {
    opacity: 1;
  }
`;

const styles = {
    section: {
      background: `transparent url(${error}) no-repeat center / cover `,
      pt: [208, null, null, 650, null, null, 0],
      pb: [102, null, null, 12, 7, 11, 0],
      m: ['0px 100px 0', null, null, '0px 0px 0', '0px 0px 0'],

    },
    buttons: {
      m: ['-100px 40px 0', null, null, '30px 0px 150px', '35px -30px 0'],
    },
    button: {
        m: ['30px 100px 0', null, null, '-130px 630px ', '35px -30px 0'],
      },
      bs: {
        border: '2px solid #3183ff',
        backgroundColor: 'transparent',
        color: '#3183ff',
        padding: '14px 48px',
        cursor: 'pointer',
        borderRadius: '40px',
        ml: '40px',
        display: 'flex',
        mt: '-20px',
        svg: {
          transform: 'translateX(3px)',
          width: ['13px', null, null, '16px'],
          display: 'inline-flex',
          mr: 2,
          maxWidth: '30%',
          ml: '-5px',
          mt: '3px',
        },
        ':hover': {
          backgroundColor: "#3183ff",
          color: "#F2F2F2",
          svg: {
            animation: `${fadeLeft} 0.5s linear`,
          },
        },
      },
   
}