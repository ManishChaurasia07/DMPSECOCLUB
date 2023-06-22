(() => {
var exports = {};
exports.id = 818;
exports.ids = [818,54,332,743,148,71,251,904,377];
exports.modules = {

/***/ 8911:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Accordion)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2042);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4666);
/* harmony import */ var _action_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7551);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7861);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_shared__WEBPACK_IMPORTED_MODULE_5__]);
_shared__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/** @jsxRuntime classic */ /** @jsx jsx */ 





function Accordion({ items , ...props }) {
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(_base_accordion__WEBPACK_IMPORTED_MODULE_3__/* .BaseAccordion */ .S, Object.assign({
        stateReducer: (0,_shared__WEBPACK_IMPORTED_MODULE_5__/* .combineReducers */ .UY)(_shared__WEBPACK_IMPORTED_MODULE_5__/* .single */ .Zr, _shared__WEBPACK_IMPORTED_MODULE_5__/* .preventClose */ .Vn)
    }, props), ({ openIndexes , handleItemClick  })=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, items.map((item, index)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(_shared__WEBPACK_IMPORTED_MODULE_5__/* .AccordionItem */ .Qd, {
                key: item.title,
                sx: styles.accordion,
                isOpen: openIndexes.includes(index),
                className: openIndexes.includes(index) ? "is-open" : "is-closed"
            }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(_shared__WEBPACK_IMPORTED_MODULE_5__/* .AccordionButton */ .KF, {
                onClick: ()=>handleItemClick(index)
            }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                as: "h4",
                sx: styles.title
            }, item.title)), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(_shared__WEBPACK_IMPORTED_MODULE_5__/* .AccordionContents */ .x5, {
                isOpen: openIndexes.includes(index),
                sx: styles.content
            }, item.contents), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(_action_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                handleClick: ()=>handleItemClick(index),
                isOpen: openIndexes.includes(index)
            })))));
}
const styles = {
    accordion: {
        borderBottom: `1px solid ${(0,polished__WEBPACK_IMPORTED_MODULE_1__.rgba)("#0F2137", 0.3)}`,
        width: [
            "400px",
            1230
        ],
        gap: [
            2,
            null,
            null,
            4,
            3,
            13
        ],
        display: "grid",
        gridTemplateColumns: [
            "1fr ",
            null,
            null,
            null,
            "1fr 1fr"
        ],
        alignItems: "flex-start",
        position: "relative",
        paddingRight: [
            null,
            null,
            null,
            7,
            8,
            11
        ],
        ml: [
            -2,
            0
        ],
        marginBottom: [
            3,
            null,
            null,
            6,
            8
        ],
        paddingBottom: [
            3,
            null,
            null,
            6,
            8
        ],
        "&.is-open": {
            borderWidth: 2,
            borderColor: "heading"
        }
    },
    title: {
        color: "heading",
        fontWeight: 500,
        fontSize: [
            2,
            null,
            null,
            4
        ],
        lineHeight: 1.5,
        letterSpacing: "heading",
        paddingRight: [
            1,
            null,
            null,
            0
        ]
    },
    content: {
        width: [
            "380px",
            600
        ],
        fontSize: [
            1,
            null,
            null,
            2
        ],
        "> div": {
            paddingTop: [
                1,
                null,
                null,
                0
            ]
        }
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ action_button)
});

// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__(8800);
// EXTERNAL MODULE: external "polished"
var external_polished_ = __webpack_require__(2042);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: external "react-icons/hi"
const hi_namespaceObject = require("react-icons/hi");
;// CONCATENATED MODULE: external "react-icons/bi"
const bi_namespaceObject = require("react-icons/bi");
;// CONCATENATED MODULE: ./src/components/accordion/action-button.js
/** @jsxRuntime classic */ /** @jsx jsx */ 




const ActionButton = ({ isOpen , handleClick  })=>{
    return /*#__PURE__*/ (0,external_theme_ui_.jsx)("span", {
        sx: styles.button,
        onClick: handleClick
    }, isOpen ? /*#__PURE__*/ (0,external_theme_ui_.jsx)(bi_namespaceObject.BiMinus, {
        size: "28px",
        color: (0,external_polished_.rgba)("#0F2137", 0.3),
        sx: styles.button
    }) : /*#__PURE__*/ (0,external_theme_ui_.jsx)(bi_namespaceObject.BiPlus, {
        size: "28px",
        color: (0,external_polished_.rgba)("#0F2137", 0.3),
        sx: styles.button
    }));
};
/* harmony default export */ const action_button = (ActionButton);
const styles = {
    button: {
        cursor: "pointer",
        position: "absolute",
        right: 0
    }
};


/***/ }),

/***/ 4666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ BaseAccordion)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

class BaseAccordion extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
    static defaultProps = {
        stateReducer: (state, changes)=>changes,
        onStateChange: ()=>{}
    };
    state = {
        openIndexes: [
            0
        ]
    };
    getState(state = this.state) {
        return {
            openIndexes: this.props.openIndexes === undefined ? state.openIndexes : this.props.openIndexes
        };
    }
    internalSetState(changes, callback = ()=>{}) {
        let allChanges;
        this.setState((state)=>{
            const actualState = this.getState(state);
            const changesObject = typeof changes === "function" ? changes(actualState) : changes;
            allChanges = this.props.stateReducer(actualState, changesObject);
            return allChanges;
        }, ()=>{
            this.props.onStateChange(allChanges);
            callback();
        });
    }
    handleItemClick = (index)=>{
        this.internalSetState((state)=>{
            const closing = state.openIndexes.includes(index);
            return {
                type: closing ? "closing" : "opening",
                openIndexes: closing ? state.openIndexes.filter((i)=>i !== index) : [
                    ...state.openIndexes,
                    index
                ]
            };
        });
        console.log("clicked");
    };
    render() {
        return this.props.children({
            openIndexes: this.getState().openIndexes,
            handleItemClick: this.handleItemClick
        });
    }
}



/***/ }),

/***/ 7861:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KF": () => (/* binding */ AccordionButton),
/* harmony export */   "Qd": () => (/* binding */ AccordionItem),
/* harmony export */   "UY": () => (/* binding */ combineReducers),
/* harmony export */   "Vn": () => (/* binding */ preventClose),
/* harmony export */   "Zr": () => (/* binding */ single),
/* harmony export */   "x5": () => (/* binding */ AccordionContents)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/** @jsxRuntime classic */ /** @jsx jsx */ 

const AccordionButton = ({ children , ...rest })=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({
        sx: styles.buttonToggle
    }, rest), children);
const styles = {
    accordionItem: {
        overflow: "hidden"
    },
    buttonToggle: {
        display: "flex",
        alignItems: [
            "center"
        ],
        justifyContent: "space-between",
        cursor: "pointer",
        position: "relative"
    },
    accordionContent: {
        overflow: "hidden",
        lineHeight: 2,
        mt: [
            4
        ]
    }
};
const variants = {
    open: {
        height: "auto",
        marginTop: 0
    },
    closed: {
        height: 40,
        marginTop: 0
    }
};
function AccordionContents({ isOpen , ...props }) {
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, Object.assign({
        initial: "closed",
        animate: isOpen ? "open" : "closed",
        variants: variants,
        sx: styles.accordionContent
    }, props));
}
const AccordionItem = ({ isOpen , children , className , ...rest })=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({
        className: `accordion-item ${className}`,
        sx: styles.accordionItem
    }, rest), children);
const preventClose = (state, changes)=>changes.type === "closing" && state.openIndexes.length < 2 ? {
        ...changes,
        openIndexes: state.openIndexes
    } : changes;
const single = (state, changes)=>changes.type === "opening" ? {
        ...changes,
        openIndexes: changes.openIndexes.slice(-1)
    } : changes;
