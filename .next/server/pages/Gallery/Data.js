"use strict";
(() => {
var exports = {};
exports.id = 332;
exports.ids = [332,71];
exports.modules = {

/***/ 4969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/** @jsxRuntime classic */ /** @jsx jsx */ 
const Data = ({ item  })=>{
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Flex, {
        as: "figure",
        sx: styles.figure
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Image, {
        loading: "lazy",
        src: item?.image,
        alt: item?.title
    }), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        as: "figcaption"
    }, item?.title));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);
const styles = {
    figure: {
        borderRadius: 5,
        position: "relative",
        overflow: "hidden",
        alignItems: "flex-start",
        mb: 30,
        m: [
            "30px 12px 0",
            null,
            null,
            "20px 340px -1px",
            "35px -10px 0"
        ],
        width: [
            "calc(100% - 30px)",
            "calc(50% - 30px)",
            "calc(33.3333% - 90px)", 
        ],
        ":before": {
            background: `linear-gradient(1.15deg, #020718 0.72%, rgba(255, 255, 255, 0) 41.15%)`,
            borderRadius: 5,
            opacity: 0.7,
            content: `''`,
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            zIndex: 1
        },
        img: {
            borderRadius: 5,
            transform: "scale(1)",
            transition: "all 0.3s ease-in-out 0s",
            height: "50%"
        },
        ":hover": {
            img: {
                transform: "scale(1.2)"
            }
        },
        figcaption: {
            color: "#fff",
            position: "absolute",
            fontWeight: 700,
            fontSize: 5,
            lineHeight: 1.68,
            letterSpacing: "heading",
            left: 30,
            bottom: 20,
            zIndex: 1
        }
    }
};


/***/ }),

/***/ 8800:
/***/ ((module) => {

module.exports = require("theme-ui");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4969));
module.exports = __webpack_exports__;

})();