(() => {
var exports = {};
exports.id = 314;
exports.ids = [314,54,332,743,148,71,251,904,377];
exports.modules = {

/***/ 2674:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2042);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_images_0_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2809);
/* harmony import */ var assets_images_0_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_images_0_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4961);
/* harmony import */ var _Header_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2437);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6314);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_images_Ewaste_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6300);
/* harmony import */ var assets_images_Ewaste_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_images_Ewaste_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_images_plastic_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7554);
/* harmony import */ var assets_images_plastic_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_images_plastic_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Gallery_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5433);
/* harmony import */ var _Gallery_Data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4969);
/* harmony import */ var _Gallery_Right__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2445);
/* harmony import */ var _Gallery_Right2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6512);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8772);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6197);
/* harmony import */ var sections_RevealUp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2914);
/* harmony import */ var sections_RevealHori__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1950);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header_header__WEBPACK_IMPORTED_MODULE_4__, _footer__WEBPACK_IMPORTED_MODULE_12__, framer_motion__WEBPACK_IMPORTED_MODULE_13__, sections_RevealUp__WEBPACK_IMPORTED_MODULE_14__, sections_RevealHori__WEBPACK_IMPORTED_MODULE_15__]);
([_Header_header__WEBPACK_IMPORTED_MODULE_4__, _footer__WEBPACK_IMPORTED_MODULE_12__, framer_motion__WEBPACK_IMPORTED_MODULE_13__, sections_RevealUp__WEBPACK_IMPORTED_MODULE_14__, sections_RevealHori__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/** @jsxRuntime classic */ /** @jsx jsx */ 















const masonryOptions = {
    transitionDuration: 0
};
const data = [
    {
        id: 1,
        image: (assets_images_Ewaste_jpg__WEBPACK_IMPORTED_MODULE_6___default())
    }, 
];
const data2 = [
    {
        id: 3,
        image: (assets_images_plastic_jpg__WEBPACK_IMPORTED_MODULE_7___default())
    }, 
];
const right = [
    {
        id: 1,
        image: (assets_images_Ewaste_jpg__WEBPACK_IMPORTED_MODULE_6___default())
    }, 
];
const rightleft = [
    {
        id: 3,
        image: (assets_images_plastic_jpg__WEBPACK_IMPORTED_MODULE_7___default())
    }, 
];
const Waste = ()=>{
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        sx: styles.Header
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Header_header__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_13__.motion.div, {
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
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        as: "section",
        id: "home",
        sx: styles.section
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_seo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        title: "DMPS - ECOCLUB",
        description: "Hi! We protect our environment by taking some of the steps like a collecting of e-waste which is hazardous to our environment and plastic. We all do some acitivity which can protect us from destroying the world!"
    })))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        sx: styles.contentWrapper
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        sx: styles.bannerContent
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_13__.motion.div, {
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
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(sections_RevealHori__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Heading, {
        as: "h1"
    }, "About the E-Waste Recycling Drive"))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_13__.motion.div, {
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
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(sections_RevealUp__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Text, {
        as: "p"
    }, "Ayika Foundation, in collaboration with The Recycling Company, hosted an e-waste recyclothon on the Indian Independence Day(15th August, 2022) to collect e-waste, spread awareness, and send the waste for recycling. Improper management of e-waste can cause diseases like asthma, cancer, skin diseases, other respiratory diseases, and so on. Simply throwing away e-waste can also cause soil contamination and deadening of plant and animal life dependent on that soil. 8 members from our team educated residents of 2 societies about the importance of recycling e-waste, and collected 50 kgs+ e-waste, with 800+ people participating in the recyclothon.")))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(sections_RevealHori__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        as: (react_masonry_component__WEBPACK_IMPORTED_MODULE_5___default()),
        options: masonryOptions,
        sx: styles.galleryWrapper
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_13__.motion.div, {
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
    }, data?.map((item)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Gallery_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
            key: item.id,
            item: item
        })), data2?.map((item)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Gallery_Data__WEBPACK_IMPORTED_MODULE_9__["default"], {
            key: item.id,
            item: item
        }))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_13__.motion.div, {
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
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        sx: styles.right
    }, right?.map((item)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Gallery_Right__WEBPACK_IMPORTED_MODULE_10__["default"], {
            key: item.id,
            item: item
        })), rightleft?.map((item)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Gallery_Right2__WEBPACK_IMPORTED_MODULE_11__["default"], {
            key: item.id,
            item: item
        }))))))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_footer__WEBPACK_IMPORTED_MODULE_12__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Waste);
