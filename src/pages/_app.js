import 'rc-drawer/assets/index.css';
import 'assets/css/react-slick.css';
import "./index.css";
import React, { useEffect } from 'react';

export default function CustomApp({ Component, pageProps }) {
  /** 
   useEffect(() => {
     initGA();
     logPageView();
     Router.events.on('routeChangeComplete', logPageView);
   }, []);
   */

  return <Component {...pageProps} />;
}

