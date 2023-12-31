/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box, Button, Text } from 'theme-ui';
import React, { useState } from 'react';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'contexts/drawer/drawer-provider';
import NavbarDrawer from './navbar-drawer';
import Logo from '../../assets/images/dms.png';
import { NavLink } from 'components/link';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@primer/octicons-react';

export default function Header() {
  const [state, setState] = useState({
    isMobileMenu: false,
    isSticky: false,
  });
  const handleStateChange = (status) => {
    status.status === Sticky.STATUS_FIXED
      ? setState({ ...state, isSticky: true })
      : setState({ ...state, isSticky: false });
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      label: 'HOME',
    },
  ]
  const gallery = [
    {
      label: 'MEDIA',
    },
  ]
  const about = [
    {
      label: 'ABOUT',
    },
  ]
  const project = [
    {
      label: 'PROJECT',
    },
  ]
  const blog = [
    {
      label: 'BLOG'
    }
  ]


  return (
    <DrawerProvider>
      <Sticky
        enabled={true}
        top={0}
        activeClass="is-sticky"
        innerZ={100}
        onStateChange={handleStateChange}
      >
        <header
          sx={styles.header}
          className={state.isSticky ? 'is-sticky' : ''}
        >
          <Container sx={styles.container}>
          <motion.div
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.7,
      }}
    >
            <Link href="/">
          <img src={Logo} sx={styles.logo}/>
          </Link>
          </motion.div>
          <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          >
            <nav as="nav" sx={styles.navbar} className={'navbar'}>
            {menuItems.map(({  label }, i) => (
                <Link href="/">
              <NavLink key={i} label={label} sx={styles.aa}/>
              </Link>
              ))}
               {about.map(({  label }, i) => (
              <Link href="/">
              <NavLink key={i} label={label} sx={styles.aa}/>
              </Link>
              ))}
              {project.map(({  label }, i) => (
              <Link href="/project">
              <NavLink key={i} label={label} sx={styles.aa}/>
              </Link>
              ))}
              {gallery.map(({  label }, i) => (
              <Link href="/media">
              <NavLink key={i} label={label} sx={styles.aa}/>
              </Link>
              ))}
                  {blog.map(({  label }, i) => (
              <Link href="/blog">
              <NavLink key={i} label={label} sx={styles.aa}/>
              </Link>
              ))}
            </nav>
            </motion.div>
            <NavbarDrawer />
          </Container>
        </header>
      </Sticky>
    </DrawerProvider>
  );
}

const styles = {
  header: {
    backgroundColor: 'transparent',
    position: 'fixed',
    left: ['-50px', null, 0, null],
    right: ['-100px', null, 0, null],
    py: [5],
    m: ['0px 0px 0', null, null, null, '-30px 0px 0'],
    transition: 'all 0.3s ease-in-out 0s',
    '&.is-sticky': {
      backgroundColor: '#fff',
      boxShadow: '0px 20px 50px rgba(59, 90, 136, 0.10)',
      m: ['0px 0px 0', null, null, null, '0px -20px 0'],
      py: [3],
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // position: ['relative', null, null, 'static'],
  },
  logo: {
    mr: [null, null, null, null, 30, '578px'],
    ml: ['0px', null, null, null, 30, '-50px'],
    cursor: 'pointer',
  },
  navbar: {
    display: ['none', null, null, null, 'flex'],
    alignItems: 'center',
    flexGrow: 3,
    // justifyContent: 'center',
    a: {
      ml: '200px',
      fontFamily: 'header',
      cursor: 'pointer',
      display: ['flex'],
      fontWeight: 600,
      color: '#546681',
      padding: 0,
      transition: 'all 0.3s ease-in-out 0s',
      '+ a': {
        ml: 7,
      },
    },
    '.active': {
      color: '#484dff',
    },
  },
  aa:{
    position: 'relative',
    textDecoration: 'none',
    color: '#484dff',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#484dff',
    },

    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '4px',
      bottom: '-3px',
      backgroundColor: '#484dff',
      transform: 'scaleX(0)',
      transformOrigin: 'left center',
      transition: 'transform 0.3s ease',
    },

    '&:hover:before': {
      transform: 'scaleX(1)',
    },
  },
  dropw:{
    '&:hover': {
      p: ['3px 8px 3px'],
      borderRadius: 5,
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    },
  },
  nas:{
    mt: '0px',
    cursor: 'pointer',
    alignItems: 'center',
    '&:hover': {
      ml: '20px',
      mt: 2,
      color: '#21D0B2'
    },
  }
};
