/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Text, Button, ThemeProvider } from 'theme-ui';
import SEO from 'components/seo';
import SectionHeading from 'components/section-heading';
import Ewaste from 'assets/images/ew.jpg';
import Plastic from 'assets/images/trash.jpg';
import Paper from 'assets/images/paper.jpg';
import Upcoming from "assets/images/upcoming.jpg";
import Footer from './footer';
import Header from './Header/header';
import { motion } from 'framer-motion';
import Link from 'next/link';
import emoji from 'assets/images/emoji.png'
import RevealHorizontal from 'sections/RevealHori';
import RevealVertical from 'sections/RevealUp';
import Image from 'components/image';
import { HiEmojiHappy } from 'react-icons/hi';

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
              <Container sx={{
                margin: ['20px 20px','0']
              }}>
       <Container sx={{
        transform: 'translate(0, -4px)',
        boxShadow: '14px 14px 40px rgba(118, 126, 173, .12)',
        width: ['90%','28%'],
        borderRadius: '20px',
        margin: ['20px 0px', '0px 60px'],
        display: 'flex'
       }}>

        <Container sx={{
          backgroundColor: '#fff',
          borderRadius: '20px',
          padding: '15px 16px 35px',
          transition: 'all .3s ease-out',
          overflow: 'hidden',
          boxShadow: '14px 14px 40px rgba(118, 126, 173, .08)',
        }}>
          <Image src={Plastic} sx={{ 
            width: '100%',
            minHeight: '220px',
            borderRadius: '14px',
            }}/>
            <Button sx={{
              backgroundColor: '#e9f9f0',
              borderRadius: '50px',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '10px',
              padding: '12px 20px',
              display: 'flex',
              marginTop: '15px',
              color: '#38cb89',
              letterSpacing: '1.5px',
              fontSize: '13px',
              fontWeight: '500'
            }}>PLASTIC COLLECTION</Button>
            
            <Text sx={{
              color: '#546681',
              maxWidth: '490px',
              fontSize: '17px',
              fontStyle: 'normal',
              lineHeight: 1.3,
            }}>
"Transforming waste into wonder through meaningful plastic collection – making a vital impact on our environment and future."
            </Text>
            <Link href='/plastic'>
            <Button sx={{
              backgroundColor: '#484dff',
              borderRadius: '50px',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '10px',
              marginTop: '20px',
              padding: '12px 20px',
              display: 'flex',
              marginTop: '15px',
              color: '#fff',
              letterSpacing: '1.5px',
              fontSize: '16px',
              ':hover': {
              backgroundColor: "#3898ec",
              border: 0,
              cursor: 'pointer',
              lineHeight: 'inherit',
              textDecoration: 'none',
              }
            }}>Learn More</Button>
            </Link>
        </Container>
       </Container>
       <Container sx={{
        transform: 'translate(0, -4px)',
        boxShadow: '14px 14px 40px rgba(118, 126, 173, .12)',
        width: ['90%','28%'],
        borderRadius: '20px',
        margin: ['0px 0px', '-475px 490px 100px'],
        display: 'flex'
       }}>

        <Container sx={{
          backgroundColor: '#fff',
          borderRadius: '20px',
          padding: '15px 16px 35px',
          transition: 'all .3s ease-out',
          overflow: 'hidden',
          boxShadow: '14px 14px 40px rgba(118, 126, 173, .08)',
        }}>
          <Image src={Ewaste} sx={{ 
            width: '100%',
            minHeight: '220px',
            borderRadius: '14px',
            }}/>
            <Button sx={{
              backgroundColor: '#e9f9f0',
              borderRadius: '50px',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '10px',
              padding: '12px 20px',
              display: 'flex',
              marginTop: '15px',
              color: '#38cb89',
              letterSpacing: '1.5px',
              fontSize: '13px',
              fontWeight: '500'
            }}>E-WASTE</Button>
            
            <Text sx={{
              color: '#546681',
              maxWidth: '490px',
              fontSize: '17px',
              fontStyle: 'normal',
              lineHeight: 1.3,
            }}>
              "Technotrash Turnaround: Act Today, Recycle E-Waste. Transforming Waste into Sustainable Progress."
            </Text>
            <Link href="/ewaste">
            <Button sx={{
              backgroundColor: '#484dff',
              borderRadius: '50px',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '10px',
              marginTop: '20px',
              padding: '12px 20px',
              display: 'flex',
              marginTop: '15px',
              color: '#fff',
              letterSpacing: '1.5px',
              fontSize: '16px',
              ':hover': {
              backgroundColor: "#3898ec",
              border: 0,
              cursor: 'pointer',
              lineHeight: 'inherit',
              textDecoration: 'none',
              }
            }}>Learn More</Button>
            </Link>
        </Container>
       </Container>
       <Container sx={{
        transform: 'translate(0, -4px)',
        boxShadow: '14px 14px 40px rgba(118, 126, 173, .12)',
        width: ['90%','28%'],
        borderRadius: '20px',
        margin: ['20px 0px -60px', '-574px 930px 100px'],
        display: 'flex',
       }}>

        <Container sx={{
          backgroundColor: '#fff',
          borderRadius: '20px',
          padding: '15px 16px 35px',
          transition: 'all .3s ease-out',
          overflow: 'hidden',
          boxShadow: '14px 14px 40px rgba(118, 126, 173, .08)',
        }}>
          <Image src={Upcoming} sx={{ 
            width: '100%',
            minHeight: '220px',
            borderRadius: '14px',
            }}/>
            <Button sx={{
              backgroundColor: '#e9f9f0',
              borderRadius: '50px',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '10px',
              padding: '12px 20px',
              display: 'flex',
              marginTop: '15px',
              color: '#38cb89',
              letterSpacing: '1.5px',
              fontSize: '13px',
              fontWeight: '500'
            }}>In-Progress</Button>
            
            <Text sx={{
              color: '#546681',
              maxWidth: '490px',
              fontSize: '17px',
              fontStyle: 'normal',
              lineHeight: 1.3,
            }}>
    Exciting Project Coming Soon! Stay tuned for an innovative endeavor that will transform the way you experience. Launching shortly.<img src={emoji} sx={{
      height: '5%',
      width: '5%',
    }} />
            </Text>
            <Link href="">
            <Button sx={{
              backgroundColor: '#484dff',
              borderRadius: '50px',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: ['10px','10px'],
              marginTop: '20px',
              padding: '12px 20px',
              display: 'flex',
              marginTop: '15px',
              color: '#fff',
              letterSpacing: '1.5px',
              fontSize: '16px',
              ':hover': {
              backgroundColor: "#3898ec",
              border: 0,
              cursor: 'pointer',
              lineHeight: 'inherit',
              textDecoration: 'none',
              }
            }}>Learn More</Button>
            </Link>
        </Container>
       </Container>

       </Container>
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
  section: {
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
    padding: ['120px 5%', '120px 5%'],
    background: `url(https://uploads-ssl.webflow.com/64c29158c3eb63eb40104787/64c29158c3eb63eb40104861_bg_shade.svg) no-repeat top / cover`,
  },
  heading: {
    mb: [30, 30, 40, 60],
    m: ['0px 0px 0', null, null, '30px 25px 0', '35px -30px 0'],
    color: ['#02073E'],
    width: ['100%', '100%'],
    fontFamily: 'Inter, sans-serif',
  },
};
