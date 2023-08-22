(() => {
var exports = {};
exports.id = 195;
exports.ids = [195,904,251,71,377];
exports.modules = {

/***/ 4361:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8055);
/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3530);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_link__WEBPACK_IMPORTED_MODULE_1__]);
components_link__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/** @jsxRuntime classic */ /** @jsx jsx */ 


const Post = ({ post  })=>{
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("article", {
        sx: styles.post
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Flex, {
        as: "figure"
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        src: post.image,
        alt: post.title
    })), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Heading, {
        as: "h4"
    }, post.title), post.desc && /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Text, {
        as: "p"
    }, post.desc), post.link && /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_link__WEBPACK_IMPORTED_MODULE_1__/* .LearnMore */ .Fx, {
        path: post.link,
        label: "Learn More"
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);
const styles = {
    post: {
        paddingLeft: 3,
        paddingRight: 3,
        marginBottom: 6,
        width: [
            "100%",
            null,
            null,
            "50%",
            "33.3333%"
        ],
        figure: {
            margin: 0,
            img: {
                borderRadius: 5,
                width: "100%"
            }
        },
        h4: {
            color: "heading",
            fontFamily: "headingAlt",
            fontWeight: 700,
            fontSize: [
                2,
                null,
                null,
                4,
                "17px",
                4
            ],
            lineHeight: 1.5,
            mt: 3
        },
        p: {
            fontSize: [
                1,
                null,
                null,
                2
            ],
            marginTop: 3
        },
        a: {
            mt: [
                2,
                3,
                null,
                4
            ]
        }
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3184:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4961);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8772);
/* harmony import */ var _Header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2437);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6690);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6314);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_section_heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9290);
/* harmony import */ var components_cards_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4361);
/* harmony import */ var assets_images_blog_ma_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6583);
/* harmony import */ var assets_images_blog_ma_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_images_blog_ma_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_images_blog_Poster2_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7599);
/* harmony import */ var assets_images_blog_Poster2_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_images_blog_Poster2_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var assets_images_blog_s_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9642);
/* harmony import */ var assets_images_blog_s_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(assets_images_blog_s_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var assets_images_blog_Poster3_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7064);
/* harmony import */ var assets_images_blog_Poster3_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(assets_images_blog_Poster3_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var sections_RevealUp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2914);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_footer__WEBPACK_IMPORTED_MODULE_2__, _Header_header__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__, components_section_heading__WEBPACK_IMPORTED_MODULE_7__, components_cards_post__WEBPACK_IMPORTED_MODULE_8__, sections_RevealUp__WEBPACK_IMPORTED_MODULE_13__]);
([_footer__WEBPACK_IMPORTED_MODULE_2__, _Header_header__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__, components_section_heading__WEBPACK_IMPORTED_MODULE_7__, components_cards_post__WEBPACK_IMPORTED_MODULE_8__, sections_RevealUp__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/** @jsxRuntime classic */ /** @jsx jsx */ 













const data = [
    {
        id: 1,
        image: (assets_images_blog_ma_png__WEBPACK_IMPORTED_MODULE_9___default()),
        title: "Saving the Earth: Embracing a Plastic-Free Future and Recycling E-Waste",
        link: "Blog/Blog1",
        desc: ""
    },
    {
        id: 2,
        image: (assets_images_blog_Poster2_png__WEBPACK_IMPORTED_MODULE_10___default()),
        title: "7 Simple Ways to Save the Environment and Create a Sustainable Future",
        desc: "",
        link: "Blog/Blog2"
    },
    {
        id: 3,
        image: (assets_images_blog_s_png__WEBPACK_IMPORTED_MODULE_11___default()),
        title: "The Rising Tide of Hazardous E-Waste Materials: A Looming Environmental Crisis",
        desc: "",
        link: "Blog/Blog4"
    },
    {
        id: 4,
        image: (assets_images_blog_Poster3_png__WEBPACK_IMPORTED_MODULE_12___default()),
        title: "Recycling e-Waste: Towards a Sustainable Future",
        desc: "",
        link: "Blog/Blog3"
    }, 
];
const masonryOptions = {
    originTop: false
};
const Blog = ()=>{
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        sx: styles.Header
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider, {
        theme: theme__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        id: "gallery",
        as: "section",
        sx: styles.section
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        as: "section",
        id: "home",
        sx: styles.sec
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_seo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: "DMPS - ECOCLUB",
        description: "Hi! We protect our environment by taking some of the steps like a collecting of e-waste which is hazardous to our environment and plastic. We all do some acitivity which can protect us from destroying the world!"
    }), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        sx: styles.container
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
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
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_section_heading__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        sx: styles.heading,
        slogan: "BLOG & CASE STUDIES",
        title: "Our Recent Blog"
    })), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(sections_RevealUp__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        sx: styles.image
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_masonry_component__WEBPACK_IMPORTED_MODULE_6___default()), {
        sx: styles.masonry,
        options: masonryOptions
    }, data.map((post)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_cards_post__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            key: post.id,
            post: post
        })))))))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);
const styles = {
    Header: {
        m: [
            "3px 0px 0px",
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
            "60px -120px 0",
            null,
            null,
            "100px 35px",
            "33px 0px -90px"
        ],
        color: [
            "#1a3066"
        ],
        fontFamily: `'Inter', sans-serif`,
        width: [
            "250%",
            "100%"
        ]
    },
    masonry: {
        maxWidth: 1250,
        mx: [
            -15,
            null,
            null,
            null,
            "auto"
        ],
        ml: [
            -167,
            null
        ]
    },
    image: {
        ml: [
            10,
            0
        ],
        mt: [
            0,
            20
        ]
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7599:
/***/ ((module) => {

module.exports = "/_next/static/images/Poster2-14a134d65691410cee4bdc68579b6842.png";

/***/ }),

/***/ 7064:
/***/ ((module) => {

module.exports = "/_next/static/images/Poster3-d6d251ef741b1a949d899089dc403729.png";

/***/ }),

/***/ 6583:
/***/ ((module) => {

module.exports = "/_next/static/images/ma-58fa2a149152344ec71f4ee596577a7f.png";

/***/ }),

/***/ 9642:
/***/ ((module) => {

module.exports = "/_next/static/images/s-d248a1909e7358bd8e3acd4d767dea52.png";

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,954,123,139,797,961,437,772,290,705], () => (__webpack_exec__(3184)));
module.exports = __webpack_exports__;

})();