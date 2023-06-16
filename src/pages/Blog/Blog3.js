/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container, Heading, Text,  } from 'theme-ui';
import illustration from 'assets/images/blog/Blog3.png';
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
            In today's digital age, electronic devices have become an integral part of our lives. From smartphones and laptops to televisions and refrigerators, we rely heavily on these gadgets for communication, entertainment, and daily tasks. However, our constant pursuit of the latest technology has led to an alarming increase in electronic waste, commonly known as e-waste. The improper disposal of e-waste poses significant environmental and health risks. To mitigate these challenges and move towards a sustainable future, recycling e-waste is not just an option; it is a necessity. In this blog, we will explore the importance of recycling e-waste and how individuals, businesses, and governments can contribute to this global effort.
            </Text>
            </motion.div>
            <Container>
              <RevealHorizontal>
            <Heading as="h1">
            Understanding the Impact of e-Waste
            </Heading>
            </RevealHorizontal>
            <RevealVertical>
            <Text as="p">
            E-waste consists of discarded electronic devices, including mobile phones, computers, tablets, printers, and electronic appliances. These items contain various hazardous materials such as lead, mercury, cadmium, and brominated flame retardants, which can contaminate soil, water, and air if not handled properly. When e-waste is improperly disposed of, it can release toxic substances that pose serious health risks to humans and damage ecosystems. Recycling e-waste is crucial to prevent environmental pollution, conserve valuable resources, and reduce the demand for raw materials.
            </Text>
            </RevealVertical>
            <RevealHorizontal>
            <Heading as="h1">
            Benefits of e-Waste Recycling
                        </Heading>
                        </RevealHorizontal>
            <Container sx={styles.Backh1}>
              <RevealVertical>
              <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Resource Conservation</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            Electronic devices contain precious metals like gold, silver, and copper, as well as other valuable materials such as aluminum and rare earth elements. Recycling e-waste allows these resources to be extracted and reused in the manufacturing of new products, reducing the need for mining and preserving natural resources.
</Text>
</Container>
            </Container>
            </RevealVertical>
            <RevealHorizontal>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Pollution Reduction</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            Proper recycling and disposal of e-waste minimize the release of toxic substances into the environment. This not only prevents soil and water pollution but also reduces air pollution, as e-waste often ends up in landfills where it can emit harmful gases when incinerated.
                </Text>
            </Container>
     
            </Container>
            </RevealHorizontal>
            <RevealVertical>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Energy Savings</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            Recycling e-waste requires significantly less energy compared to extracting raw materials. By recycling one ton of e-waste, it is possible to save energy equivalent to that required to power an average household for one year.
                </Text>
            </Container>
            </Container>
            </RevealVertical>
            </Container>
            <RevealHorizontal>
            <Heading as="h1">
            How to Recycle e-Waste
                        </Heading>
                        </RevealHorizontal>
            <Container sx={styles.Backh1}>
              <RevealVertical>
              <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Responsible Disposal</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            The first step in recycling e-waste is to ensure proper disposal. Avoid throwing electronic devices in the trash bin or dumping them in landfills. Instead, find local e-waste collection centers or contact authorized recycling facilities that can handle electronic waste appropriately.
</Text>
            </Container>
            </Container>
            </RevealVertical>
            <RevealHorizontal>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Donations and Buyback Programs</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            Consider donating functional electronic devices to schools, charities, or organizations that can repurpose them. Some manufacturers and retailers also offer buyback programs, providing incentives for returning old devices when purchasing new ones.
                </Text>
            </Container>
     
            </Container>
            </RevealHorizontal>
            <RevealVertical>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Recycling Initiatives</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            Stay informed about local recycling initiatives and events organized by governments, environmental agencies, or electronics manufacturers. These initiatives often provide convenient drop-off points or pick-up services for e-waste recycling.
                </Text>
            </Container>
            </Container>
            </RevealVertical>
            <RevealHorizontal>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Certified Recyclers</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            Ensure that the recycling facility you choose is certified and follows environmentally responsible practices. Look for certifications such as R2 (Responsible Recycling) or e-Stewards, which guarantee the safe handling of e-waste.
                </Text>
            </Container>
            </Container>
            </RevealHorizontal>
            </Container>
              
            </Container>
           <RevealVertical>
            <Heading as="h1">
            Government and Business Roles
                        </Heading>
                        </RevealVertical>
                        <RevealHorizontal>
                        <Text as="p">
                        Governments and businesses play a vital role in promoting and implementing e-waste recycling:
                        </Text>
                        </RevealHorizontal>
            <Container>
              <RevealVertical>
              <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Corporate Sustainability</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            Businesses can integrate e-waste recycling into their corporate sustainability initiatives. This includes implementing recycling programs within their organizations, partnering with certified recyclers, and encouraging employees to responsibly dispose of their personal electronic devices.
            </Text>
            </Container>
            </Container>
            </RevealVertical>
            <RevealHorizontal>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Legislation and Regulations</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            Governments should establish and enforce legislation that mandates proper e-waste disposal and recycling. They can also offer incentives or tax benefits to companies practicing responsible recycling and sustainable design.
                </Text>
            </Container>
     
            </Container>
            </RevealHorizontal>
            <RevealVertical>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Extended Producer Responsibility (EPR)</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            EPR programs hold manufacturers accountable for the entire lifecycle of their products, including recycling and proper disposal. Governments can implement EPR policies to ensure manufacturers take responsibility for the e-waste generated by their products.
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
            Recycling e-waste is essential for a sustainable future. By properly disposing of electronic devices and recycling their components, we can conserve resources, reduce pollution, and protect the environment and human health. It is a collective responsibility that requires the participation of individuals, governments, and businesses. Together, we can pave the way for a greener and more sustainable world, where technology and environmental consciousness go hand in hand. Let's embrace the recycling of e-waste as a crucial step towards a better tomorrow.
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
    Backh1: {
    m: ['20px 0', null, '50px 0px 0px ', null, '0 auto '],
    }
};

