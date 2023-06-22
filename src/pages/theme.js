import { rgba } from "polished";
import React from "react";

const theme = {
  colors: {
    text: "#343D48", // body color and primary color
    textSecondary: "#02073E", // secondary body color
    heading: "#0F2137", // primary heading color
    headingSecondary: "#343D48", // heading color
    background: "#F2f2f2", // body background color
    backgroundSecondary: "#F9FAFC", // secondary background color
    borderColor: "#E9EDF5", // border color
    primary: "#56BBD0", // primary button and link color
    secondary: "#FFC059", // secondary color - can be used for hover states
    muted: "#7B8188", // muted color
    accent: "#609", // a contrast color for emphasizing UI
    dark: "#10132D",
    link: "#3183FF",
    // highlight: a background color for highlighting text
    /* modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111',
      },
    }, */
  },

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
          backgroundColor: 'rgba(0, 0, 0, 0.3)', // Set the color of the scrollbar thumb
          borderRadius: '3px', // Set the border radius of the scrollbar thumb
        },
      },
    },
  },
};

export default theme;
