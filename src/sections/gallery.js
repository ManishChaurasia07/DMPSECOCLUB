/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image, Button, Flex } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import GalleryCard from 'components/cards/gallery-card';
import Link from 'next/link';
import gallery1 from 'assets/images/Inaugration.png';
import gallery2 from 'assets/images/gall2.png';
import gallery3 from 'assets/images/p.png';
import gallery4 from 'assets/images/winner.jpg';
import gallery5 from 'assets/images/patlu.png';
import gallery6 from 'assets/images/junior.png';
import background from "assets/images/triangle.svg";
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
];

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
        </RevealVertical>
        <RevealHorizontal>
        <Container sx={styles.button}>
            <Link href="/media">
            <Button sx={styles.bs}>Explore Our Gallery<IoIosArrowForward size="16px" /></Button>
            </Link>
            </Container>
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
  button: {
    m: ['10px 50px 0px', null, null, '0px auto', '5px 530px -40px'],
  },
  bs: {
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
  section: {
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
    padding: ['120px 5%', '120px 5%'],
    background: `url(https://uploads-ssl.webflow.com/64c29158c3eb63eb40104787/64c29158c3eb63eb40104861_bg_shade.svg) no-repeat top / cover`,
  },
  heading: {
    mb: [30, 30, 40, 10],
    width: [390, 1220],
    ml: ['-10px', 10],
    fontFamily: 'headingAlt'
  },
  galleryWrapper: {
    mx: '-105px',
    ml: ['-35px', '-40px'],
  },
  phone: {
    '@media (max-width: 768px)' : {
      display: 'none',
    }
  }
};
