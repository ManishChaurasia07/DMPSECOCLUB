"use strict";
(() => {
var exports = {};
exports.id = 38;
exports.ids = [38,54,332,743,148,71,251,904,377];
exports.modules = {

/***/ 5480:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4961);
/* harmony import */ var components_section_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9290);
/* harmony import */ var _assets_images_Team_member_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2492);
/* harmony import */ var _assets_images_Team_member_1_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_Team_member_1_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_Team_member_2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8727);
/* harmony import */ var _assets_images_Team_member_2_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_Team_member_2_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_Team_me_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1803);
/* harmony import */ var _assets_images_Team_me_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_Team_me_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_team_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2133);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8772);
/* harmony import */ var _Header_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2437);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6197);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var sections_RevealHori__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1950);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6690);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_section_heading__WEBPACK_IMPORTED_MODULE_3__, _footer__WEBPACK_IMPORTED_MODULE_8__, _Header_header__WEBPACK_IMPORTED_MODULE_9__, framer_motion__WEBPACK_IMPORTED_MODULE_10__, sections_RevealHori__WEBPACK_IMPORTED_MODULE_12__]);
([components_section_heading__WEBPACK_IMPORTED_MODULE_3__, _footer__WEBPACK_IMPORTED_MODULE_8__, _Header_header__WEBPACK_IMPORTED_MODULE_9__, framer_motion__WEBPACK_IMPORTED_MODULE_10__, sections_RevealHori__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/** @jsxRuntime classic */ /** @jsx jsx */ 














const data = [
    {
        id: 1,
        imgSrc: (_assets_images_Team_member_2_png__WEBPACK_IMPORTED_MODULE_5___default()),
        altText: "Charoo kalra",
        title: "Charoo kalra",
        designation: "Incharge"
    },
    {
        id: 2,
        imgSrc: (_assets_images_Team_member_2_png__WEBPACK_IMPORTED_MODULE_5___default()),
        altText: "Soma ..",
        title: "Soma ..",
        designation: "Head Incharge"
    },
    {
        id: 3,
        imgSrc: (_assets_images_Team_member_1_png__WEBPACK_IMPORTED_MODULE_4___default()),
        altText: "Achintya Pasricha",
        title: "Achintya Pasricha",
        designation: "President"
    },
    {
        id: 4,
        imgSrc: (_assets_images_Team_me_png__WEBPACK_IMPORTED_MODULE_6___default()),
        altText: "Manish Chaurasia",
        title: "Manish Chaurasia",
        designation: "Vice President & Developer"
    },
    {
        id: 5,
        imgSrc: (_assets_images_Team_member_1_png__WEBPACK_IMPORTED_MODULE_4___default()),
        altText: "Shivansh Singh",
        title: "Shivansh Singh",
        designation: "Designer"
    },
    {
        id: 6,
        imgSrc: (_assets_images_Team_member_2_png__WEBPACK_IMPORTED_MODULE_5___default()),
        altText: "Glory Sam",
        title: "Glory Sam",
        designation: "..."
    },
    {
        id: 7,
        imgSrc: (_assets_images_Team_member_2_png__WEBPACK_IMPORTED_MODULE_5___default()),
        altText: "Navya ...",
        title: "Navya ..",
        designation: "..."
    },
    {
        id: 8,
        imgSrc: (_assets_images_Team_member_2_png__WEBPACK_IMPORTED_MODULE_5___default()),
        altText: "Jagriti Bisht",
        title: "Jagriti Bisht",
        designation: "..."
    },
    {
        id: 9,
        imgSrc: (_assets_images_Team_member_2_png__WEBPACK_IMPORTED_MODULE_5___default()),
        altText: "Anushka Goel",
        title: "Anushka Goel",
        designation: "..."
    },
    {
        id: 10,
        imgSrc: (_assets_images_Team_member_2_png__WEBPACK_IMPORTED_MODULE_5___default()),
        altText: "Unnati Goel",
        title: "Unnati Goel",
        designation: "..."
    },
    {
        id: 11,
        imgSrc: (_assets_images_Team_member_2_png__WEBPACK_IMPORTED_MODULE_5___default()),
        altText: "Shefali ..",
        title: "Shefali ..",
        designation: "..."
    },
    {
        id: 12,
        imgSrc: (_assets_images_Team_member_2_png__WEBPACK_IMPORTED_MODULE_5___default()),
        altText: "Riddhi Bhardwaj",
        title: "Riddhi Bhardwaj",
        designation: "..."
    },
    {
        id: 13,
        imgSrc: (_assets_images_Team_member_2_png__WEBPACK_IMPORTED_MODULE_5___default()),
        altText: "Riddhi Bhardwaj",
        title: "Riddhi Bhardwaj",
        designation: "..."
    },
    {
        id: 14,
        imgSrc: (_assets_images_Team_member_1_png__WEBPACK_IMPORTED_MODULE_4___default()),
        altText: "Muhammad Bilal",
        title: "Muhammad Bilal",
        designation: "..."
    },
    {
        id: 15,
        imgSrc: (_assets_images_Team_member_2_png__WEBPACK_IMPORTED_MODULE_5___default()),
        altText: "Manya ..",
        title: "Manya ..",
        designation: "..."
    },
    {
        id: 16,
        imgSrc: (_assets_images_Team_member_2_png__WEBPACK_IMPORTED_MODULE_5___default()),
        altText: "Shamreen ..",
        title: "Shamreen ..",
        designation: "..."
    }, 
];
const masonryOptions = {
    transitionDuration: 0
};
const Team = ()=>{
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        sx: styles.Header
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Header_header__WEBPACK_IMPORTED_MODULE_9__["default"], null)), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider, {
        theme: theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        id: "gallery",
        as: "section",
        sx: styles.section
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        as: "section",
        id: "home",
        sx: styles.sec
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        title: "DMPS - ECOCLUB",
        description: "Hi! We protect our environment by taking some of the steps like a collecting of e-waste which is hazardous to our environment and plastic. We all do some acitivity which can protect us from destroying the world!"
    }), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        sx: styles.container
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_section_heading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        sx: styles.heading,
        slogan: "Meet the Dream Team: Uniting Talent, Passion, and Expertise!",
        title: "Let's Meet our Team Members"
    })), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(sections_RevealHori__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        as: (react_masonry_component__WEBPACK_IMPORTED_MODULE_1___default()),
        options: masonryOptions,
        sx: styles.galleryWrapper
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Grid, {
        sx: styles.grid
    }, data.map((item)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_team_card__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            key: `team--key${item.id}`,
            src: item.imgSrc,
            altText: item.altText,
            title: item.title,
            designation: item.designation,
            social: item.socialProfile
        }))))))))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_footer__WEBPACK_IMPORTED_MODULE_8__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Team);
