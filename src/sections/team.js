/** @jsxRuntime classic */
/** @jsx jsx */
import { Button, Flex, jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Member1 from '../assets/images/Team/member-1.png';
import Member2 from '../assets/images/Team/member-2.png';
import Member3 from '../assets/images/Team/member-1.png';
import Member4 from '../assets/images/Team/member-2.png';
import { IoIosArrowForward } from 'react-icons/io';
import SectionHeading from 'components/section-heading';
import Link from 'next/link';
import RevealVertical from './RevealUp';
import RevealHorizontal from './RevealHori';

const data = [
  {
    id: 1,
    imgSrc: Member4,
    altText: 'Charoo kalra',
    title: 'Charoo kalra',
    designation: 'Incharge',
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Soma ..',
    title: 'Soma ..',
    designation: 'Founder & Incharges',
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Achintya Pasricha',
    title: 'Achintya Pasricha',
    designation: 'President',
  },
  {
    id: 4,
    imgSrc: Member3,
    altText: 'Manish Chaurasia',
    title: 'Manish Chaurasia',
    designation: 'Web Developer & Designer',
  },
];

export default function TeamSection() {
  return (
    <section>
      <Container>
        <RevealVertical>
        <SectionHeading
        sx={styles.heading}
          slogan="Our Team"
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
    gridGap: ['35px 20px', null, 0, null, null, '20px 30px'],
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
  },
  button: {
    minHeight: [50, 50, 50, 60],
    fontSize: [6, 4, 4],
    m: ['40px 120px 0', null, null, null, '50px 540px 90px'],
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