const combineReducers = (...reducers)=>(state, changes)=>reducers.reduce((acc, reducer)=>reducer(state, acc), changes);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/** @jsxRuntime classic */ /** @jsx jsx */ 
const Feature = ({ data , ...props })=>{
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, Object.assign({
        sx: styles.feature
    }, props), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        as: "figure"
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Image, {
        src: data?.icon,
        alt: data?.title
    })), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Heading, {
        as: "h4"
    }, data?.title), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Text, {
        as: "p"
    }, data?.description)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feature);
const styles = {
    feature: {
        borderBottom: (t)=>[
                null,
                null,
                `2x solid ${t.colors.borderColor}`
            ],
        borderRight: (t)=>[
                null,
                null,
                `2px solid ${t.colors.borderColor}`
            ],
        width: [
            "400px",
            null,
            640,
            null
        ],
        ml: [
            "0px",
            2
        ],
        padding: [
            "10px 40px",
            null,
            null,
            "45px 30px 55px",
            "40px 25px 50px 65px",
            "40px 34px 40px 3px", 
        ],
        textAlign: [
            "center",
            null,
            null,
            null,
            null,
            "center"
        ],
        transition: "0.3s ease 0s",
        ":hover": {
            backgroundColor: "white",
            borderColor: "white",
            boxShadow: "0px 20px 50px rgba(59, 90, 136, 0.05)",
            transform: "translate(-1px, -1px)"
        },
        figure: {
            display: "flex",
            alignItems: "center",
            minWidth: [
                70
            ],
            mb: 8,
            m: [
                "20px 0px -70px",
                null,
                null,
                null,
                "15x 0 0"
            ]
        },
        h4: {
            fontSize: 7,
            fontWeight: 700,
            lineHeight: 1.28,
            color: "heading",
            m: [
                "20px 0 50px 50px",
                null,
                null,
                null,
                "25px auto 36px"
            ]
        },
        p: {
            fontSize: [
                1,
                null,
                null,
                null,
                2
            ],
            lineHeight: 1.88,
            color: "headingSecondary",
            ml: 3
        },
        a: {
            mt: [
                2,
                null,
                null,
                null,
                6
            ]
        }
    }
};


/***/ }),

/***/ 8128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/** @jsxRuntime classic */ /** @jsx jsx */ 
const GalleryCard = ({ item  })=>{
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GalleryCard);
const styles = {
    figure: {
        borderRadius: 5,
        position: "relative",
        overflow: "hidden",
        alignItems: "flex-start",
        mb: 30,
        mx: 2,
        width: [
            "calc(100% - 30px)",
            "calc(100% - 30px)",
            "calc(50% - 30px)",
            "calc(50% - 30px)",
            "calc(33.3333% - 30px)", 
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
            transition: "all 0.3s ease-in-out 0s"
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
            fontSize: 9,
            lineHeight: 1.68,
            letterSpacing: "heading",
            left: 30,
            bottom: 5,
            zIndex: 1
        }
    }
};


/***/ }),

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

/***/ 5544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
        path: "/gallery",
        label: "GALLERY"
    },
    {
        path: "/",
        label: "BLOG"
    }, 
];


/***/ }),

/***/ 9540:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_dms_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2954);
/* harmony import */ var _assets_images_dms_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_dms_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8055);
/* harmony import */ var components_footer_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7971);
/* harmony import */ var _footer_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5544);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2042);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sections_RevealHori__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1950);
/* harmony import */ var sections_RevealUp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2914);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_link__WEBPACK_IMPORTED_MODULE_2__, components_footer_widget__WEBPACK_IMPORTED_MODULE_3__, sections_RevealHori__WEBPACK_IMPORTED_MODULE_6__, sections_RevealUp__WEBPACK_IMPORTED_MODULE_7__]);
([components_link__WEBPACK_IMPORTED_MODULE_2__, components_footer_widget__WEBPACK_IMPORTED_MODULE_3__, sections_RevealHori__WEBPACK_IMPORTED_MODULE_6__, sections_RevealUp__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/** @jsxRuntime classic */ /** @jsx jsx */ 







function Footer() {
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("footer", {
        sx: styles.footer
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(sections_RevealHori__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        sx: styles.footerInner
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        sx: styles.copyright
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: (_assets_images_dms_png__WEBPACK_IMPORTED_MODULE_1___default()),
        sx: styles.logo
    }), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Text, {
        as: "span"
    }, "Copyright", new Date().getFullYear(), ". All Rights Reserved by Deep Memorial Public School")), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        as: "ul",
        sx: styles.footerNav
    }, _footer_data__WEBPACK_IMPORTED_MODULE_4__/* .footerNav.map */ .A.map(({ path , label  }, i)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
            key: i
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_link__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU, {
            path: path,
            key: i,
            label: label,
            variant: "footer"
        }))))))));
}
const styles = {
    footer: {
        backgroundColor: "#F2F2F2",
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
        width: 430,
        ml: -8,
        flexDirection: [
            "column",
            null,
            null,
            null,
            "row"
        ],
        span: {
            fontSize: "13px",
            lineHeight: 1.29,
            color: (0,polished__WEBPACK_IMPORTED_MODULE_5__.rgba)("#0F2137", 0.6),
            mt: [
                "18px",
                "18px",
                "7px"
            ]
        }
    },
    footerNav: {
        cursor: "pointer",
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
                "16px",
                null,
                "20px"
            ],
            "@media only screen and (max-width: 400px)": {
                mb: "10px"
            }
        },
        a: {
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

/***/ 7971:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8055);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2042);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_link__WEBPACK_IMPORTED_MODULE_1__]);
components_link__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/** @jsxRuntime classic */ /** @jsx jsx */ 


const Widget = ({ title , items  })=>{
    return /*#__PURE__*/ jsx(Box, {
        sx: styles.footerWidget
    }, /*#__PURE__*/ jsx(Heading, {
        as: "h4"
    }, title), /*#__PURE__*/ jsx("ul", null, items.map(({ path , label , icon  }, i)=>/*#__PURE__*/ jsx("li", {
            key: i
        }, icon && /*#__PURE__*/ jsx(Image, {
            src: icon,
            alt: label
        }), /*#__PURE__*/ jsx(Link, {
            path: path,
            key: i,
            label: label,
            variant: "footer"
        })))));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Widget)));
const styles = {
    footerWidget: {
        h4: {
            color: "heading",
            fontFamily: "body",
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: 1.68,
            letterSpacing: "heading"
        },
        ul: {
            listStyle: "none",
            margin: "28px 0 0",
            padding: 0,
            li: {
                display: "flex",
                alignItems: "center",
                img: {
                    mr: "15px"
                }
            },
            a: {
                fontSize: "15px",
                color: (0,polished__WEBPACK_IMPORTED_MODULE_2__.rgba)("#02073E", 0.8),
                textDecoration: "none",
                lineHeight: 2.5
            }
        }
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5538:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8297);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7015);
/* harmony import */ var _navbar_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7608);
/* harmony import */ var _assets_images_dms_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2954);
/* harmony import */ var _assets_images_dms_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_dms_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8055);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6197);
/* harmony import */ var _primer_octicons_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5089);
/* harmony import */ var _primer_octicons_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_9__);
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
            label: "GALLERY"
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
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_3__/* .DrawerProvider */ .D, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_stickynode__WEBPACK_IMPORTED_MODULE_2___default()), {
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
            href: "/gallery"
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_link__WEBPACK_IMPORTED_MODULE_6__/* .NavLink */ .OL, {
            key: i,
            label: label,
            sx: styles.aa
        }))), blog.map(({ label  }, i)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
            href: "/"
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_link__WEBPACK_IMPORTED_MODULE_6__/* .NavLink */ .OL, {
            key: i,
            label: label,
            sx: styles.aa
        }))))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_navbar_drawer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, null)))));
}
const styles = {
    header: {
        backgroundColor: "transparent",
        position: "fixed",
        left: [
            "-50px",
            null,
            0,
            null
        ],
        right: [
            "-100px",
            null,
            0,
            null
        ],
        py: [
            5
        ],
        m: [
            "0px 0px 0",
            null,
            null,
            null,
            "-30px 0px 0"
        ],
        transition: "all 0.3s ease-in-out 0s",
        "&.is-sticky": {
            backgroundColor: "#F2F2F2",
            boxShadow: "0px 20px 50px rgba(59, 90, 136, 0.10)",
            m: [
                "0px 0px 0",
                null,
                null,
                null,
                "0px -20px 0"
            ],
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
            "-40px",
            null,
            null,
            null,
            30,
            "-50px"
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
            ml: "100px",
            cursor: "pointer",
            display: [
                "flex"
            ],
            fontWeight: 600,
            color: "#834D80",
            padding: 0,
            transition: "all 0.3s ease-in-out 0s",
            "+ a": {
                ml: 7
            }
        },
        ".active": {
            color: "#FFD662FF"
        }
    },
    aa: {
        position: "relative",
        textDecoration: "none",
        color: "#00539CFF",
        transition: "color 0.3s ease",
        "&:hover": {
            color: "#FFD662FF"
        },
        "&:before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "4px",
            bottom: "-3px",
            backgroundColor: "#FFD662FF",
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
            mt: 2,
            color: "#21D0B2"
        }
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9934);
/* harmony import */ var components_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4542);
/* harmony import */ var _assets_images_dms_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2954);
/* harmony import */ var _assets_images_dms_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_dms_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_images_icons_close_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(313);
/* harmony import */ var assets_images_icons_close_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_close_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/** @jsxRuntime classic */ /** @jsx jsx */ 






