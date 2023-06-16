/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image, Button, Flex } from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import GalleryCard from 'components/cards/gallery-card';
import Link from 'next/link';
import gallery1 from 'assets/images/Inaugration.png';
import gallery2 from 'assets/images/Batches.png';
import gallery3 from 'assets/images/p.png';
import gallery4 from 'assets/images/winner.jpg';
import gallery5 from 'assets/images/patlu.png';
import gallery6 from 'assets/images/junior.png';
import { keyframes } from '@emotion/react';
import { IoIosArrowForward } from 'react-icons/io';
import RevealHorizontal from './RevealHori';
import RevealVertical from './RevealUp';

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
];
const mob = [
  {
    id: 4,
    image: gallery4,
    title: 'Winner of Plastic Drive',
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
]

const masonryOptions = {
  transitionDuration: 0,
};

const Gallery = () => {
  return (
    <Box id="gallery" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <RevealHorizontal>
        <SectionHeading
          sx={styles.heading}
          slogan="Gallery Section"
          title="Where art and imagination converge, step into our captivating gallery of boundless creativity"
        />
        </RevealHorizontal>
        <RevealVertical>
        <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
          {data?.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </Box>
        <Box as={Masonry} options={masonryOptions} sx={styles.phone}>
          {mob?.map((item) => (
            <GalleryCard key={item.id} item={item} sx={styles.phone}/>
          ))}
          </Box>
        </RevealVertical>
        <RevealHorizontal>
        <Link href="/photo">
        <Flex as="form" sx={styles.form}>
      <Button sx={styles.bs}>Explore Our Gallery <IoIosArrowForward size="16px" /></Button>
    </Flex>
        </Link>
        </RevealHorizontal>
      </Container>
    </Box>
  );
};

export default Gallery;

const fadeRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-5px);
  }
  to: {
    opacity: 1;
  }
`;
const styles = {
  form: {
    button: {
      m: ['20px auto 0', null, null, null, '5px 540px 0'],
      borderRadius: '40px',
      svg: {
        transform: 'translateX(3px)',
        width: ['13px', null, null, '16px'],
      },
      ':hover': {
        svg: {
          animation: `${fadeRight} 0.5s linear`,
        },
      },
    },
  },
  section: {
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
  },
  heading: {
    mb: [30, 30, 40, 60],
  },
  galleryWrapper: {
    mx: '-15px',
    
  },
  button: {
    minHeight: [50, 50, 50, 60],
    fontSize: [14, 14, 16],
    m: ['20px 36px 0', null, null, null, '5px 430px 0'],
    maxWidth: ['400px', null, null, null, '80px', '100%'],
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
    },
    ':hover': {
      svg: {
        ml: '5px',
      },
    },
  },
  phone: {
    '@media (max-width: 768px)' : {
      display: 'none',
    }
  }
};
