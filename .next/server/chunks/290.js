"use strict";
exports.id = 290;
exports.ids = [290];
exports.modules = {

/***/ 9290:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8055);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_link__WEBPACK_IMPORTED_MODULE_1__]);
components_link__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/** @jsxRuntime classic */ /** @jsx jsx */ 

const SectionHeading = ({ title , emoji , slogan , learnMore , description , ...props })=>{
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, Object.assign({
        sx: styles.heading
    }, props), slogan && /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Text, {
        as: "p",
        sx: styles.slogan
    }, slogan), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Heading, {
        as: "h3",
        sx: styles.title
    }, emoji ? /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, title) : title, emoji && /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Image, {
        src: emoji,
        alt: "emoji"
    })), description && /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Text, {
        as: "p",
        sx: styles.description
    }, description), learnMore && /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_link__WEBPACK_IMPORTED_MODULE_1__/* .LearnMore */ .Fx, {
        path: "#",
        sx: {
            mt: [
                3,
                null,
                null,
                4
            ]
        },
        label: learnMore ?? "Learn More"
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionHeading);
const styles = {
    heading: {
        mx: "auto",
        textAlign: "center"
    },
    slogan: {
        color: "primary",
        fontWeight: 500,
        fontSize: 2,
        lineHeight: 2.5
    },
    title: {
        color: "heading",
        fontFamily: "headingAlt",
        fontWeight: 700,
        fontSize: [
            4,
            null,
            5,
            6
        ],
        lineHeight: [
            1.33,
            1.33,
            2.08
        ],
        letterSpacing: [
            null,
            null,
            null,
            "heading"
        ],
        img: {
            ml: [
                "15px"
            ],
            position: "relative",
            top: "8px",
            maxWidth: [
                25,
                null,
                null,
                "100%"
            ]
        }
    },
    description: {
        color: "heading",
        fontSize: [
            "14px",
            null,
            "16px"
        ],
        lineHeight: [
            1.86,
            null,
            2.2
        ],
        mt: [
            5
        ],
        maxWidth: 610,
        m: [
            "10px auto 0"
        ]
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;