const NavbarDrawer = ()=>{
    const { state , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_2__/* .DrawerContext */ .r);
    // Toggle drawer
    const toggleHandler = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(()=>{
        dispatch({
            type: "TOGGLE"
        });
    }, [
        dispatch
    ]);
    const menuItems = [
        {
            label: "HOME",
            path: "/"
        }, 
    ];
    const about = [
        {
            label: "ABOUT",
            path: "/"
        }, 
    ];
    const project = [
        {
            label: "PROJECT",
            path: "/project"
        }, 
    ];
    const gallery = [
        {
            label: "GALLERY",
            path: "/gallery"
        }, 
    ];
    const blog = [
        {
            label: "BLOG",
            path: "/"
        }, 
    ];
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_drawer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        width: "340px",
        placement: "right",
        drawerHandler: /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
            sx: styles.handler
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.MenuButton, null)),
        open: state?.isOpen,
        toggleHandler: toggleHandler,
        closeButton: /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
            sx: styles.closeButton
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Image, {
            src: (assets_images_icons_close_png__WEBPACK_IMPORTED_MODULE_5___default()),
            alt: "close"
        })),
        maskStyle: styles.mask,
        drawerStyle: styles.drawer,
        closeBtnStyle: styles.close
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        sx: styles.wrapper
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: (_assets_images_dms_png__WEBPACK_IMPORTED_MODULE_4___default()),
        sx: styles.logo
    }), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        as: "ul",
        sx: styles.navbar
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", null, menuItems.map(({ path , label  }, i)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
            href: path,
            key: i
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", null, label)))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", null, about.map(({ path , label  }, i)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
            href: path,
            key: i
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", null, label)))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", null, project.map(({ path , label  }, i)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
            href: path,
            key: i
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", null, label)))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", null, gallery.map(({ path , label  }, i)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
            href: path,
            key: i
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", null, label)))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", null, blog.map(({ path , label  }, i)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
            href: path,
            key: i
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", null, label))))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Button, {
        variant: "primary",
        sx: styles.donateNow
    }, "Get Started")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavbarDrawer);
const styles = {
    handler: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: "0",
        width: "26px",
        cursor: "pointer",
        "@media screen and (min-width: 1024px)": {
            display: "none"
        }
    },
    drawer: {
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        outline: 0
    },
    mask: {
        opacity: 0.2
    },
    close: {
        position: "absolute",
        top: 35,
        right: 30,
        zIndex: "1"
    },
    closeButton: {
        alignItems: "center",
        backgroundColor: "transparent",
        border: 0,
        cursor: "pointer",
        display: "flex",
        p: 0
    },
    wrapper: {
        height: "100%",
        paddingTop: 30,
        width: "100%",
        display: "flex",
        flexDirection: "column"
    },
    logo: {
        ml: 6,
        mb: 9,
        mr: 12
    },
    navbar: {
        listStyle: "none",
        m: 0,
        p: 0,
        cursor: "pointer",
        "li > a": {
            backgroundColor: "transparent",
            borderTop: (t)=>`1px solid ${t.colors.borderColor}`,
            color: "#834D80",
            display: "block",
            alignItems: "center",
            minHeight: 44,
            marginLeft: 6,
            textDecoration: "none",
            position: "relative",
            transition: "all 0.3s ease-in-out 0s"
        },
        "li:last-child > a": {
            borderBottom: (t)=>`1px solid ${t.colors.borderColor}`
        },
        ".active": {
            color: "#FFD662FF"
        }
    },
    donateNow: {
        fontSize: 1,
        minHeight: 45,
        margin: "auto 30px 40px",
        backgroundColor: "transparent",
        fontFamily: "body",
        fontWeight: "bold",
        borderRadius: "5px",
        cursor: "pointer",
        display: "inline-flex",
        background: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        border: "none",
        minHeight: "60px"
    }
};


/***/ }),

/***/ 3530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_2__);



function Image({ src , ...rest }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Image, {
        src: src,
        ...rest
    });
}


/***/ }),

/***/ 2283:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5538);
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9540);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_header_header__WEBPACK_IMPORTED_MODULE_2__, _footer_footer__WEBPACK_IMPORTED_MODULE_3__]);
([_header_header__WEBPACK_IMPORTED_MODULE_2__, _footer_footer__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/** @jsxRuntime classic */ /** @jsx jsx */ 



function Layout({ children  }) {
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Flex, {
        sx: {
            minHeight: "100vh",
            flexDirection: "column",
            justifyContent: "space-between"
        }
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_header_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, null), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("main", {
        sx: {
            variant: "layout.main"
        }
    }, children), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_footer_footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 3486:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndexPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6690);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4961);
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2283);
/* harmony import */ var sections_banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5286);
/* harmony import */ var sections_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7579);
/* harmony import */ var sections_Project__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8440);
/* harmony import */ var sections_blog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9619);
/* harmony import */ var sections_faq__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7216);
/* harmony import */ var sections_gallery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3598);
/* harmony import */ var sections_team__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2021);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_layout__WEBPACK_IMPORTED_MODULE_5__, sections_banner__WEBPACK_IMPORTED_MODULE_6__, sections_About__WEBPACK_IMPORTED_MODULE_7__, sections_Project__WEBPACK_IMPORTED_MODULE_8__, sections_blog__WEBPACK_IMPORTED_MODULE_9__, sections_faq__WEBPACK_IMPORTED_MODULE_10__, sections_gallery__WEBPACK_IMPORTED_MODULE_11__, sections_team__WEBPACK_IMPORTED_MODULE_12__]);
([components_layout__WEBPACK_IMPORTED_MODULE_5__, sections_banner__WEBPACK_IMPORTED_MODULE_6__, sections_About__WEBPACK_IMPORTED_MODULE_7__, sections_Project__WEBPACK_IMPORTED_MODULE_8__, sections_blog__WEBPACK_IMPORTED_MODULE_9__, sections_faq__WEBPACK_IMPORTED_MODULE_10__, sections_gallery__WEBPACK_IMPORTED_MODULE_11__, sections_team__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function IndexPage() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Container, {
        sx: {
            m: [
                "0px 40px 0",
                null,
                null,
                "30px auto",
                "35px -30px 0"
            ]
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
            theme: theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_seo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        title: "DMPS - ECOCLUB",
                        description: "Hi! We protect our environment by taking some of the steps like a collecting of e-waste which is hazardous to our environment and plastic. We all do some acitivity which can protect us from destroying the world!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(sections_banner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(sections_About__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(sections_Project__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(sections_gallery__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(sections_team__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(sections_blog__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(sections_faq__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7579:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_section_heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9290);
/* harmony import */ var components_cards_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2164);
/* harmony import */ var assets_images_features_hein_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3736);
/* harmony import */ var assets_images_features_hein_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_images_features_hein_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_images_features_goal_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4474);
/* harmony import */ var assets_images_features_goal_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_images_features_goal_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var _RevealUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2914);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_section_heading__WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, _RevealUp__WEBPACK_IMPORTED_MODULE_6__]);
([components_section_heading__WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, _RevealUp__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/** @jsxRuntime classic */ /** @jsx jsx */ 






const data = [
    {
        id: 1,
        icon: (assets_images_features_hein_png__WEBPACK_IMPORTED_MODULE_3___default()),
        path: "#!",
        title: "WHO WE ARE",
        description: `We are the dedicated members of the Eco Club team, united by our passion for the environment and our collective goal of making a positive impact on our planet. Comprising students, teachers, and community members, we come from diverse backgrounds but share a common vision: to protect and preserve the natural world. We believe that through education, awareness, and hands-on initiatives, we can inspire change and promote sustainable practices within our school and beyond.`
    },
    {
        id: 2,
        icon: (assets_images_features_goal_png__WEBPACK_IMPORTED_MODULE_4___default()),
        path: "#!",
        title: "WHAT WE DO",
        description: `We are the dedicated members of the Eco Club team, united by our passion for the environment and our collective goal of making a positive impact on our planet. Comprising students, teachers, and community members, we come from diverse backgrounds but share a common vision: to protect and preserve the natural world. We believe that through education, awareness, and hands-on initiatives, we can inspire change and promote sustainable practices within our school and beyond.`
    }, 
];
const About = ()=>{
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
        id: "about",
        sx: styles.section
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
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
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RevealUp__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_section_heading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        sx: styles.heading,
        slogan: "Empowering Change Through Innovation",
        title: "ABOUT US"
    })), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RevealUp__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        sx: styles.grid
    }, data?.map((item)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_cards_feature__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            className: "feature-item",
            key: item.id,
            data: item
        })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);
