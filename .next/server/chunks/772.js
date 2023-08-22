"use strict";
exports.id = 772;
exports.ids = [772];
exports.modules = {

/***/ 8658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ footerNav)
/* harmony export */ });
const footerNav = [
    {
        path: "/",
        label: "HOME"
    },
    {
        path: "/",
        label: "ABOUT"
    },
    {
        path: "/project",
        label: "PROJECTS"
    },
    {
        path: "/media",
        label: "MEDIA"
    },
    {
        path: "/blog",
        label: "BLOG"
    }, 
];


/***/ }),

/***/ 8772:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_images_dms_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2954);
/* harmony import */ var assets_images_dms_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_images_dms_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8055);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Footer2nd_footer_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8658);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2042);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sections_RevealHori__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1950);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6690);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_link__WEBPACK_IMPORTED_MODULE_2__, sections_RevealHori__WEBPACK_IMPORTED_MODULE_6__]);
([components_link__WEBPACK_IMPORTED_MODULE_2__, sections_RevealHori__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/** @jsxRuntime classic */ /** @jsx jsx */ 







function Footer() {
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider, {
        theme: theme__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("footer", {
        sx: styles.footer
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(sections_RevealHori__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        sx: styles.footerInner
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        sx: styles.copyright
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: (assets_images_dms_png__WEBPACK_IMPORTED_MODULE_1___default()),
        sx: styles.logo
    }), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/copyright"
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Text, {
        as: "span"
    }, "All rights Reserved by DMPS ECOCLUB"))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        as: "ul",
        sx: styles.footerNav
    }, _components_Footer2nd_footer_data__WEBPACK_IMPORTED_MODULE_4__/* .footerNav.map */ .A.map(({ path , label  }, i)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
            key: i
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_link__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU, {
            path: path,
            key: i,
            label: label,
            variant: "footer"
        })))))))));
}
const styles = {
    footer: {
        pt: [
            0,
            6
        ]
    },
    footerTopInner: {
        gap: [
            50,
            null,
            null,
            null,
            0,
            50
        ],
        display: [
            "grid"
        ],
        gridTemplateColumns: [
            "repeat(2, 1fr)",
            null,
            null,
            "repeat(3, 1fr)",
            "repeat(5, 1fr)", 
        ],
        mb: [
            null,
            null,
            null,
            7
        ]
    },
    footerInner: {
        borderTop: [
            null,
            null,
            null,
            `1px solid #D9E0E7`
        ],
        display: [
            "block",
            null,
            "flex"
        ],
        alignItems: "center",
        fontFamily: "headingAlt",
        justifyContent: "space-between",
        padding: [
            "30px 0 20px",
            null,
            null,
            "30px 0 35px",
            "35px 0 40px"
        ]
    },
    copyright: {
        display: [
            "flex"
        ],
        alignItems: "center",
        flexDirection: [
            "column",
            null,
            null,
            null,
            "row"
        ],
        span: {
            cursor: "pointer",
            color: (0,polished__WEBPACK_IMPORTED_MODULE_5__.rgba)("#0F2137", 0.6),
            fontSize: "14px",
            lineHeight: 1.29,
            mt: [
                "18px",
                "18px",
                "7px"
            ],
            ml: "23px"
        }
    },
    footerNav: {
        listStyle: "none",
        margin: [
            "15px 0px 0",
            "15px 0 0",
            "0"
        ],
        padding: 0,
        display: [
            "flex"
        ],
        width: 350,
        fontWeight: 600,
        flexWrap: [
            "wrap",
            null,
            null,
            "unset"
        ],
        justifyContent: [
            "center",
            null,
            "flex-start"
        ],
        "li + li": {
            ml: [
                "18px",
                null,
                "20px"
            ],
            "@media only screen and (max-width: 400px)": {
                mb: "10px"
            }
        },
        a: {
            cursor: "pointer",
            color: "textSecondary",
            fontSize: [
                1,
                null,
                null,
                2
            ],
            textDecoration: "none"
        }
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1950:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4009);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const RevealHorizontal = ({ children  })=>{
    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useAnimation)();
    const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (inView) {
            controls.start("visible");
        }
    }, [
        controls,
        inView
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        ref: ref,
        initial: "hidden",
        animate: controls,
        variants: {
            visible: {
                opacity: 1,
                x: 0
            },
            hidden: {
                opacity: 0,
                x: -100
            }
        },
        transition: {
            duration: 0.7
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RevealHorizontal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;