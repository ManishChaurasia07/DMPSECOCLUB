/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container, Heading, Text,  } from 'theme-ui';
import illustration from 'assets/images/blog/blog4.png';
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
    <Container sx={{ml : 10,}}>
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
            In today's technology-driven world, electronic devices have become an integral part of our daily lives. From smartphones and laptops to televisions and home appliances, we rely heavily on these gadgets for communication, entertainment, and convenience. However, with every new upgrade or replacement, a mounting problem emerges: hazardous electronic waste, or e-waste. The improper handling and disposal of e-waste pose significant risks to human health and the environment. In this blog, we will explore the growing concern of hazardous e-waste materials and the urgent need for responsible management.
            </Text>
            </motion.div>
            <Container>
            <RevealHorizontal>
            <Heading as="h1">
            The E-Waste Predicament:
            </Heading>
            </RevealHorizontal>
            <RevealVertical>
            <Text as="p">
            E-waste refers to discarded electronic devices, components, and accessories. This includes anything from old mobile phones and computers to refrigerators and printers. While technological advancements have undoubtedly improved our lives, they have also led to an alarming increase in e-waste generation worldwide. The United Nations University estimated that the global volume of e-waste reached a staggering 53.6 million metric tons in 2019, with only 17.4% being recycled appropriately.
            </Text>
            </RevealVertical>
            <RevealHorizontal>
            <Heading as="h1">
            Hazardous Components:
            </Heading>
            </RevealHorizontal>
            <RevealVertical>
            <Text as="p">
            Electronic devices contain various hazardous materials that pose severe risks to both the environment and human health. Some common hazardous substances found in e-waste include:
            </Text>
            </RevealVertical>
            <RevealHorizontal>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Heavy Metals</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            Devices like old CRT monitors, televisions, and batteries contain lead, mercury, cadmium, and other heavy metals. When disposed of improperly, these metals can contaminate soil and water sources, leading to severe health problems such as neurological disorders, kidney damage, and developmental issues in children.
              </Text>
            </Container>
            </Container>
            </RevealHorizontal>

            <RevealVertical>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Flame Retardants</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            Many electronic devices contain flame-retardant chemicals to prevent fire hazards. However, these chemicals, such as polybrominated diphenyl ethers (PBDEs), can persist in the environment, accumulate in living organisms, and potentially disrupt hormonal systems.
                </Text>
            </Container>
            </Container>
            </RevealVertical>

            <RevealHorizontal>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Persistent Organic Pollutants (POPs)</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            E-waste often contains POPs, such as polychlorinated biphenyls (PCBs), which were widely used in older electrical equipment. PCBs are highly toxic, and their improper disposal can lead to soil and water pollution, affecting ecosystems and human health.
                </Text>
            </Container>
            </Container>
            </RevealHorizontal>
              
            </Container>
            <RevealVertical>
            <Heading as="h1">
            Environmental Impact
            </Heading>
            </RevealVertical>
            <RevealHorizontal>
            <Text as="p">
            Improper disposal and management of e-waste have significant environmental consequences. When e-waste is incinerated or ends up in landfills, toxic substances leach into the soil and groundwater, contaminating ecosystems and endangering plants, animals, and aquatic life. Furthermore, the incineration process releases harmful gases and particulate matter into the atmosphere, contributing to air pollution and climate change.
            </Text>
            </RevealHorizontal>
            <RevealVertical>
            <Heading as="h1">
            Health Risks
            </Heading>
            </RevealVertical>
            <RevealHorizontal>
            <Text as="p">
            The hazardous substances present in e-waste can have detrimental effects on human health. Workers involved in informal e-waste recycling, often in developing countries, are at high risk of exposure to toxic substances. They face respiratory problems, skin disorders, and long-term health issues due to their direct contact with e-waste materials without proper protective measures. Additionally, nearby communities living near unregulated e-waste recycling sites can also suffer from exposure to hazardous chemicals.
            </Text> 
            </RevealHorizontal>
            <Container>
              <RevealVertical>
            <Heading as="h1">
            The Way Forward: Responsible E-Waste Management            
            </Heading>
            </RevealVertical>
            <RevealHorizontal>
            <Text as="p">
            Addressing the hazardous e-waste crisis requires a comprehensive and coordinated approach involving manufacturers, consumers, governments, and recycling industries. Here are some crucial steps we can take:
            </Text>
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
            Governments should enforce EPR policies, making manufacturers responsible for the entire lifecycle of their products, including proper recycling and disposal. This approach encourages companies to design products with better recyclability and promotes the establishment of formal recycling channels.
                </Text>
            </Container>
            </Container>
            </RevealVertical>

            <RevealHorizontal>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Safe Recycling and Disposal</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            Governments should invest in infrastructure and regulations that ensure safe and environmentally friendly recycling of e-waste. This includes promoting the establishment of certified e-waste recycling facilities and educating the public about proper disposal methods.
                </Text>
            </Container>
            </Container>
            </RevealHorizontal>

            <RevealVertical>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>Consumer Awareness</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            Raising awareness among consumers about the hazards of e-waste and the importance of responsible disposal is crucial. Encouraging device upgrades only when necessary and promoting recycling programs can help minimize e-waste generation.
                </Text>
            </Container>
            </Container>
            </RevealVertical>

            <RevealHorizontal>
            <Container>
                <img src={arrow} sx={styles.arrow}/>
                <Container sx={styles.als}>
            <Text as="vab">
           <code>International Cooperation</code> 
            </Text>
            </Container>
            <Container sx={styles.para}>
            <Text as="p">
            Cooperation between nations is vital in tackling the global e-waste problem. Developing countries need support from developed nations to build capacity for safe e-waste management and establish recycling facilities.
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
            The proliferation of electronic devices has brought undeniable benefits to our lives, but it has also given rise to a hazardous e-waste crisis. To protect our environment and safeguard human health, we must prioritize responsible e-waste management. By adopting extended producer responsibility, establishing proper recycling infrastructure, raising consumer awareness, and fostering international cooperation, we can mitigate the risks associated with hazardous e-waste materials and create a sustainable future for generations to come. Let us all play our part in tackling this pressing environmental issue.
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

