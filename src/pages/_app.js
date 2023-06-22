import 'rc-drawer/assets/index.css';
import 'assets/css/react-slick.css';
import "./index.css";
import theme from './theme'
import React, { useEffect } from 'react';
import { ThemeProvider } from 'theme-ui';

export default function CustomApp({ Component, pageProps }) {
  /** 
   useEffect(() => {
     initGA();
     logPageView();
     Router.events.on('routeChangeComplete', logPageView);
   }, []);
   */
  return(
   <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

