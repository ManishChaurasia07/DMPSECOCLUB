import 'rc-drawer/assets/index.css';
import 'assets/css/react-slick.css';
import "./index.css";
import React, { useEffect } from 'react';
import { ThemeProvider } from 'theme-ui';

const theme = {
 
  styles: {
    root: {
      overflowX: 'hidden', // Prevent horizontal scrolling
    },
    html: {
      height: '100%', // Ensure the body takes up the full height of the viewport
    },
    body: {
      height: '100%', // Ensure the body takes up the full height of the viewport
      display: 'flex',
      flexDirection: 'column',
      '> div:first-of-type': {
        flex: 1, // Make the main content area take up remaining vertical space
        overflowY: 'scroll', // Enable vertical scrolling
        scrollbarWidth: 'thin', // Set the width of the scrollbar
        '&::-webkit-scrollbar': {
          width: '6px', // Set the width of the scrollbar
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent', // Set the background color of the scrollbar track
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#484dff', // Set the color of the scrollbar thumb
        },
      },
    },
  },
};

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
