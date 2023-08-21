/** @jsxRuntime classic */
/** @jsx jsx */
import { Button, Flex, jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Achintya from "../assets/images/Team/achintya.png";
import Member1 from '../assets/images/Team/person.jpg';
import SomaMitra from "../assets/images/Team/teacher.png";
import Manish from '../assets/images/Team/manish.png';
import { IoIosArrowForward } from 'react-icons/io';
import SectionHeading from 'components/section-heading';
import Link from 'next/link';
import RevealVertical from './RevealUp';
import RevealHorizontal from './RevealHori';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Charoo kalra',
    title: 'Charoo kalra',
    designation: 'Teacher Incharge',
  },
  {
    id: 2,
    imgSrc: SomaMitra,
    altText: 'Soma Mitra',
    title: 'Soma Mitra',
    designation: 'Teacher Incharge',
  },
  {
    id: 3,
    imgSrc: Achintya,
    altText: 'Achintya Pasricha',
    title: 'Achintya Pasricha',
    designation: 'Founder',
  },
  {
    id: 4,
    imgSrc: Manish,
    altText: 'Manish Chaurasia',
    title: 'Manish Chaurasia',
    designation: 'Vice President',
  },
];

export default function TeamSection() {
  return (
    <section sx={styles.section}>
      <Container>
        <RevealVertical>
        <SectionHeading
        sx={styles.heading}
          slogan="The Whole Team"
          title="Meet Our Talented Team Members"
        />
        </RevealVertical>
        <RevealHorizontal>
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
        </RevealHorizontal>
        <RevealVertical>
        <Container sx={styles.button}>
        <Link href="/team">
        <Flex as="form" sx={styles.form}>
      <Button sx={styles.bs}>Let's Meet<IoIosArrowForward size="16px" /></Button>
    </Flex>
        </Link>
        </Container>
        </RevealVertical>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['25px 60px', null, 0, null, null, '20px 30px'],
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      null,
      'repeat(2, 1fr)',
      null,
      'repeat(4, 1fr)',
    ],
  },
  heading: {
    mb: [30, 30, 40, 60],
    width: [390, 500],
    ml: ['0px', 400],
    fontFamily: 'heading',
  },
  button: {
    minHeight: [50, 50, 50, 60],
    fontSize: [6, 4, 4],
    m: ['30px 70px 0', null, null, null, '50px 540px 90px'],
    maxWidth: ['300px', null, null, null, '80px', '350px'],
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
    },
    ':hover': {
      svg: {
        ml: '5px',
      },
    },
  },
};