const styles = {
    Header: {
        m: [
            "-20px 0px 0",
            null,
            null,
            "-35px 0px 20px",
            "35px -10px 0"
        ]
    },
    section: {
        pt: [
            30,
            30,
            40,
            50,
            60
        ],
        pb: [
            60,
            60,
            60,
            90,
            80,
            120
        ]
    },
    heading: {
        mb: [
            30,
            30,
            40,
            60
        ],
        m: [
            "60px -105px 0",
            null,
            null,
            "100px 25px",
            "35px 0px 0"
        ],
        color: [
            "#02073E"
        ],
        width: [
            "250%",
            "100%"
        ]
    },
    grid: {
        mt: [
            0,
            null,
            -6,
            null,
            4
        ],
        m: [
            "20px -80px 0px",
            null,
            null,
            "0px 0px",
            "0px 0px 0px"
        ],
        gridGap: [
            "25px 55px",
            null,
            "20px 0px 0px",
            null,
            null,
            "20px 30px"
        ],
        width: [
            "200%",
            "100%"
        ],
        gridTemplateColumns: [
            "repeat(2, 1fr)",
            null,
            "repeat(2, 1fr)",
            null,
            "repeat(4, 1fr)",
            "repeat(4, 1fr)"
        ]
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5089:
/***/ ((module) => {

module.exports = require("@primer/octicons-react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 2042:
/***/ ((module) => {

module.exports = require("polished");

/***/ }),

/***/ 5307:
/***/ ((module) => {

module.exports = require("rc-drawer");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 4751:
/***/ ((module) => {

module.exports = require("react-icons/io");

/***/ }),

/***/ 6314:
/***/ ((module) => {

module.exports = require("react-masonry-component");

/***/ }),

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

/***/ }),

/***/ 8297:
/***/ ((module) => {

module.exports = require("react-stickynode");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8800:
/***/ ((module) => {

module.exports = require("theme-ui");

/***/ }),

/***/ 3139:
/***/ ((module) => {

module.exports = import("@emotion/react");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 4009:
/***/ ((module) => {

module.exports = import("react-intersection-observer");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,954,123,139,797,772,961,437,290,410], () => (__webpack_exec__(5480)));
module.exports = __webpack_exports__;

})();