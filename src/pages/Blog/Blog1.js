/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container, Heading, Text,  } from 'theme-ui';
import illustration from 'assets/images/blog/Blog11.png';
import SEO from 'components/seo';
import Header from '../Header/header';
import Footer from '../footer';
import arrow from "assets/images/arrow.svg";
import { motion } from 'framer-motion';
import RevealHorizontal from 'sections/RevealHori';
import RevealVertical from 'sections/RevealUp';

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
    <Container  sx={{
      ml: 10,
    }}>
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
            <Heading as="h1">
            Introduction
            </Heading>
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
            <Text as="p">
            In our modern world, it has become increasingly crucial to prioritize the health of our planet. The alarming rates of plastic pollution and electronic waste accumulation have placed our environment under immense pressure. To combat these issues, individuals, communities, and governments must come together to adopt sustainable practices. In this blog, we will explore the importance of reducing plastic use, as well as the significance of recycling electronic waste (e-waste) in preserving the Earth's delicate balance.
            </Text>
            </motion.div>
            <Container>
              <RevealHorizontal>
            <Heading as="h1">
            Plastic-Free Living
            </Heading>
            </RevealHorizontal>
            <RevealVertical>
            <Text as="p">
            Plastic has become an integral part of our daily lives, but its convenience comes at a steep cost to the environment. The improper disposal of plastic waste has led to devastating consequences, such as the pollution of oceans, the destruction of wildlife habitats, and the release of harmful toxins into our ecosystem. To address this issue, we must prioritize reducing our plastic consumption. Here are a few simple steps we can take:
            </Text>
            </RevealVertical>

            <RevealHorizontal>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Embrace reusable alternative</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            Replace single-use plastic items like water bottles, shopping bags, and straws with reusable alternatives made of eco-friendly materials such as glass, metal, or fabric.            </Text>
            </Container>
            </Container>
            </RevealHorizontal>

            <RevealVertical>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Say no to plastic packaging</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            Opt for products with minimal or plastic-free packaging. Choose items that come in recyclable or biodegradable packaging whenever possible.
                </Text>
            </Container>
            </Container>
            </RevealVertical>

            <RevealHorizontal>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Recycle effectively</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            Familiarize yourself with local recycling programs and guidelines. Separate recyclable materials from general waste and ensure they reach the appropriate recycling facilities.
                </Text>
            </Container>
            </Container>
            </RevealHorizontal>
            </Container>

            <Container>
              <RevealVertical>
            <Heading as="h1">
            The Urgency of E-Waste Recycling            
            </Heading>
            </RevealVertical>
            <RevealHorizontal>
            <Text as="p">
                The rapid advancement of technology has led to the generation of vast amounts of electronic waste. E-waste contains toxic materials such as lead, mercury, and cadmium, which can seep into the soil and water if improperly disposed of. Recycling e-waste not only prevents environmental contamination but also helps recover valuable resources. Here's why e-waste recycling is essential:
            </Text>
            </RevealHorizontal>
            <RevealVertical>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Resource conservation</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            E-waste contains valuable materials like precious metals, copper, and rare earth elements. By recycling e-waste, we can recover these resources, reducing the need for destructive mining practices and conserving natural resources.
                </Text>
            </Container>
            </Container>
            </RevealVertical>

            <RevealHorizontal>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Preventing environmental hazards</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            When e-waste ends up in landfills or incinerators, toxic substances can leach into the soil, water, and air, posing a significant threat to human and environmental health. Recycling e-waste ensures the safe handling and disposal of hazardous materials.
                </Text>
            </Container>
            </Container>
            </RevealHorizontal>

            <RevealVertical>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Promoting a circular economy</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            Recycling e-waste is an integral part of transitioning to a circular economy, where resources are reused and recycled, minimizing waste generation. By participating in e-waste recycling programs, we contribute to the creation of a sustainable and responsible consumption cycle.
                </Text>
            </Container>
            </Container>
            </RevealVertical>
            </Container>

            <RevealHorizontal>
            <Heading as="h1">
            Conclusion
            </Heading>
            </RevealHorizontal>
            <RevealVertical>
            <Text as="p">
            Preserving our planet for future generations requires collective action and a commitment to change. By reducing our dependence on plastic and embracing sustainable alternatives, we can curb pollution and protect our ecosystems. Simultaneously, recycling electronic waste is vital to minimize environmental damage and maximize resource recovery. Let's make conscious choices every day, ensuring that our actions contribute to a healthier and greener Earth. Together, we can create a sustainable future where plastic pollution and e-waste are mere relics of the past.
            </Text>
            </RevealVertical>
          </Container>
          </Container>
          </Container>
    <Footer />
    </Container>
  );
};
export default Waste;

const styles = {
 Header: {
    m: ['30px -10px 0', null,null, '15px -10px', '35px -20px 0'],
  },
  heading: {
    mb: [60, 30, 40, 60],
    color: ['#fff'],
  },
 
  section: {
    background: `transparent url(${illustration}) no-repeat center top / cover `,
    pt: [318, null, null, 518, null, null, 19],
    pb: [13, null, null, 85, 7, 11, 0],
    m: ['-45px 0px 0', null, null, '-30px -40px auto', '35px -10px 0'],
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
      fontFamily: 'sans-serif',
    fontSize: [ 20, null, null, '2em', 16, 45, 16],
    lineHeight: [1.31, null, null, 1.5, null, 1.26],
    letterSpacing: [0, null, null, null, '-1.5px'],
    color: '#010001',
  maxWidth: [null, null, 450, '700px', null, 'none'],
  m: ['20px 0', null, '-20px 356px', null, 0],
  textAlign: ['inherit', null, null, null, 'left'],
  },
  p:{
    fontSize: [ 18, null, null, '1.2rem', 12, 45, 16],
    lineHeight: [1.31, null, null, 1.5, null, 1.26],
    letterSpacing: [1, null, null, null, '-1.5px'],
    color: "#707170",
  maxWidth: [null, null, 550, '810px', null, 'none'],
  m: ['20px 0', null, '30px auto', null, 0],
  textAlign: ['inherit', null, null, null, 'left'],
  fontFamily: 'sans-serif',
  },
  vab: {
      fontFamily: 'headingAlt',
      fontSize: [ 18, null, null, '1.5rem', 12, 45, 16],
      lineHeight: [1.31, null, null, 1.5, null, 1.26],
      letterSpacing: [1, null, null, null, '-1.5px'],
      color: '#00000099',
    m: ['20px 0', null, '0px 400px 0px ', null, '0 auto '],
    textAlign: ['left', null, null, null, 'left'],
    backgroundColor: '#00000014',
    padding: '0.2em 0.6em 0.2em 0.4em',
  },
  },
  als: {
    m: ['-30px 50px 20px', null, '-40px 0px -13px', null, 0],
    },
  para: {
    maxWidth: [480, null, 550, '700px', null, 'none'],
    m: ['20px 30px', null, '20px 400px 0px', null, 0],
  },
  arrow: {
    height: '30px',
    width: '30%',
    m: ['0px -45px', null, '-23px 150px 0px', null, 0],
    },
    
};

