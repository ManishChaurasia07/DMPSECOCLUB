"use strict";
exports.id = 123;
exports.ids = [123];
exports.modules = {

/***/ 8055:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fx": () => (/* binding */ LearnMore),
/* harmony export */   "OL": () => (/* binding */ NavLink),
/* harmony export */   "rU": () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3139);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_4__]);
_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/** @jsxRuntime classic */ /** @jsx jsx */ 




function NavLink({ path , label , children , ...rest }) {
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, Object.assign({
        to: path,
        spy: true,
        offset: -70,
        smooth: true,
        duration: 500,
        className: "nav-item",
        activeClass: "active"
    }, rest, {
        sx: styles.Nav
    }), label);
}
function Link({ path , label , children , ...rest }) {
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: path
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_1__.Link, Object.assign({}, rest), children ? children : label));
}
function LearnMore({ path , label , children , ...rest }) {
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: path
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_1__.Link, Object.assign({
        sx: styles.learnMore
    }, rest), label ?? "Learn More", " ", /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_io__WEBPACK_IMPORTED_MODULE_3__.IoIosArrowForward, {
        size: "16px"
    })));
}
const fadeRight = _emotion_react__WEBPACK_IMPORTED_MODULE_4__.keyframes`
  from {
    opacity: 0;
    transform: translateX(-5px);
  }
  to: {
    opacity: 1;
  }
`;
const styles = {
    learnMore: {
        color: "#fff",
        cursor: "pointer",
        fontSize: [
            1,
            null,
            null,
            "15px"
        ],
        fontWeight: 500,
        background: "#484DFF",
        display: "inline-flex",
        padding: [
            "18px 35px"
        ],
        fontFamily: "Inter, sans-serif",
        alignItems: "center",
        borderRadius: "50px",
        svg: {
            transform: "translateX(3px)",
            width: [
                "13px",
                null,
                null,
                "16px"
            ]
        },
        ":hover": {
            background: "#3898ec",
            svg: {
                animation: `${fadeRight} 0.5s linear`
            }
        }
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2042);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    // example colors with dark mode
    colors: {
        text: "2e3642",
        textSecondary: "#02073E",
        heading: "#1a3066",
        headingSecondary: "#546681",
        background: "#F2f2f2",
        backgroundSecondary: "#D6D7D7",
        borderColor: "#E9EDF5",
        primary: "#484dff",
        secondary: "#FFC059",
        muted: "#7B8188",
        accent: "#609",
        dark: "#3898ec",
        link: "#3183FF"
    },
    fonts: {
        body: "Inter, sans-serif",
        header: "Inter, sans-serif",
        // body:
        //   'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: "DM Sans, sans-serif",
        headingAlt: "Inter, sans-serif",
        monospace: "Inter, sans-serif"
    },
    fontSizes: [
        12,
        14,
        16,
        18,
        20,
        22,
        24,
        26,
        28,
        30,
        32,
        36,
        40,
        42,
        48,
        52,
        55,
        60,
        64
    ],
    fontWeights: {
        body: "normal",
        // body: 400,
        heading: 500,
        // heading: 700,
        bold: 700
    },
    lineHeights: {
        body: 1.5,
        // body: 1.5,
        heading: 1.25
    },
    letterSpacings: {
        body: "normal",
        caps: "0.2em",
        heading: "-0.5px"
    },
    space: [
        0,
        5,
        10,
        15,
        20,
        25,
        30,
        35,
        40,
        45,
        50,
        55,
        60,
        65,
        70,
        80,
        90,
        100,
        110,
        120,
        130,
        140,
        150,
        160
    ],
    sizes: {},
    breakpoints: [
        "480px",
        "640px",
        "768px",
        "1024px",
        "1260px",
        "1367px",
        "1440px",
        "1600px", 
    ],
    // variants can use custom, user-defined names
    layout: {
        container: {
            maxWidth: [
                "100%",
                null,
                null,
                "720px",
                "970px",
                "1140px",
                "1260px",
                "1366px", 
            ],
            paddingLeft: [
                6
            ],
            paddingRight: [
                6
            ],
            m: "0 auto"
        },
        main: {}
    },
    text: {
        heading: {
            fontFamily: "heading",
            lineHeight: "heading",
            fontWeight: "heading"
        }
    },
    links: {},
    images: {
        avatar: {
            width: 48,
            height: 48,
            borderRadius: 99999
        }
    },
    // variants for buttons
    buttons: {
        default: {
            backgroundColor: "transparent",
            fontFamily: "body",
            fontWeight: "500",
            borderRadius: "5px",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "0.3s ease-in-out 0s",
            whiteSpace: "nowrap"
        },
        primary: {
            variant: "buttons.default",
            color: "white",
            bg: "primary",
            minHeight: "60px",
            padding: "0 30px",
            "&:hover": {
                bg: "dark"
            }
        },
        primaryOutline: {
            variant: "buttons.default",
            border: (t)=>`2px solid ${(0,polished__WEBPACK_IMPORTED_MODULE_0__.rgba)("#FFC059", 0.2)}`,
            color: "secondary",
            minHeight: "50px",
            padding: "0 40px",
            "&:hover": {
                bg: "secondary",
                color: "white"
            }
        },
        primaryMd: {
            variant: "buttons.primary",
            minHeight: "50px",
            px: "25px"
        },
        secondary: {
            variant: "buttons.primary",
            color: "white",
            bg: "secondary"
        },
        muted: {
            variant: "buttons.default",
            backgroundColor: "#EDF0F2",
            color: "text",
            ":hover": {
                backgroundColor: "primary",
                color: "#fff"
            }
        },
        white: {
            variant: "buttons.default",
            backgroundColor: "white",
            color: "#020718"
        },
        text: {
            variant: "buttons.default",
            color: "text"
        }
    },
    cards: {
        primary: {
            padding: 2,
            borderRadius: 4
        },
        offer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: [
                "1 1 calc(50% - 16px)",
                "1 1 20%"
            ],
            minHeight: 130,
            m: 2,
            background: "#FFFFFF",
            border: "1px solid #EDEFF6",
            borderRadius: 5
        },
        featureCard: {
            display: "flex",
            alignItems: [
                "left",
                "flex-start"
            ],
            flexDirection: [
                "column",
                " c"
            ],
            p: [
                0,
                3
            ]
        }
    },
    forms: {
        label: {
            fontSize: 1,
            fontWeight: "bold"
        },
        input: {
            borderRadius: 8,
            borderColor: "borderColor",
            fontFamily: "body",
            px: 5,
            py: 0,
            minHeight: 60,
            "&:focus": {
                borderColor: "primary",
                boxShadow: (t)=>`0 0 0 2px ${t.colors.primary}`,
                outline: "none"
            }
        }
    },
    badges: {
        primary: {
            color: "background",
            bg: "#28A5FF",
            borderRadius: 30,
            p: "3px 11px",
            fontSize: 1,
            letterSpacing: "-0.5px"
        },
        outline: {
            color: "primary",
            bg: "transparent",
            boxShadow: "inset 0 0 0 1px"
        }
    },
    styles: {
        // To add base, top-level styles to the <body> element, use theme.styles.root.
        root: {
            fontFamily: "body",
            lineHeight: "body",
            fontWeight: "body"
        },
        // h1-h6 Heading styles
        h1: {
        },
        h2: {
        },
        h3: {
            variant: "text.heading",
            fontSize: 4
        },
        h4: {
            variant: "text.heading",
            fontSize: 3
        },
        h5: {
            variant: "text.heading",
            fontSize: 2
        },
        h6: {
            variant: "text.heading",
            fontSize: 1
        },
        // Divider styles
        hr: {
            border: 0,
            borderBottom: "1px solid",
            borderColor: "#D9E0E7"
        },
        // also you can use other HTML elements style here
        unStyled: {
            listStyle: "none",
            p: 0,
            m: 0
        },
        srOnly: {
            border: "0 !important",
            clip: "rect(1px, 1px, 1px, 1px) !important",
            clipPath: "inset(50%) !important",
            height: "1px !important",
            margin: "-1px !important",
            overflow: "hidden !important",
            padding: "0 !important",
            position: "absolute !important",
            width: "1px !important",
            whiteSpace: "nowrap !important"
        }
    }
});


/***/ })

};
;