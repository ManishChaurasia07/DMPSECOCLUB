/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container, Heading, Text,  } from 'theme-ui';
import illustration from 'assets/images/blog/Blog2.png';
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
            <Heading as="h1">
            Introduction
            </Heading>
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
            <Text as="p">
            The environment is the bedrock of our existence, providing us with clean air, water, and resources necessary for survival. However, with the escalating challenges of climate change, pollution, and resource depletion, it has become imperative for us to take action to save our planet. Fortunately, every individual has the power to make a difference. In this blog, we will explore seven simple yet impactful ways to save the environment and pave the way for a sustainable future.
            </Text>
            </motion.div>
            <Container>
              <RevealHorizontal>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Embrace Renewable Energy</code>
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            One of the most significant contributors to climate change is our reliance on fossil fuels for energy production. Transitioning to renewable energy sources such as solar, wind, and hydro power can significantly reduce greenhouse gas emissions. Consider installing solar panels on your roof or support local renewable energy initiatives to contribute to a cleaner and greener future.
                 </Text>
            </Container>
            </Container>
            </RevealHorizontal>

            <RevealVertical>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Reduce, Reuse, Recycle:</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            The three R's – reduce, reuse, and recycle – form the foundation of sustainable waste management. By reducing our consumption, reusing items whenever possible, and recycling materials, we can minimize the amount of waste ending up in landfills and conserve resources. Opt for reusable shopping bags, avoid single-use plastics, and segregate recyclable materials to make a tangible impact on the environment.
                </Text>
            </Container>
            </Container>
            </RevealVertical>

            <RevealHorizontal>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Conserve Water</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            Water scarcity is a pressing concern in many regions of the world. Conserving water is not only essential for sustainable living but also helps preserve aquatic ecosystems. Simple habits such as fixing leaks, using water-efficient appliances, and reducing shower time can go a long way in saving water. Additionally, consider harvesting rainwater for gardening or household use.
                </Text>
            </Container>
            </Container>
            </RevealHorizontal>
            </Container>

            <Container>
              <RevealVertical>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Adopt Eco-friendly Transportation</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            The transportation sector is a significant contributor to air pollution and greenhouse gas emissions. By choosing eco-friendly transportation options, we can reduce our carbon footprint. Consider walking, cycling, or using public transportation whenever possible. If you need a personal vehicle, opt for electric or hybrid models. Carpooling or ride-sharing is another effective way to reduce emissions.
                </Text>
            </Container>
            </Container>
              </RevealVertical>

            <RevealHorizontal>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Support Sustainable Agriculture</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            Our food choices have a profound impact on the environment. Supporting sustainable agriculture practices such as organic farming, promoting local and seasonal produce, and reducing food waste can contribute to a healthier planet. Consider growing your own fruits and vegetables, supporting local farmers' markets, and embracing plant-based meals to reduce the environmental footprint of your diet.
                </Text>
            </Container>
            </Container>
            </RevealHorizontal>

            <RevealVertical>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Plant Trees and Preserve Green Spaces</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            Trees are nature's superheroes, absorbing carbon dioxide, releasing oxygen, and providing habitat for countless species. Engage in tree-planting initiatives in your community, create green spaces in your surroundings, or support organizations working to protect forests and natural habitats. By doing so, you can mitigate climate change, improve air quality, and support biodiversity.
                </Text>
            </Container>
            </Container>
            </RevealVertical>

            <RevealHorizontal>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Raise Awareness and Engage</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            Saving the environment is a collective effort, and raising awareness about environmental issues is crucial. Engage in conversations with friends, family, and colleagues about the importance of sustainable living. Educate yourself about environmental challenges and encourage others to take action. Join local environmental groups, participate in clean-up drives, or volunteer for conservation projects to make a tangible difference in your community.
                </Text>
            </Container>
            </Container>
            </RevealHorizontal>

            </Container>
            <RevealVertical>
            <Heading as="h1">
            Conclusion
            </Heading>
            </RevealVertical>
            <RevealHorizontal>
            <Text as="p">
            The task of saving the environment may seem daunting, but every small action adds up to create a significant impact. By embracing renewable energy, practicing waste management, conserving water, adopting eco-friendly transportation, supporting sustainable agriculture, planting trees, and raising awareness, we can contribute to a sustainable future for ourselves and generations to come. Remember, the power to save the environment lies within each of us. 
            Let's take action today for a greener and healthier tomorrow.
            </Text>
            </RevealHorizontal>
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
    m: ['30px 0px 0', null,null, '15px 0px 0px', '35px -20px 0'],
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