const styles = {
    section: {
        backgroundColor: "#F2F2F2",
        pt: [
            8,
            null,
            null,
            12,
            null,
            10
        ],
        pb: [
            9,
            null,
            null,
            12,
            16,
            28
        ]
    },
    heading: {
        marginBottom: [
            7,
            null,
            null,
            8,
            7
        ],
        alignItem: "center",
        ml: [
            -14,
            400
        ],
        width: 500,
        p: {
            maxWidth: 490,
            margin: [
                "10px auto 0"
            ]
        }
    },
    grid: {
        gap: [
            3,
            null,
            0
        ],
        display: "grid",
        maxWidth: 2000,
        margin: "0 auto",
        gridTemplateColumns: [
            "repeat(1, 1r)",
            null,
            null,
            "repeat(2, 1fr)", 
        ],
        borderTop: (t)=>[
                null,
                null,
                `1px solid ${t.colors.borderColor}`
            ],
        borderLeft: (t)=>[
                null,
                null,
                `1px solid ${t.colors.borderColor}`
            ]
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8440:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3530);
/* harmony import */ var assets_images_oh_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3972);
/* harmony import */ var assets_images_oh_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_images_oh_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3139);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _RevealUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2914);
/* harmony import */ var _RevealHori__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1950);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_4__, _RevealUp__WEBPACK_IMPORTED_MODULE_6__, _RevealHori__WEBPACK_IMPORTED_MODULE_7__]);
([_emotion_react__WEBPACK_IMPORTED_MODULE_4__, _RevealUp__WEBPACK_IMPORTED_MODULE_6__, _RevealHori__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/** @jsxRuntime classic */ /** @jsx jsx */ 








const Project = ()=>{
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        as: "section",
        id: "projects",
        sx: styles.section
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        sx: styles.grid
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RevealUp__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        sx: styles.illustration
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_image__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        src: (assets_images_oh_png__WEBPACK_IMPORTED_MODULE_2___default()),
        loading: "lazy",
        alt: "support",
        sx: styles.image
    }))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        sx: styles.content
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RevealHori__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Heading, {
        sx: styles.title
    }, "Empowering Change: Eco Club Launches Ambitious Project to Create Sustainable Future"), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Text, {
        as: "p",
        sx: styles.summary
    }, 'In a bold move towards a sustainable future, the Eco Club has embarked on an ambitious project titled "Empowering Change." With a mission to combat environmental challenges and promote eco-consciousness, the club aims to spearhead transformative initiatives within the community.')), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RevealUp__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        sx: styles.button
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: "/project"
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Button, {
        sx: styles.bs
    }, "Explore Our Project ", /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_io__WEBPACK_IMPORTED_MODULE_3__.IoIosArrowForward, {
        size: "16px"
    })))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);
const fadeRight = _emotion_react__WEBPACK_IMPORTED_MODULE_4__.keyframes`
  from {
    opacity: 0;
    transform: translateX(-5px);
  }
  to: {
    opacity: 1;
  }
`;
const styles = {
    section: {
        pt: [
            8,
            null,
            12,
            6,
            null,
            15
        ],
        pb: [
            null,
            null,
            null,
            8,
            0
        ]
    },
    grid: {
        gap: [
            null,
            null,
            null,
            null,
            2
        ],
        display: [
            "flex",
            null,
            null,
            "grid"
        ],
        flexDirection: [
            "column-reverse",
            null,
            null,
            "unset"
        ],
        alignItems: "center",
        gridTemplateColumns: [
            "1fr",
            null,
            null,
            null,
            "470px 1fr",
            "1fr 549px"
        ]
    },
    image: {
        m: [
            "-490px 10px 0",
            null,
            null,
            "30px auto",
            "35px -30px 0"
        ]
    },
    button: {
        m: [
            "350px 30px 0",
            null,
            null,
            "30px auto",
            "35px -30px 0"
        ]
    },
    bs: {
        borderRadius: "40px",
        svg: {
            transform: "translateX(3px)",
            width: [
                "13px",
                null,
                null,
                "16px"
            ]
        },
        ":hover": {
            svg: {
                animation: `${fadeRight} 0.5s linear`
            }
        }
    },
    illustration: {
        display: "flex",
        alignItems: "center",
        mt: [
            2,
            null,
            null,
            0,
            4,
            7
        ],
        ml: 10,
        img: {
            maxWidth: [
                "450px",
                null,
                null,
                null,
                null,
                "100%"
            ]
        }
    },
    content: {
        marginTop: [
            null,
            null,
            null,
            null,
            null,
            13
        ],
        marginBottom: [
            null,
            null,
            null,
            null,
            null,
            16
        ],
        maxWidth: [
            null,
            null,
            null,
            420,
            560,
            "none"
        ],
        margin: [
            null,
            null,
            null,
            "0 auto",
            "unset"
        ],
        textAlign: [
            "center",
            null,
            null,
            null,
            "left"
        ]
    },
    title: {
        color: "heading",
        fontFamily: "headingAlt",
        fontSize: [
            4,
            null,
            null,
            8,
            null,
            null,
            11
        ],
        fontWeight: 500,
        ml: [
            10,
            0
        ],
        lineHeight: [
            1.33,
            null,
            1.4,
            1.53
        ],
        letterSpacing: [
            "-0.5px",
            null,
            null,
            "-1px"
        ],
        mb: 3,
        span: {
            backgroundSize: "cover",
            px: 2
        }
    },
    summary: {
        color: "textSecondary",
        fontSize: [
            "13px",
            null,
            null,
            2,
            "15px",
            2
        ],
        lineHeight: [
            1.86,
            null,
            null,
            null,
            1.86,
            2.25
        ],
        width: [
            420,
            500
        ],
        ml: [
            50,
            0
        ]
    },
    list: {
        gap: "0 18px",
        gridTemplateColumns: [
            "repeat(2, 142px)",
            null,
            null,
            "repeat(2, 200px)"
        ],
        justifyContent: [
            null,
            null,
            null,
            "center",
            "unset"
        ],
        listStyle: "none",
        mt: [
            4,
            null,
            null,
            5,
            4,
            5
        ],
        p: 0,
        li: {
            fontSize: [
                0,
                1,
                null,
                2,
                "15px",
                2
            ],
            fontWeight: 500,
            alignItems: "center",
            color: "textSecondary",
            display: "flex",
            lineHeight: [
                2.81,
                null,
                null,
                null,
                2.2,
                2.81
            ]
        }
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1950:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ 2914:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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




const RevealVertical = ({ children  })=>{
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
                y: 0
            },
            hidden: {
                opacity: 0,
                y: 100
            }
        },
        transition: {
            duration: 0.7
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RevealVertical);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5286:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_images_Bax_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5949);
/* harmony import */ var assets_images_Bax_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_images_Bax_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/** @jsxRuntime classic */ /** @jsx jsx */ 


