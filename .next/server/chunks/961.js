"use strict";
exports.id = 961;
exports.ids = [961];
exports.modules = {

/***/ 4961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SEO)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);



function SEO({ description ="Hi! We protect our environment by taking some of the steps like a collecting of e-waste which is hazardous to our environment and plastic. We all do some acitivity which can protect us from destroying the world!" , author ="Manish Chaurasia" , meta , title ="DMPS ECO CLUB" ,  }) {
    const metaData = [
        {
            name: `description`,
            content: description
        },
        {
            property: `og:title`,
            content: title
        },
        {
            property: `og:description`,
            content: description
        },
        {
            property: `og:type`,
            content: `website`
        },
        {
            name: `twitter:card`,
            content: `summary`
        },
        {
            name: `twitter:creator`,
            content: author
        },
        {
            name: `twitter:title`,
            content: title
        },
        {
            name: `twitter:description`,
            content: description
        }, 
    ].concat(meta);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: title
            }),
            metaData.map(({ name , content  }, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: name,
                    content: content
                }, i))
        ]
    });
}
SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``
};


/***/ })

};
;