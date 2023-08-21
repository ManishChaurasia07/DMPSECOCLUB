/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text, Container } from 'theme-ui';
import Logo from '../../assets/images/dms.png';
import { Link } from 'components/link';
import Links from "next/link";
import FooterWidget from 'components/footer/widget';
import { menuItems, footerNav } from './footer.data';
import { rgba } from 'polished';
import RevealHorizontal from 'sections/RevealHori';
import RevealVertical from 'sections/RevealUp';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      
      <RevealHorizontal>
      <Container>
        <Box sx={styles.footerInner}>
          <Box sx={styles.copyright}>
            <img src={Logo} sx={styles.logo} />
            <Links href="/copyright">
            <Text as="span">
            All rights Reserved by DMPS ECOCLUB
            </Text>
            </Links>
          </Box>

          <Box as="ul" sx={styles.footerNav}>
            {footerNav.map(({ path, label }, i) => (
              <li key={i}>
                <Link path={path} key={i} label={label} variant="footer" />
              </li>
            ))}
          </Box>
        </Box>
      </Container>
      </RevealHorizontal>
    </footer>
  );
}

const styles = {
  footer: {
    pt: [0, 0],
    mb: [0, -10]
  },
  footerTopInner: {
    gap: [50, null, null, null, 0, 50],
    display: ['grid'],
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      null,
      null,
      'repeat(3, 1fr)',
      'repeat(5, 1fr)',
    ],
    mb: [null, null, null, 7],
  },
  footerInner: {
    borderTop: [null, null, null, `1px solid #D9E0E7`],
    display: ['block', null, 'flex'],
    alignItems: 'center',
    fontFamily: 'headingAlt',
    justifyContent: 'space-between',
    padding: ['30px 0 20px', null, null, '30px 0 35px', '35px 0 40px'],
  },
  copyright: {
    display: ['flex'],
    alignItems: 'center',
    width: [430 ,630],
    flexDirection: ['column', null, null, null, 'row'],
    span: {
      fontSize: '13px',
      lineHeight: 1.29,
      cursor: 'pointer',
      color: rgba('#0F2137', 0.6),
      mt: ['18px', '18px', '7px'],
      ml: '23px',
    },
  },
 
  footerNav: {
    cursor: 'pointer',
    listStyle: 'none',
    margin: ['15px 36px 0', '10px 30px 0px'],
    padding: 0,
    fontWeight: 600,
    color: '#546681',
    display: ['flex'],
    width: 350,
    flexWrap: ['wrap', null, null, 'unset'],
    justifyContent: ['center', null, 'flex-start'],
    'li + li': {
      ml: ['16px', null, '20px'],
      '@media only screen and (max-width: 400px)': {
        mb: '10px',
      },
    },
    a: {
      color: 'textSecondary',
      fontSize: [1, null, null, 2],
      textDecoration: 'none',
    },
  },
};