const Banner = ()=>{
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        as: "section",
        id: "home",
        sx: styles.section
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
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
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        sx: styles.contentWrapper
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        sx: styles.bannerContent
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Heading, {
        as: "h1"
    }, "Cultivating green minds, shaping"), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Heading, {
        as: "h2"
    }, "a sustainable world"), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Text, {
        as: "p"
    }, "The phrase highlights the interconnectedness between individual mindset and collective efforts in achieving a sustainable future."), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Button, {
        sx: styles.button
    }, "Get Started"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);
const styles = {
    section: {
        background: `transparent url(${(assets_images_Bax_png__WEBPACK_IMPORTED_MODULE_1___default())}) no-repeat center top / cover `,
        pt: [
            18,
            null,
            null,
            10,
            null,
            null,
            0
        ],
        pb: [
            12,
            null,
            null,
            12,
            7,
            11,
            0
        ],
        m: [
            "0px -98px 0",
            null,
            null,
            null,
            "-30px 0px 0"
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
            pt: 14
        }
    },
    bannerContent: {
        maxWidth: [
            null,
            null,
            450,
            "600px",
            null,
            "none"
        ],
        m: [
            "20px 60px 0px",
            null,
            null,
            null,
            "25px -20px 0"
        ],
        textAlign: [
            "center",
            null,
            null,
            null,
            "left"
        ],
        h1: {
            fontFamily: "headingAlt",
            fontSize: [
                9,
                null,
                null,
                10,
                12,
                45,
                56
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
            color: "#12100E",
            width: [
                450,
                950
            ],
            mt: [
                0,
                -10
            ],
            ml: [
                0,
                "220px"
            ]
        },
        h2: {
            ml: [
                0,
                "380px"
            ],
            fontFamily: "headingAlt",
            fontSize: [
                9,
                null,
                null,
                10,
                12,
                45,
                56
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
            color: "#12100E",
            width: [
                450,
                950
            ]
        },
        p: {
            fontSize: [
                "13px",
                null,
                null,
                2,
                3
            ],
            lineHeight: [
                1.87,
                null,
                null,
                2,
                null,
                2.33
            ],
            color: "#000",
            maxWidth: [
                null,
                null,
                370,
                470
            ],
            m: [
                "20px 20px 0",
                "20px 420px 20px",
                null,
                "25px 20 0"
            ],
            width: [
                400,
                600
            ]
        },
        button: {
            zIndex: 999,
            backgroundColor: "transparent",
            fontFamily: "body",
            fontWeight: "bold",
            borderRadius: "5px",
            cursor: "pointer",
            display: "inline-flex",
            background: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
            color: "white",
            ml: [
                8,
                600
            ],
            mt: 5,
            border: "none",
            minHeight: "60px",
            padding: "0 30px"
        }
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9619:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9290);
/* harmony import */ var components_cards_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4361);
/* harmony import */ var assets_images_blog_ma_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6583);
/* harmony import */ var assets_images_blog_ma_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_images_blog_ma_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_images_blog_Poster2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7599);
/* harmony import */ var assets_images_blog_Poster2_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_images_blog_Poster2_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_images_blog_s_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9642);
/* harmony import */ var assets_images_blog_s_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_images_blog_s_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_images_blog_Poster3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7064);
/* harmony import */ var assets_images_blog_Poster3_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_images_blog_Poster3_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _RevealHori__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1950);
/* harmony import */ var _RevealUp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2914);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_section_heading__WEBPACK_IMPORTED_MODULE_2__, components_cards_post__WEBPACK_IMPORTED_MODULE_3__, _RevealHori__WEBPACK_IMPORTED_MODULE_8__, _RevealUp__WEBPACK_IMPORTED_MODULE_9__]);
([components_section_heading__WEBPACK_IMPORTED_MODULE_2__, components_cards_post__WEBPACK_IMPORTED_MODULE_3__, _RevealHori__WEBPACK_IMPORTED_MODULE_8__, _RevealUp__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/** @jsxRuntime classic */ /** @jsx jsx */ 









const data = [
    {
        id: 1,
        image: (assets_images_blog_ma_png__WEBPACK_IMPORTED_MODULE_4___default()),
        title: "Saving the Earth: Embracing a Plastic-Free Future and Recycling E-Waste",
        desc: "This blog explores the importance of plastic reduction and e-waste recycling for Earth preservation",
        link: "Blog/Blog1"
    },
    {
        id: 2,
        image: (assets_images_blog_Poster2_png__WEBPACK_IMPORTED_MODULE_5___default()),
        title: "7 Simple Ways to Save the Environment and Create a Sustainable Future",
        desc: "",
        link: "Blog/Blog2"
    },
    {
        id: 3,
        image: (assets_images_blog_s_png__WEBPACK_IMPORTED_MODULE_6___default()),
        title: "The Rising Tide of Hazardous E-Waste Materials: A Looming Environmental Crisis",
        desc: "",
        link: "Blog/Blog4"
    },
    {
        id: 4,
        image: (assets_images_blog_Poster3_png__WEBPACK_IMPORTED_MODULE_7___default()),
        title: "Recycling e-Waste: Towards a Sustainable Future",
        desc: "",
        link: "Blog/Blog3"
    }, 
];
const masonryOptions = {
    originTop: false
};
const Blog = ()=>{
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
        id: "blog",
        sx: styles.section
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RevealHori__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_section_heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        sx: {
            mb: [
                6,
                null,
                null,
                8
            ],
            ml: [
                8,
                0
            ]
        },
        slogan: "Latest Blog",
        title: "Our Recent Blog "
    })), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RevealUp__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_masonry_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        sx: styles.masonry,
        options: masonryOptions
    }, data.map((post)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_cards_post__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            key: post.id,
            post: post
        }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);
