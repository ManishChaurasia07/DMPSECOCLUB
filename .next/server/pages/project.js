(() => {
var exports = {};
exports.id = 512;
exports.ids = [512,54,332,148,743,71,251,904,377,593];
exports.modules = {

/***/ 3862:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var pages_Gallery_gallery_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5071);
/* harmony import */ var assets_images_Ewaste_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6300);
/* harmony import */ var assets_images_Ewaste_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_images_Ewaste_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_images_metal_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7151);
/* harmony import */ var assets_images_metal_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_images_metal_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_images_plastic_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7554);
/* harmony import */ var assets_images_plastic_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_images_plastic_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8772);
/* harmony import */ var _Header_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2437);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var sections_RevealHori__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1950);
/* harmony import */ var sections_RevealUp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2914);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6690);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_section_heading__WEBPACK_IMPORTED_MODULE_3__, _footer__WEBPACK_IMPORTED_MODULE_8__, _Header_header__WEBPACK_IMPORTED_MODULE_9__, framer_motion__WEBPACK_IMPORTED_MODULE_10__, sections_RevealHori__WEBPACK_IMPORTED_MODULE_12__, sections_RevealUp__WEBPACK_IMPORTED_MODULE_13__]);
([components_section_heading__WEBPACK_IMPORTED_MODULE_3__, _footer__WEBPACK_IMPORTED_MODULE_8__, _Header_header__WEBPACK_IMPORTED_MODULE_9__, framer_motion__WEBPACK_IMPORTED_MODULE_10__, sections_RevealHori__WEBPACK_IMPORTED_MODULE_12__, sections_RevealUp__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/** @jsxRuntime classic */ /** @jsx jsx */ 














const data = [
    {
        id: 1,
        image: (assets_images_Ewaste_jpg__WEBPACK_IMPORTED_MODULE_5___default()),
        title: "E-Waste Recycling Drive",
        path: "/waste"
    }, 
];
const plastic = [
    {
        id: 2,
        image: (assets_images_metal_jpg__WEBPACK_IMPORTED_MODULE_6___default()),
        title: "Plastic Drive",
        path: "/"
    }, 
];
const drive = [
    {
        id: 3,
        image: (assets_images_plastic_jpg__WEBPACK_IMPORTED_MODULE_7___default()),
        title: "Plastic",
        path: "/"
    }
];
const masonryOptions = {
    transitionDuration: 0
};
const Project = ()=>{
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        sx: styles.Header
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Header_header__WEBPACK_IMPORTED_MODULE_9__["default"], null)), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        as: "section",
        id: "home",
        sx: styles.sec
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        title: "DMPS - ECOCLUB",
        description: "Hi! We protect our environment by taking some of the steps like a collecting of e-waste which is hazardous to our environment and plastic. We all do some acitivity which can protect us from destroying the world!"
    }), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        id: "gallery",
        as: "section",
        sx: styles.section
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
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
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(sections_RevealHori__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_section_heading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        sx: styles.heading,
        slogan: "Transforming Ideas into Reality",
        title: "EXPLORE OUR PROJECT"
    }))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(sections_RevealUp__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        as: (react_masonry_component__WEBPACK_IMPORTED_MODULE_1___default()),
        options: masonryOptions,
        sx: styles.galleryWrapper
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        sx: styles.waste
    }, data?.map((item)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
            href: item.path,
            key: item.id
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(pages_Gallery_gallery_cards__WEBPACK_IMPORTED_MODULE_4__["default"], {
            key: item.id,
            item: item
        }))))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        sx: styles.plastic
    }, plastic?.map((item)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
            href: item.path,
            key: item.id
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(pages_Gallery_gallery_cards__WEBPACK_IMPORTED_MODULE_4__["default"], {
            key: item.id,
            item: item
        }))))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        sx: styles.drive
    }, drive?.map((item)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
            href: item.path,
            key: item.id
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(pages_Gallery_gallery_cards__WEBPACK_IMPORTED_MODULE_4__["default"], {
            key: item.id,
            item: item
        })))))))))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, null), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        sx: styles.footer
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_footer__WEBPACK_IMPORTED_MODULE_8__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);
const styles = {
    Header: {
        m: [
            "-10px 0px -20px",
            null,
            null,
            "-30px 0px 20px",
            "35px -10px 0"
        ]
    },
    plastic: {
        m: [
            "0px 10px 0px",
            null,
            null,
            "-380px 508px 0px",
            "35px -10px 0"
        ]
    },
    waste: {
        m: [
            "0px 10px 0px",
            null,
            null,
            "0px px 0px",
            "35px -10px 0"
        ]
    },
    drive: {
        m: [
            "0px 10px 0px",
            null,
            null,
            "-340px 1008px 0px",
            "0px 0px 0px"
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
            "60px 0px 0",
            null,
            null,
            "100px 25px 0",
            "35px -30px 0"
        ],
        color: [
            "#02073E"
        ]
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7151:
/***/ ((module) => {

module.exports = "/_next/static/images/metal-412cca686b5af0c95ef7db91873c1b11.jpg";

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,954,123,139,797,772,961,437,290,117,402], () => (__webpack_exec__(3862)));
module.exports = __webpack_exports__;

})();