exports.id = 410;
exports.ids = [410];
exports.modules = {

/***/ 2133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TeamCard)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/** @jsxRuntime classic */ /** @jsx jsx */ 

function TeamCard({ src , altText , title , designation , social  }) {
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        sx: styles.card
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Image, {
        src: src,
        alt: altText,
        sx: styles.memberThumb
    }), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        sx: styles.infoWrapper
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Heading, {
        className: "info__name",
        sx: styles.infoWrapper.name
    }, title), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Text, {
        className: "info__designation",
        sx: styles.infoWrapper.designation
    }, designation)));
}
const styles = {
    card: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: [
            "130%",
            "100%"
        ],
        py: [
            5,
            null,
            4,
            5,
            6
        ],
        px: [
            1,
            null,
            6,
            7
        ],
        transition: "ease-in-out 0.4s",
        borderRadius: "8px",
        border: "2px solid grey",
        position: "relative",
        "&:hover": {
            boxShadow: [
                "none",
                null,
                "0 4px 10px rgba(39, 83, 123, 0.12)"
            ],
            border: "none",
            ".info__name": {
                color: "primary"
            },
            ".info__designation": {
                color: "primary"
            },
            ".social__share": {
                opacity: 1,
                a: {
                    my: 0,
                    py: [
                        0,
                        null,
                        1
                    ]
                }
            }
        }
    },
    memberThumb: {
        width: [
            "70px",
            "80px",
            "100px",
            null,
            null,
            "130px"
        ],
        height: [
            "70px",
            "80px",
            "100px",
            null,
            null,
            "130px"
        ],
        flexShrink: 0,
        border: "2px solid",
        borderColor: "primary",
        borderRadius: "50%"
    },
    infoWrapper: {
        width: "100%",
        textAlign: "center",
        mt: [
            3,
            null,
            4
        ],
        name: {
            fontSize: [
                1,
                2,
                3,
                null,
                null,
                4
            ],
            fontWeight: "bold",
            lineHeight: [
                1.25,
                1.35
            ],
            transition: "color 0.25s",
            mb: 1
        },
        designation: {
            fontSize: [
                "14px",
                null,
                null,
                2
            ],
            fontWeight: "body",
            lineHeight: "heading",
            color: "text",
            transition: "color 0.25s"
        }
    },
    socialShare: {
        position: [
            "relative",
            null,
            "absolute"
        ],
        right: [
            0,
            null,
            6,
            null,
            4,
            6
        ],
        bottom: [
            0,
            null,
            "18px",
            5
        ],
        width: [
            "100%",
            null,
            "auto"
        ],
        display: "flex",
        flexDirection: [
            "row",
            null,
            "column"
        ],
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.25s",
        opacity: [
            1,
            null,
            0
        ],
        pt: 2,
        a: {
            fontSize: [
                0,
                1,
                null,
                2
            ],
            color: [
                "text",
                null,
                "primary"
            ],
            lineHeight: "1em",
            my: [
                0,
                null,
                "-2px"
            ],
            px: 1,
            transition: "all 0.25s",
            "&:hover": {
                color: [
                    "primary",
                    null,
                    "text"
                ]
            }
        }
    }
};


/***/ }),

/***/ 1803:
/***/ ((module) => {

module.exports = "/_next/static/images/me-1a99d373bb6a6a777b4e43f8f47db0d7.png";

/***/ }),

/***/ 2492:
/***/ ((module) => {

module.exports = "/_next/static/images/member-1-a79fb816b7cc75894bb0752669d1a4fa.png";

/***/ }),

/***/ 8727:
/***/ ((module) => {

module.exports = "/_next/static/images/member-2-512957d04e371f8313a454253ffae88f.png";

/***/ })

};
;