const styles = {
    section: {
        pt: [
            6,
            null,
            null,
            null,
            2,
            10,
            0
        ],
        pb: [
            2,
            null,
            null,
            null,
            6,
            10,
            14
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
        ml: "-2"
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7216:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_section_heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9290);
/* harmony import */ var components_accordion_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8911);
/* harmony import */ var _RevealHori__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1950);
/* harmony import */ var _RevealUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2914);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_section_heading__WEBPACK_IMPORTED_MODULE_1__, components_accordion_accordion__WEBPACK_IMPORTED_MODULE_2__, _RevealHori__WEBPACK_IMPORTED_MODULE_3__, _RevealUp__WEBPACK_IMPORTED_MODULE_4__]);
([components_section_heading__WEBPACK_IMPORTED_MODULE_1__, components_accordion_accordion__WEBPACK_IMPORTED_MODULE_2__, _RevealHori__WEBPACK_IMPORTED_MODULE_3__, _RevealUp__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/** @jsxRuntime classic */ /** @jsx jsx */ 





const data = [
    {
        id: 1,
        title: `01. What is the purpose of our eco club ?`,
        contents: /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, "The purpose of the eco club team is to promote environmental awareness and sustainability within the school or community. The team may engage in activities such as organizing recycling programs, implementing energy-saving initiatives, raising awareness about environmental issues, and undertaking projects to protect and restore the local ecosystem.")
    },
    {
        id: 2,
        title: `02. What types of projects or initiatives does the eco club team undertake?`,
        contents: /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, "Eco club teams undertake various projects and initiatives depending on their goals and targeted environmental issues. These commonly include organizing recycling programs, implementing energy-saving measures, raising awareness through campaigns, participating in community clean-ups, and collaborating with other organizations for broader initiatives.")
    },
    {
        id: 3,
        title: `03. What activities does the eco club team organize?`,
        contents: /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, "The eco club team organizes activities such as recycling programs, energy-saving measures, awareness campaigns, community clean-ups, educational workshops, policy advocacy, and collaborations with other organizations. Their goal is to promote environmental awareness and sustainability, inspiring individuals to take action for a greener future.")
    },
    {
        id: 4,
        title: `04. What is a goal or aim of an eco club team?`,
        contents: /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, "The goal of an eco club team is to promote environmental awareness, sustainability, and conservation within the community. They aim to educate, inspire action, and create a greener and more environmentally conscious society. Through raising awareness, implementing eco-friendly initiatives, and advocating for positive change, the team works towards protecting and preserving the planet for future generations.")
    },
    {
        id: 5,
        title: `05. How can the eco club make a broader impact beyond the school?`,
        contents: /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, "The eco club can make a broader impact by partnering with local environmental organizations, participating in community initiatives, organizing awareness campaigns, advocating for sustainable policies, and using social media platforms to engage a wider audience.")
    }, 
];
const Faq = ()=>{
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
        id: "faq",
        sx: styles.section
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RevealHori__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_section_heading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        sx: {
            mb: [
                6,
                null,
                null,
                12,
                17
            ],
            width: 400
        },
        slogan: "Get your question answer",
        title: "Frequently asked question"
    })), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RevealUp__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_accordion_accordion__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        items: data
    })), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RevealUp__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: "/ContactForm"
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        sx: styles.loadMore
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Button, {
        variant: "text"
    }, "Still Question? Contact us"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Faq);
const styles = {
    section: {
        pt: [
            6,
            null,
            null,
            null,
            6,
            10,
            1
        ],
        pb: [
            12,
            null,
            null,
            null,
            10,
            22
        ]
    },
    loadMore: {
        paddingTop: [
            3,
            null,
            null,
            0
        ],
        textAlign: "center",
        ml: [
            10,
            0
        ],
        button: {
            backgroundColor: "#ECF2F7",
            color: "#738295",
            minHeight: 50,
            px: "22px",
            ":hover": {
                backgroundColor: "primary",
                color: "white"
            }
        }
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3598:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8098);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6314);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_section_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9290);
/* harmony import */ var components_cards_gallery_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8128);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_images_Inaugration_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3998);
/* harmony import */ var assets_images_Inaugration_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_images_Inaugration_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_images_Batches_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5224);
/* harmony import */ var assets_images_Batches_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_images_Batches_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_images_p_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3397);
/* harmony import */ var assets_images_p_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_images_p_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_images_winner_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5729);
/* harmony import */ var assets_images_winner_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_images_winner_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_images_patlu_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9378);
/* harmony import */ var assets_images_patlu_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_images_patlu_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var assets_images_junior_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9395);
/* harmony import */ var assets_images_junior_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(assets_images_junior_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3139);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _RevealHori__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1950);
/* harmony import */ var _RevealUp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2914);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_section_heading__WEBPACK_IMPORTED_MODULE_3__, _emotion_react__WEBPACK_IMPORTED_MODULE_12__, _RevealHori__WEBPACK_IMPORTED_MODULE_14__, _RevealUp__WEBPACK_IMPORTED_MODULE_15__]);
([components_section_heading__WEBPACK_IMPORTED_MODULE_3__, _emotion_react__WEBPACK_IMPORTED_MODULE_12__, _RevealHori__WEBPACK_IMPORTED_MODULE_14__, _RevealUp__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/** @jsxRuntime classic */ /** @jsx jsx */ 















const data = [
    {
        id: 1,
        image: (assets_images_Inaugration_png__WEBPACK_IMPORTED_MODULE_6___default()),
        title: "Inaugration of EcoClub"
    },
    {
        id: 2,
        image: (assets_images_Batches_png__WEBPACK_IMPORTED_MODULE_7___default()),
        title: "Investiture Ceremony"
    },
    {
        id: 3,
        image: (assets_images_p_png__WEBPACK_IMPORTED_MODULE_8___default())
    },
    {
        id: 4,
        image: (assets_images_winner_jpg__WEBPACK_IMPORTED_MODULE_9___default()),
        title: "Winner of Plastic Drive"
    },
    {
        id: 5,
        image: (assets_images_junior_png__WEBPACK_IMPORTED_MODULE_11___default())
    },
    {
        id: 6,
        image: (assets_images_patlu_png__WEBPACK_IMPORTED_MODULE_10___default()),
        title: "Plastic Drive"
    }, 
];
const masonryOptions = {
    transitionDuration: 0
};
const Gallery = ()=>{
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        id: "gallery",
        as: "section",
        sx: styles.section
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        sx: styles.container
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RevealHori__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_section_heading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        sx: styles.heading,
        slogan: "Gallery Section",
        title: "Where art and imagination converge, step into our captivating gallery of boundless creativity"
    })), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RevealUp__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        as: (react_masonry_component__WEBPACK_IMPORTED_MODULE_2___default()),
        options: masonryOptions,
        sx: styles.galleryWrapper
    }, data?.map((item)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_cards_gallery_card__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            key: item.id,
            item: item
        })))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RevealHori__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: "/gallery"
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Flex, {
        as: "form",
        sx: styles.form
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Button, {
        sx: styles.bs
    }, "Explore Our Gallery ", /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_io__WEBPACK_IMPORTED_MODULE_13__.IoIosArrowForward, {
        size: "16px"
    })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gallery);
