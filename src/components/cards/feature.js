/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image, Heading, Text, Container, css } from 'theme-ui';

const Feature = ({ data, ...props }) => {
  return (
    <section sx={styles.section}>
    <Box
    sx={{
      display: ['flex', null, null, null, 'flex'],
      flexDirection: ['column', null, null, null, 'column'],
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Container sx={styles.feature} {...props}>
      <Box as="figure">
        <Image src={data?.icon} alt={data?.title} />
      </Box>
      <Box>
        <Heading as="h4">{data?.title}</Heading>
        <Text as="p">{data?.description}</Text>
      </Box>
    </Container>
    </Box>
    </section>
  );
};

export default Feature;

const styles = {
  section: {
    ml: [0, 2],
  },
  feature: {
 
    width: [400, null, 640, null],
    m: ['0px 0px 0px', null, null, '30px auto', '0px 0px 0'],
    padding: [
      '10px 20px 20px 20px',
      null,
      null,
      '45px 30px 55px',
      '40px 25px 50px 65px',
      '50px 34px 40px 3px',
    ],
    transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
    textAlign: ['center', null, null, null, null, 'center'],
    boxShadow: '20px 0px 100px 100px rgba(59, 90, 136, 0.05)',
    transition: '0.3s ease 0s',
    borderRadius: '20px',
      ':hover': {
        backgroundColor: '#fff',
        borderColor: 'white',
        transform: 'translate(-2px, -2px)',
      },
    figure: {
      display: 'flex',
      alignItems: 'center',
      minWidth: [70],
      mb: 8,
      m: ['20px 0px -70px', '-30px 140px', null, null, '15x 0 0'],
    },
    h4: {
      fontSize: 7,
      fontWeight: 700,
      lineHeight: 1.28,
      color: 'heading',
      m: ['20px 0 50px 50px', null, null, null, '0px 0px 36px'],
    },
    p: {
      fontSize: [1, null, null, null, 2],
      lineHeight: 1.88,
      color: 'headingSecondary',
      ml: [0, 4],
    },
    a: {
      mt: [2, null, null, null, 6],
    },
  },
};