const styles = {
    Header: {
        m: [
            "45px 0px 0px",
            null,
            null,
            "30px 8px 20px",
            "35px -10px 0"
        ]
    },
    heading: {
        mb: [
            60,
            30,
            40,
            60
        ],
        color: [
            "#fff"
        ]
    },
    primary: {
        variant: "buttons.default",
        border: "2px solid #56BBD0",
        color: "white",
        bg: "transparent",
        minHeight: "30px",
        m: [
            "0px 10px 0",
            null,
            null,
            "-10px -8px auto",
            "35px -10px 0"
        ],
        padding: "0 30px",
        "&:hover": {
            bg: "#56BBD0"
        }
    },
    section: {
        background: `transparent url(${(assets_images_0_png__WEBPACK_IMPORTED_MODULE_2___default())}) no-repeat center top / cover `,
        pt: [
            278,
            null,
            null,
            578,
            null,
            null,
            19
        ],
        pb: [
            13,
            null,
            null,
            12,
            7,
            11,
            0
        ],
        m: [
            "-45px -20px 0px",
            null,
            null,
            "-30px -10px auto",
            "35px -10px 0"
        ]
    },
    contentWrapper: {
        gap: [
            null,
            null,
            null,
            null,
            8,
            15
        ],
        display: [
            "block",
            null,
            null,
            null,
            "grid"
        ],
        alignItems: "center",
        gridTemplateColumns: [
            null,
            null,
            null,
            null,
            "1fr 1fr",
            "530px 1fr"
        ],
        minHeight: [
            "auto",
            null,
            null,
            null,
            "42vh",
            "81vh",
            "100vh"
        ],
        pt: [
            null,
            null,
            null,
            50,
            0,
            null
        ],
        "@media only screen and (min-width:1501px) and (max-width:1600px)": {
            pt: 64
        }
    },
    bannerContent: {
        h1: {
            fontFamily: "headingAlt",
            fontSize: [
                20,
                null,
                null,
                40,
                16,
                45,
                16
            ],
            lineHeight: [
                1.31,
                null,
                null,
                1.5,
                null,
                1.26
            ],
            letterSpacing: [
                0,
                null,
                null,
                null,
                "-1.5px"
            ],
            color: "textSecondary",
            textAlign: [
                "center",
                null,
                null,
                null,
                "center"
            ],
            maxWidth: [
                null,
                null,
                450,
                "700px",
                null,
                "none"
            ],
            m: [
                "20px 0",
                null,
                "-20px auto",
                null,
                0
            ],
            textAlign: [
                "center",
                null,
                null,
                null,
                "left"
            ]
        },
        p: {
            fontFamily: "headingAlt",
            fontSize: [
                18,
                null,
                null,
                20,
                12,
                45,
                16
            ],
            lineHeight: [
                1.31,
                null,
                null,
                1.5,
                null,
                1.26
            ],
            letterSpacing: [
                1,
                null,
                null,
                null,
                "-1.5px"
            ],
            color: (0,polished__WEBPACK_IMPORTED_MODULE_1__.rgba)(0, 0, 0, 0.8),
            textAlign: [
                "center",
                null,
                null,
                null,
                "center"
            ],
            maxWidth: [
                null,
                null,
                550,
                "880px",
                null,
                "none"
            ],
            m: [
                "20px 0",
                null,
                "40px auto",
                null,
                0
            ],
            textAlign: [
                "center",
                null,
                null,
                null,
                "left"
            ]
        }
    },
    right: {
        m: [
            "20px 0",
            null,
            "-630px auto",
            null,
            0
        ]
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2809:
/***/ ((module) => {

module.exports = "/_next/static/images/0-39f7b54ddb0033416e3eeecbe2c5269a.png";

/***/ }),

/***/ 5089:
/***/ ((module) => {

"use strict";
module.exports = require("@primer/octicons-react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 2042:
/***/ ((module) => {

"use strict";
module.exports = require("polished");

/***/ }),

/***/ 5307:
/***/ ((module) => {

"use strict";
module.exports = require("rc-drawer");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4751:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io");

/***/ }),

/***/ 6314:
/***/ ((module) => {

"use strict";
module.exports = require("react-masonry-component");

/***/ }),

/***/ 3094:
/***/ ((module) => {

"use strict";
module.exports = require("react-scroll");

/***/ }),

/***/ 8297:
/***/ ((module) => {

"use strict";
module.exports = require("react-stickynode");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8800:
/***/ ((module) => {

"use strict";
module.exports = require("theme-ui");

/***/ }),

/***/ 3139:
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/react");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 4009:
/***/ ((module) => {

"use strict";
module.exports = import("react-intersection-observer");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,954,123,139,797,772,961,437,445,665,433,969,402], () => (__webpack_exec__(2674)));
module.exports = __webpack_exports__;

})();