const fadeRight = _emotion_react__WEBPACK_IMPORTED_MODULE_12__.keyframes`
  from {
    opacity: 0;
    transform: translateX(-5px);
  }
  to: {
    opacity: 1;
  }
`;
const styles = {
    form: {
        ml: [
            7,
            0
        ],
        width: [
            "100%"
        ],
        button: {
            m: [
                "10px 50px 0",
                null,
                null,
                null,
                "5px 540px 0"
            ],
            borderRadius: "40px",
            svg: {
                transform: "translateX(3px)",
                width: [
                    "13px",
                    null,
                    null,
                    "16px"
                ]
            },
            ":hover": {
                svg: {
                    animation: `${fadeRight} 0.5s linear`
                }
            }
        }
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
        width: [
            390,
            1220
        ],
        ml: [
            "-10px",
            10
        ]
    },
    galleryWrapper: {
        mx: "-105px",
        ml: [
            "-35px",
            "-40px"
        ]
    },
    phone: {
        "@media (max-width: 768px)": {
            display: "none"
        }
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2021:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TeamSection)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_team_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2133);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_Team_member_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8727);
/* harmony import */ var _assets_images_Team_member_2_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_Team_member_2_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_Team_member_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2492);
/* harmony import */ var _assets_images_Team_member_1_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_Team_member_1_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_Team_me_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1803);
/* harmony import */ var _assets_images_Team_me_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_Team_me_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_section_heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9290);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _RevealUp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2914);
/* harmony import */ var _RevealHori__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1950);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_section_heading__WEBPACK_IMPORTED_MODULE_7__, _RevealUp__WEBPACK_IMPORTED_MODULE_9__, _RevealHori__WEBPACK_IMPORTED_MODULE_10__]);
([components_section_heading__WEBPACK_IMPORTED_MODULE_7__, _RevealUp__WEBPACK_IMPORTED_MODULE_9__, _RevealHori__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/** @jsxRuntime classic */ /** @jsx jsx */ 












const data = [
    {
        id: 1,
        imgSrc: (_assets_images_Team_member_1_png__WEBPACK_IMPORTED_MODULE_4___default()),
        altText: "Charoo kalra",
        title: "Charoo kalra",
        designation: "Incharge"
    },
    {
        id: 2,
        imgSrc: (_assets_images_Team_member_2_png__WEBPACK_IMPORTED_MODULE_3___default()),
        altText: "Soma ..",
        title: "Soma ..",
        designation: "Head & Incharge"
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
        imgSrc: (_assets_images_Team_me_png__WEBPACK_IMPORTED_MODULE_5___default()),
        altText: "Manish Chaurasia",
        title: "Manish Chaurasia",
        designation: "Vice President & Developer"
    }, 
];
function TeamSection() {
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RevealUp__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_section_heading__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        sx: styles.heading,
        slogan: "Our Team",
        title: "Meet Our Talented Team Members"
    })), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RevealHori__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Grid, {
        sx: styles.grid
    }, data.map((item)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_team_card__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            key: `team--key${item.id}`,
            src: item.imgSrc,
            altText: item.altText,
            title: item.title,
            designation: item.designation,
            social: item.socialProfile
        })))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RevealUp__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        sx: styles.button
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
        href: "/team"
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Flex, {
        as: "form",
        sx: styles.form
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Button, {
        sx: styles.bs
    }, "Let's Meet", /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_io__WEBPACK_IMPORTED_MODULE_6__.IoIosArrowForward, {
        size: "16px"
    }))))))));
}
const styles = {
    grid: {
        mt: [
            0,
            null,
            -6,
            null,
            -4
        ],
        gridGap: [
            "25px 60px",
            null,
            0,
            null,
            null,
            "20px 30px"
        ],
        gridTemplateColumns: [
            "repeat(2, 1fr)",
            null,
            "repeat(2, 1fr)",
            null,
            "repeat(4, 1fr)", 
        ]
    },
    heading: {
        mb: [
            30,
            30,
            40,
            60
        ],
        width: [
            390,
            500
        ],
        ml: [
            "0px",
            400
        ]
    },
    button: {
        minHeight: [
            50,
            50,
            50,
            60
        ],
        fontSize: [
            6,
            4,
            4
        ],
        m: [
            "30px 70px 0",
            null,
            null,
            null,
            "50px 540px 90px"
        ],
        maxWidth: [
            "300px",
            null,
            null,
            null,
            "80px",
            "350px"
        ],
        svg: {
            transition: "margin-left 0.3s ease-in-out 0s"
        },
        ":hover": {
            svg: {
                ml: "5px"
            }
        }
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5224:
/***/ ((module) => {

module.exports = "/_next/static/images/Batches-b9004f366572fcd633cd3e3823c11a15.png";

/***/ }),

/***/ 5949:
/***/ ((module) => {

module.exports = "/_next/static/images/Bax-1d8caa959e6855fd11ec0569ede782a0.png";

/***/ }),

/***/ 3998:
/***/ ((module) => {

module.exports = "/_next/static/images/Inaugration-8ba36dc425fb3db91f040b6c19d84936.png";

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

/***/ 4474:
/***/ ((module) => {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 3736:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAOyUlEQVR42uWcCVSU1xXHXdIYY9KTxCxt1lPTtElTTYzaJmoS48ywzrANMwiyq5GA+4ZBERFFRNxQcUOQJS64xT0uUcENl6iYNjZaU2s0scYlrsBst/83PIZZvu9jgBmxKef8znDmG5j7ftx3333vG23R4j5/zevr3ypD7dVtoko2JEUlmwFWp6h670xR9t6N77fhsQCPk4Em1U/+cotf8tfcvgGtwKtgKDgLiDE71I+ma3xoSoAHQQJNUPZ2AIKOANVEP3n7aYHezTcIrZ+2tcZP+yJ4E/wBPBESGNJIIf4tIeAvIBOcB6ZaKfbMgaQsrS9NDvQgZJO9oGpwAoJGQ9BzTRmfXq55HHQE3cDvQWvJH4CAR0Eo2ArOgivgEjgKRjBZzr55RoBXCwyi/ZxQ/6kY9HUpIULM6qOi9EBPli32goyAZVD8JH/FIw0U8isQD0rBVXAHfA/ywfM6RXBLASmahzDwDFAFSAA9OAacCmain6wTgv8SA2yQEGuyQZZWKZQ9DANq0awGiokEekAck9X320EHoWyZCKrBXZAHPgLPgFfBGPAzF5RZrxSVrBMCP8MGwAbWWDF12eMnVX9mpqmVLeuVotC0wcAvcQnrwO/wXGs8ysBl/nwW9dLYSFHxQd8CQdG9ooXERYF7PKOeEQsAgb6BgM/VBp6h9m6yGHP9CfOnNH+FiJze65ChT9WTLTI++F3gZbtrffm1U6C99aDXcTFFKLyt8NgGxIHzYDN4imdPCX9dsMjK83R6kOdG66BRB1wiplbOJFE5svRJforWEmK0fPAZBrnmYbtrb/Fr39lI4wXWyLIFtAM5QMef+xvooFGZhSVxMaNEluP8GVpllX3QbEl2lZyZISqxmnMVcj6SENMepIPXdZ5q+2vRXEwFeMpaDJset0FX8D6fMpUgDLymqckitoQnczEjBMR4AwOTgLS2CXqq2ouy8dd2lZxpwd6UIpA1oBTv3cHJQtzWXGfkGiW4AIwgE9nU0n4qbQPPcxls8KftasxvwHqxqYSAN5hXEoFagL6DZmL5dZUYJj8NDaGAmHvImglOionly/Ytni3HQCepXsYDGMAd0Ik/9xxfqUzgGnjcTkpH68BZwbUPejIG4sqsYaInCGfNtUn+8nZSUqoUmlZcChNSDZaBJ+tr8p4AO6z6l9tcFPFHjZ2Ux8B8++VVoDEzTwFXiWGkBYgUYqUsSmqMlR5mMWVcTJzTjRDvgNeCG7yxY8t4OQgXmEJvg+/sg54skOpMFmv5XSUmE3sskeV7VQPEfNyg/QQktAVvg56gC2iv0WiEluhwYLQPmgkQyhr23MpRMZQTpXZJ4ycynS6mq71Fm74qD5upNMBdu+bZgu086klGsGOtScMG8ca+RXR6RTot/bgPzQ1vmhyRpRv9jvwFsZgNCjUrvsm84HZxl5h1Ug2ZfdasSIwh06liM2dKMmj58Kim1RmRhg/C3nViuX7eTQdOAQ8huH1SgbMpVRtsVl8V/bQ7xyKGUXU0n0pnjqKcyKBGiWE7cBEx6uY7fAoLaIvgyusLnjV4qf5yOpI73kaKNdf25NC2tMENFsN+t8gWIaI5T+Xa5EQGHlw2MIRWDA6jRTFqkeMDf1PJ2H7GO4dyRcUw7pYvpWNLkumzoZE038kMEhODjAkTi5t8NWwqRYFVgkcNTf2qPJr/9LnVU0/c3DaNqral0aXln9LGsdE2gS+MDjYeXpCku3Mw1yglxUbQ4aV0dnUGbU6Jp/y4UJoXHiguJkhUjJeoGE9z8WWHUzeBl0ulYACvgc+BgY7nEX2ZbuZKyXha2l9jyhsYavx8/ED9hU0z9caKYpOzUqwxnCikG6ULIWka7c4cQatHx1JBQl9aGBNskTVFrMb4yf9cT/F9FnRmp3qulPIS2AXMA6aTBRYxuu2T6cTiJP35DVm66mPLDI0RIkblkXy6tHU2fV04icpzkmj3lHhanxhBnw0JoYL4YMrtp0IR98Ghloztpdrf17qCALuCH6wDpuNLLWJozzQyncgnVwoRg/bNsryvcXsq3SsZQvdWDaKrBXEmPPqDh++HkDYgANyxCfBkIdH+OXViEKzpVFFziDFCjJGJ4VSBKHdLeRgkgH87BHh4AdHuDHNwJjyaji6+L1KcEMMorlw9yK1SRoO7DsF9lYupUyPFsHMKaksiiS3JF3cvoJ1LU+ly6SI6v3M+bV2cQlVfFUgO/PSm2bQNr7t2YAlVrMsyf3/rcJ6VmJn1idkDWrlLjAbcdgi8AlOobIYlsFM5Q6loRCT9jH2Q0CBzJg4hRS85RagDKcTfj2Qfyqhi/QzxFelkEY3+OML8uhhtEKk8vcw/v684vU5MWb1iiqkk3i1SOglmCgvqQF1dubVxImWGeNOShD50be8CwYEeLckkjUppHigjtk8w3URDJ5Uxa7KTyFvmYfmZYbFh9MOehXUx7J1eJ+aLiZAy2GQl5Q5QS5wedADxYD4/hPsU9ND4a1s5I2aPoJRD8y0BXV2bTEvj1DVnu1pvurBlluhAb5XnUfnKDDPVxwucqiOX9y6ksqIpdGZrtmPG1hZ81iZsGW+dKToQIrQqYfC/BVn8TNv+piI7/F8OnpSS0lG06JVmWQLaNC7KprE6kDP2/hReFHlrMf8pHkZn5sbSocnhdHZebA+RLGFHtOe4hOtgMT/jZvfVpoF/8WtHwGNiYmKdWQ12pfWzEbN8TAzp0bG6VQxrEaym8p3NqVQYr8Y5sBc6YfMdy2dFxEzhA7/MbyD+2u5gLpDfr2dn233FxEwXFWMV1PHswTZiMjCdLqI7dauYI4vQIky1xHB4VoL9LZsXRbLlNj+m7c9vCbGbiFqQyG8qsucyubw9YmLmioo5mG0J6tvckQ77lC1TBrlPSkWRzWp4b8skmhrssF/qKCAmmA+4hAt5AezldYU9H8pfJ+fP3RATM8mZjPln/mgHMZl9fOnHHdkNGqzpYD5qF3qgY9JFmVi2fFmXLdtTY4U2kUoBMaO5gMRgVXBLq2nFsqiIFWX+ur/yG45GMTFa8RpT1z98vWCY4O62ED3NzQP1d8G0AvVq2Gii/kNrGDCMaPw4Mm0TWPbZLh57sdr3vlCc6HDXk5MqICaU1w4VryflXEycwOvY8xfExLwuOpi9mZbg9k0bKHaChvPdWHOjJioG2UETxkMGhAweSTQcgj4ZXiNoXrpdwV1mI6X6izTKjhS96VYmUnzbWxXaQ1xAgtX1J8Hu2g84SG0FHDteqyMG064ptGpEqFhw5r9m2bwxZKyQkIPMoJI5ZNq7hEz70fBtX0hUiI64NNf2Pa3qyrV1yThuCBd9X8A+WPCKxEfpWvJexsQ/0JDBi24Zv4/GlvJ3pXqZ/cJzvCbA6+sn0MwwX6kAcdaroLK5Y+j2wdzGFVs2fayk/LRmvLmhTJF4T046eFSi830JrOEflKpt8NgnPPaD3iqVSrLzzXEQs3+2JciKeUMEb6oJnKaZp9W9I3kNb+Ksps/19cm0qH9gve/HOQ8613NT8RH+6Y5k/hEXZe10q29LEOewVPL+wYjdNDs5czLImntKoyKo+tAC5xq4Q/NsepWLRaOEluX6GOSunXUX22m00BLojyuTGhxoTpQv/VwcT9Vbksl4ZKHwtDmQXScENcywbQJVrRtBJ7OiGyqFsco9Yr4ubouAq81Bn1hWN9eRLeWpA2iBrwfN8VU0WEztZq8KGz99KQotO/Vjh10QYdo5mYw7JpEe1yrXDLO8tpFi9oGH3CPnRGGp6SBqwxb8JZelkDFpEBliY+imMoTuKoLpH564TaqUOSlGSTeXDya7MxOqXD2UKtcOpyrAZFSuHuLwmkaKOTBB1du1577oJXzAEhqVeJFGJhLF1fQXBmU4WX02lq4p1FTg6+VUoHkxAVS1OYX0m5OoypwNjpJsKKm7/vfp0ZTmK2uoGHxQUtbS1WLWWrpRK4zqGBsxVWCnt1IywKnIqOU+XvRNZCgZt6bV9ECYLrpNn1L1+lHmjLFkD076WeboNiaSbkOi5flradG0/31PylPIKdV5MVkun0KQMF1IjCk8zkYM45yn4xI63VdOq7y96RtPf7M89jqDJpzo81SbcxQpcCpXJ2xkBFV29jFzpas3HevhRYUKhZSkW0DmDjEDhcRQvyGk99DaiKlWaChdKacsyFgLGd96BFhk2KDQknHy0IaLWZ5AlYoAixhrrnf1oaM9vegzuQJTzUbMbPCYO8R4CophdUYV7jDo75A1OiEZDnI0ZJo32nkxK5AtcWGCUuxhmVT2gSfN9ZQbZ3rL3nDLagQBfxQTY9TECmaD3hkxDN8+ZByXQKYVyURb0hyl7AIbUsk4fxTp+kWQ7iM1Vb/nR1VdlVT5Tv2CbnTxMeJxR+U7vuPAW/g5192fpn7D2kCCXrDORMY3TUwtqlAyhEWSIWEAGRPj0QokkHFkHBkGYFceEkF6T7vf2TuYdB8GQRLqVjfnJIGf8Lo8COpl6B7U0lVZ86N4nQkRnCYNltNYIKm6R0CNoM5OCfoecrq5SkyZ6HQKinZN1rhKUs9ASFLVl0U3IedPrhCTJybGFPGJo4jmEmONjGdSF18xOV9VdvF5vali0sTEUAy2Bt6hjmIUmuaXA8y16F0/oQzSI2tGNFVMpKgYtmz7RTRvnak3e9BjdfcXypoDlV192zVFTHcpMaaQ/g9OnZGYWgIF+jKy5o2miHlFUoxgndE8WGJYZ/6eQ9ZUY4p1b4KYIa0g4LZ4nRksUGcePDk6rFgO0+kd34Cm1pm9knUmIPKBn066DwTFRDRVzAIpMUZt//9VMZFNFRMtXWfiyeDZp/nrDGvysDzregYIiAlyi5ieoFqyzvhHNnudYX0LGzDbaN4vMW+CK5LTSdNPoNHT/uLFPAdON7ifkf/iM8a8ZK8UFYOdtsOGshmK730Xw7MmBFQKZktUAhl8wv5vxbQFsxyavQckWxopJsJVZzPteObcs2RL2MC6g3EF/pMahfYkvm8WIOYkBnwSYhyvfVBzzYp9OJbo5OqzYLZ/SsLx5lq9d+guyCgGY/VefdzzDy+b8eu/ReN9769s0EoAAAAASUVORK5CYII="

/***/ }),

/***/ 9395:
/***/ ((module) => {

module.exports = "/_next/static/images/junior-2f67ebdbd79350169ba85784335c0b1e.png";

/***/ }),

/***/ 3972:
/***/ ((module) => {

module.exports = "/_next/static/images/oh-5aa1c007875041f07a44fbcfb1157bd3.png";

/***/ }),

/***/ 3397:
/***/ ((module) => {

module.exports = "/_next/static/images/p-8762f6908e5d2cd3d22b7ee9accddc91.png";

/***/ }),

/***/ 9378:
/***/ ((module) => {

module.exports = "/_next/static/images/patlu-afb0931ac4747722c8be352b9e6b16f7.png";

/***/ }),

/***/ 5729:
/***/ ((module) => {

module.exports = "/_next/static/images/winner-23a6cde2baf4d15656cea42e4bfc38c0.jpg";

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

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 4751:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io");

/***/ }),

/***/ 8098:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ri");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,954,123,139,961,290,410], () => (__webpack_exec__(3486)));
module.exports = __webpack_exports__;

})();