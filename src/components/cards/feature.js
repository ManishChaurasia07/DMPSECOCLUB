/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image, Heading, Text } from 'theme-ui';

const Feature = ({ data, ...props }) => {
  return (
    <Box sx={styles.feature} {...props}>
      <Box as="figure">
        <Image src={data?.icon} alt={data?.title} />
      </Box>
      <Box>
        <Heading as="h4">{data?.title}</Heading>
        <Text as="p">{data?.description}</Text>
      </Box>
    </Box>
  );
};

export default Feature;

const styles = {
  feature: {
    borderBottom: (t) => [null, null, `2x solid ${t.colors.borderColor}`],
    borderRight: (t) => [null, null, `2px solid ${t.colors.borderColor}`],
    padding: [
      null,
      null,
      null,
      '45px 30px 55px',
      '40px 25px 50px 65px',
      '40px 34px 40px 3px',
    ],
    textAlign: ['center', null, null, null, null, 'center'],

    transition: '0.3s ease 0s',
      ':hover': {
        backgroundColor: 'white',
        borderColor: 'white',
        boxShadow: '0px 20px 50px rgba(59, 90, 136, 0.05)',
        transform: 'translate(-1px, -1px)',
      },
    figure: {
      display: 'flex',
      alignItems: 'center',
      minWidth: [70],
      mb: 8,
      m: ['20px 60px -70px', null, null, null, '15x 0 0'],
      
    },
    h4: {
      fontSize: 7,
      fontWeight: 700,
      lineHeight: 1.28,
      color: 'heading',
      m: ['20px 0 50px 50px', null, null, null, '25px auto 36px'],

    },
    p: {
      fontSize: [1, null, null, null, 2],
      lineHeight: 1.88,
      color: 'headingSecondary',
    },
    a: {
      mt: [2, null, null, null, 6],
    },
  },
};
