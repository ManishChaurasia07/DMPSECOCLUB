"use strict";
exports.id = 437;
exports.ids = [437];
exports.modules = {

/***/ 7015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ DrawerProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _drawer_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9934);



const initialState = {
    isOpen: false
};
function reducer(state, action) {
    switch(action.type){
        case "TOGGLE":
            return {
                ...state,
                isOpen: !state.isOpen
            };
        default:
            return state;
    }
}
const DrawerProvider = ({ children  })=>{
    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_drawer_context__WEBPACK_IMPORTED_MODULE_2__/* .DrawerContext.Provider */ .r.Provider, {
        value: {
            state,
            dispatch
        },
        children: children
    });
};


/***/ }),

/***/ 2437:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8297);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7015);
/* harmony import */ var _navbar_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3797);
/* harmony import */ var _assets_images_dms_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2954);
/* harmony import */ var _assets_images_dms_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_dms_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8055);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6197);
/* harmony import */ var _primer_octicons_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5089);
/* harmony import */ var _primer_octicons_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6690);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_link__WEBPACK_IMPORTED_MODULE_6__, framer_motion__WEBPACK_IMPORTED_MODULE_8__]);
([components_link__WEBPACK_IMPORTED_MODULE_6__, framer_motion__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/** @jsxRuntime classic */ /** @jsx jsx */ 










function Header() {
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        isMobileMenu: false,
        isSticky: false
    });
    const handleStateChange = (status)=>{
        status.status === (react_stickynode__WEBPACK_IMPORTED_MODULE_2___default().STATUS_FIXED) ? setState({
            ...state,
            isSticky: true
        }) : setState({
            ...state,
            isSticky: false
        });
    };
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const toggleDropdown = ()=>{
        setIsOpen(!isOpen);
    };
    const menuItems = [
        {
            label: "HOME"
        }, 
    ];
    const gallery = [
        {
            label: "MEDIA"
        }, 
    ];
    const about = [
        {
            label: "ABOUT"
        }, 
    ];
    const project = [
        {
            label: "PROJECT"
        }, 
    ];
    const blog = [
        {
            label: "BLOG"
        }
    ];
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider, {
        theme: theme__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_3__/* .DrawerProvider */ .D, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_stickynode__WEBPACK_IMPORTED_MODULE_2___default()), {
        enabled: true,
        top: 0,
        activeClass: "is-sticky",
        innerZ: 100,
        onStateChange: handleStateChange
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("header", {
        sx: styles.header,
        className: state.isSticky ? "is-sticky" : ""
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        sx: styles.container
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
        initial: {
            x: -500,
            opacity: 0,
            scale: 0.5
        },
        animate: {
            x: 0,
            opacity: 1,
            scale: 1
        },
        transition: {
            duration: 0.7
        }
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
        href: "/"
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: (_assets_images_dms_png__WEBPACK_IMPORTED_MODULE_5___default()),
        sx: styles.logo
    }))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
        initial: {
            x: 500,
            opacity: 0,
            scale: 0.5
        },
        animate: {
            x: 0,
            opacity: 1,
            scale: 1
        },
        transition: {
            duration: 0.7
        }
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav", {
        as: "nav",
        sx: styles.navbar,
        className: "navbar"
    }, menuItems.map(({ label  }, i)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
            href: "/"
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_link__WEBPACK_IMPORTED_MODULE_6__/* .NavLink */ .OL, {
            key: i,
            label: label,
            sx: styles.aa
        }))), about.map(({ label  }, i)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
            href: "/"
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_link__WEBPACK_IMPORTED_MODULE_6__/* .NavLink */ .OL, {
            key: i,
            label: label,
            sx: styles.aa
        }))), project.map(({ label  }, i)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
            href: "/project"
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_link__WEBPACK_IMPORTED_MODULE_6__/* .NavLink */ .OL, {
            key: i,
            label: label,
            sx: styles.aa
        }))), gallery.map(({ label  }, i)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
            href: "/media"
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_link__WEBPACK_IMPORTED_MODULE_6__/* .NavLink */ .OL, {
            key: i,
            label: label,
            sx: styles.aa
        }))), blog.map(({ label  }, i)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
            href: "/blog"
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_link__WEBPACK_IMPORTED_MODULE_6__/* .NavLink */ .OL, {
            key: i,
            label: label,
            sx: styles.aa
        }))))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_navbar_drawer__WEBPACK_IMPORTED_MODULE_4__["default"], null))))));
}
const styles = {
    header: {
        backgroundColor: "transparent",
        position: "fixed",
        left: [
            "0px",
            null,
            0,
            null
        ],
        right: [
            "-20px",
            null,
            0,
            null
        ],
        py: [
            5
        ],
        transition: "all 0.3s ease-in-out 0s",
        "&.is-sticky": {
            backgroundColor: "#fff",
            boxShadow: "0px 20px 50px rgba(59, 90, 136, 0.10)",
            py: [
                3
            ]
        }
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    logo: {
        mr: [
            null,
            null,
            null,
            null,
            30,
            "578px"
        ],
        ml: [
            "0px",
            null,
            null,
            null,
            30,
            "-30px"
        ],
        cursor: "pointer"
    },
    navbar: {
        display: [
            "none",
            null,
            null,
            null,
            "flex"
        ],
        alignItems: "center",
        flexGrow: 3,
        // justifyContent: 'center',
        a: {
            ml: "200px",
            fontFamily: "header",
            cursor: "pointer",
            display: [
                "flex"
            ],
            fontWeight: 600,
            color: "#546681",
            padding: 0,
            transition: "all 0.3s ease-in-out 0s",
            "+ a": {
                ml: 7
            }
        },
        ".active": {
            color: "#484dff"
        }
    },
    aa: {
        position: "relative",
        textDecoration: "none",
        color: "#484dff",
        transition: "color 0.3s ease",
        "&:hover": {
            color: "#484dff"
        },
        "&:before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "4px",
            bottom: "-3px",
            backgroundColor: "#484dff",
            transform: "scaleX(0)",
            transformOrigin: "left center",
            transition: "transform 0.3s ease"
        },
        "&:hover:before": {
            transform: "scaleX(1)"
        }
    },
    dropw: {
        "&:hover": {
            p: [
                "3px 8px 3px"
            ],
            borderRadius: 5,
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
        }
    },
    nas: {
        mt: "0px",
        cursor: "pointer",
        alignItems: "center",
        "&:hover": {
            ml: "20px",
            color: "#21D0B2",
            mt: 2
        }
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;