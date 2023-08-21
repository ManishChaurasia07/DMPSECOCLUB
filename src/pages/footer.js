/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text, Container, ThemeProvider } from 'theme-ui';
import Logo from 'assets/images/dms.png';
import { Link } from 'components/link';
import Links from "next/link";
import { menuItems, footerNav } from '../components/Footer2nd/footer.data';
import { rgba } from 'polished';
import RevealHorizontal from 'sections/RevealHori';
import theme from 'theme';

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

const styles = {
  footer: {
    pt: [0, 6],
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
    flexDirection: ['column', null, null, null, 'row'],
    span: {
      cursor: 'pointer',
      color: rgba('#0F2137', 0.6),
      fontSize: '14px',
      lineHeight: 1.29,
      mt: ['18px', '18px', '7px'],
      ml: '23px',
     
    },
    
  },
  footerNav: {
    listStyle: 'none',
    margin: ['15px 0px 0', '15px 0 0', '0'],
    padding: 0,
    display: ['flex'],
    width: 350,
    fontWeight: 600,
    flexWrap: ['wrap', null, null, 'unset'],
    justifyContent: ['center', null, 'flex-start'],
    'li + li': {
      ml: ['18px', null, '20px'],
      '@media only screen and (max-width: 400px)': {
        mb: '10px',
      },
    },
    a: {
      cursor: 'pointer',
      color: 'textSecondary',
      fontSize: [1, null, null, 2],
      textDecoration: 'none',
    },
  },
};
