/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import Post from 'components/cards/post';

import Poster1 from 'assets/images/blog/ma.png';
import Poster2 from 'assets/images/blog/Poster2.png';
import Poster3 from 'assets/images/blog/s.png';
import Poster4 from 'assets/images/blog/poster3.png';
import RevealHorizontal from './RevealHori';
import RevealVertical from './RevealUp';

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
    <section id="blog" sx={styles.section}>
      <Container>
        <RevealHorizontal>
        <SectionHeading
          sx={{ mb: [6, null, null, 8] }}
          slogan="Latest Blog"
          title="Our Recent Blog "
        />
        </RevealHorizontal>
        <RevealVertical>
        <Masonry sx={styles.masonry} options={masonryOptions}>
          {data.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Masonry>
        </RevealVertical>
      </Container>
    </section>
  );
};

export default Blog;

const styles = {
  section: {
    pt: [6, null, null, null, 2, 10, 0],
    pb: [2, null, null, null, 6, 10, 14],
  },
  masonry: {
    maxWidth: 1250,
    mx: [-3, null, null, null, 'auto'],
  },
};
