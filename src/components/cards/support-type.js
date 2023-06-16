/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Heading, Image, Text } from 'theme-ui';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { rgba } from 'polished';

const SupportType = ({ data }) => {
  return (
    <div sx={styles.card}>
      <Flex as="figure" sx={styles.icon}>
        <Image src={data.icon} alt="" />
      </Flex>
      <div sx={styles.content}>
        <Heading as="h3">
          {data.title}{' '}
          <HiOutlineArrowNarrowRight color={rgba('#0F2137', 0.3)} />
        </Heading>
        <Text as="p">{data.text}</Text>
      </div>
    </div>
  );
};

export default SupportType;

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    mt: 7,
  },
  icon: {
    alignItems: 'center',
    mr: 4,
    minWidth: [42, null, null, 60],
  },
  content: {
    h3: {
      fontSize: [2, null, null, 3],
      fontWeight: 700,
      mb: 2,
      display: 'flex',
      alignItems: 'center',
      svg: {
        ml: 2,
      },
    },
    p: {
      fontSize: [1, null, null, 2],
    },
  },
};
