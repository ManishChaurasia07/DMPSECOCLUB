/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, ThemeProvider } from 'theme-ui';
import SEO from 'components/seo';
import Footer from './footer';
import Header from './Header/header';
import { motion } from 'framer-motion';
import theme from 'theme';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import Post from 'components/cards/post';
import Poster1 from 'assets/images/blog/ma.png';
import Poster2 from 'assets/images/blog/Poster2.png';
import Poster3 from 'assets/images/blog/s.png';
import Poster4 from 'assets/images/blog/Poster3.png';
import RevealVertical from 'sections/RevealUp';

const data = [
  {
    id: 1,
    image: Poster1,
    title: 'Saving the Earth: Embracing a Plastic-Free Future and Recycling E-Waste',
    desc:  'This blog explores the importance of plastic reduction and e-waste recycling for Earth preservation',
    link: 'Blog/Blog1',
  },
  {
    id: 2,
    image: Poster2,
    title: '7 Simple Ways to Save the Environment and Create a Sustainable Future',
    desc: '',
    link: 'Blog/Blog2',
  },
  {
    id: 3,
    image: Poster3,
    title: 'The Rising Tide of Hazardous E-Waste Materials: A Looming Environmental Crisis',
    desc: '',
    link: 'Blog/Blog4',
  },
  {
    id: 4,
    image: Poster4,
    title: 'Recycling e-Waste: Towards a Sustainable Future',
    desc: '',
    link: 'Blog/Blog3',
  },
];

const masonryOptions = {
  originTop: false,
};

const Blog = () => {
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
          slogan="Latest Blog"
          title="Our Recent Blog "
        />
        </motion.div>
        <RevealVertical>
            <Container sx={styles.image}>
        <Masonry sx={styles.masonry} options={masonryOptions}>
          {data.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Masonry>
        </Container>
        </RevealVertical>        
      </Container>
    </Container>
    </Container>
    <Footer />
    </Container>
    </ThemeProvider>
    </Container>
  );
};

export default Blog;


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
    m: ['60px -85px 0', null, null, '100px 25px', '35px 0px 0'],
    color: ['#02073E'],
    width: ['250%', '100%'],
  },
  masonry: {
    maxWidth: 1250,
    mx: [-15, null, null, null, 'auto'],
    ml: [-167, null],
  },
  image: {
    ml: [10, 0],
  }
  };
