(() => {
var exports = {};
exports.id = 818;
exports.ids = [818,904,251,71,377];
exports.modules = {

/***/ 4626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ sendContactForm)
/* harmony export */ });
const sendContactForm = async (data)=>fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    }).then((res)=>{
        if (!res.ok) throw new Error("Failed to send message");
        return res.json();
    });


/***/ }),

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
/* harmony import */ var _action_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1809);
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
            8
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
        ]
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
        fontFamily: "body",
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

/***/ 1809:
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
// EXTERNAL MODULE: external "react-icons/hi"
var hi_ = __webpack_require__(1111);
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
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
        sx: styles.section
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        sx: {
            display: [
                "flex",
                null,
                null,
                null,
                "flex"
            ],
            flexDirection: [
                "column",
                null,
                null,
                null,
                "column"
            ],
            justifyContent: "center",
            alignItems: "center"
        }
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, Object.assign({
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
    }, data?.description)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feature);
const styles = {
    section: {
        ml: [
            0,
            2
        ]
    },
    feature: {
        width: [
            400,
            null,
            640,
            null
        ],
        m: [
            "0px 0px 0px",
            null,
            null,
            "30px auto",
            "0px 0px 0"
        ],
        padding: [
            "10px 20px 20px 20px",
            null,
            null,
            "45px 30px 55px",
            "40px 25px 50px 65px",
            "50px 34px 40px 3px", 
        ],
        transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        textAlign: [
            "center",
            null,
            null,
            null,
            null,
            "center"
        ],
        boxShadow: "20px 0px 100px 100px rgba(59, 90, 136, 0.05)",
        transition: "0.3s ease 0s",
        borderRadius: "20px",
        ":hover": {
            backgroundColor: "#fff",
            borderColor: "white",
            transform: "translate(-2px, -2px)"
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
                "-30px 140px",
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
                "0px 0px 36px"
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
            ml: [
                0,
                4
            ]
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
        path: "/media",
        label: "MEDIA"
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_footer_widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7971);
/* harmony import */ var _footer_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5544);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2042);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sections_RevealHori__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1950);
/* harmony import */ var sections_RevealUp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2914);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_link__WEBPACK_IMPORTED_MODULE_2__, components_footer_widget__WEBPACK_IMPORTED_MODULE_4__, sections_RevealHori__WEBPACK_IMPORTED_MODULE_7__, sections_RevealUp__WEBPACK_IMPORTED_MODULE_8__]);
([components_link__WEBPACK_IMPORTED_MODULE_2__, components_footer_widget__WEBPACK_IMPORTED_MODULE_4__, sections_RevealHori__WEBPACK_IMPORTED_MODULE_7__, sections_RevealUp__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/** @jsxRuntime classic */ /** @jsx jsx */ 








function Footer() {
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("footer", {
        sx: styles.footer
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(sections_RevealHori__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        sx: styles.footerInner
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        sx: styles.copyright
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: (_assets_images_dms_png__WEBPACK_IMPORTED_MODULE_1___default()),
        sx: styles.logo
    }), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/copyright"
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Text, {
        as: "span"
    }, "All rights Reserved by DMPS ECOCLUB"))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        as: "ul",
        sx: styles.footerNav
    }, _footer_data__WEBPACK_IMPORTED_MODULE_5__/* .footerNav.map */ .A.map(({ path , label  }, i)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
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
        pt: [
            0,
            0
        ],
        mb: [
            0,
            -10
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
        width: [
            430,
            630
        ],
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
            cursor: "pointer",
            color: (0,polished__WEBPACK_IMPORTED_MODULE_6__.rgba)("#0F2137", 0.6),
            mt: [
                "18px",
                "18px",
                "7px"
            ],
            ml: "23px"
        }
    },
    footerNav: {
        cursor: "pointer",
        listStyle: "none",
        margin: [
            "15px 36px 0",
            "10px 30px 0px"
        ],
        padding: 0,
        fontWeight: 600,
        color: "#546681",
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
            label: "MEDIA"
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
            href: "/media"
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_link__WEBPACK_IMPORTED_MODULE_6__/* .NavLink */ .OL, {
            key: i,
            label: label,
            sx: styles.aa
        }))), blog.map(({ label  }, i)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
            href: "/blog"
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
            backgroundColor: "#fff",
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
            "0px",
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
            ml: "200px",
            fontFamily: "header",
            cursor: "pointer",
            display: [
                "flex"
            ],
            fontWeight: 600,
            color: "#546681",
            padding: 0,
            transition: "all 0.3s ease-in-out 0s",
            "+ a": {
                ml: 7
            }
        },
        ".active": {
            color: "#484dff"
        }
    },
    aa: {
        position: "relative",
        textDecoration: "none",
        color: "#484dff",
        transition: "color 0.3s ease",
        "&:hover": {
            color: "#484dff"
        },
        "&:before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "4px",
            bottom: "-3px",
            backgroundColor: "#484dff",
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
            label: "MEDIA",
            path: "/media"
        }, 
    ];
    const blog = [
        {
            label: "BLOG",
            path: "/blog"
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
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        as: "ul",
        sx: styles.navbar
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", null, menuItems.map(({ path , label  }, i)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
            href: path,
            key: i
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", null, label)))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {
        sx: {
            marginBottom: 3,
            marginLeft: "20px",
            marginRight: 10,
            marginTop: -2
        }
    }), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", null, about.map(({ path , label  }, i)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
            href: path,
            key: i
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", null, label)))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {
        sx: {
            marginBottom: 3,
            marginLeft: "20px",
            marginRight: 10,
            marginTop: -2
        }
    }), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", null, project.map(({ path , label  }, i)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
            href: path,
            key: i
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", null, label)))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {
        sx: {
            marginBottom: 3,
            marginLeft: "20px",
            marginRight: 10,
            marginTop: -2
        }
    }), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", null, gallery.map(({ path , label  }, i)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
            href: path,
            key: i
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", null, label)))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {
        sx: {
            marginBottom: 3,
            marginLeft: "20px",
            marginRight: 10,
            marginTop: -2
        }
    }), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", null, blog.map(({ path , label  }, i)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
            href: path,
            key: i
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
            sx: styles.name
        }, label)))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {
        sx: {
            marginBottom: 3,
            marginLeft: "20px",
            marginRight: 10,
            marginTop: -2
        }
    }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavbarDrawer);
const styles = {
    handler: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#646464",
        flexShrink: "0",
        width: "56px",
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
        mt: 10,
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
    }
};


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
/* harmony import */ var sections_faq__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7216);
/* harmony import */ var sections_gallery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3598);
/* harmony import */ var sections_team__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2021);
/* harmony import */ var sections_Contact__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1174);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_layout__WEBPACK_IMPORTED_MODULE_5__, sections_banner__WEBPACK_IMPORTED_MODULE_6__, sections_About__WEBPACK_IMPORTED_MODULE_7__, sections_Project__WEBPACK_IMPORTED_MODULE_8__, sections_faq__WEBPACK_IMPORTED_MODULE_9__, sections_gallery__WEBPACK_IMPORTED_MODULE_10__, sections_team__WEBPACK_IMPORTED_MODULE_11__, sections_Contact__WEBPACK_IMPORTED_MODULE_12__]);
([components_layout__WEBPACK_IMPORTED_MODULE_5__, sections_banner__WEBPACK_IMPORTED_MODULE_6__, sections_About__WEBPACK_IMPORTED_MODULE_7__, sections_Project__WEBPACK_IMPORTED_MODULE_8__, sections_faq__WEBPACK_IMPORTED_MODULE_9__, sections_gallery__WEBPACK_IMPORTED_MODULE_10__, sections_team__WEBPACK_IMPORTED_MODULE_11__, sections_Contact__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(sections_gallery__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(sections_team__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(sections_faq__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(sections_Contact__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
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
/* harmony import */ var assets_images_features_bulb_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5960);
/* harmony import */ var assets_images_features_bulb_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_images_features_bulb_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_images_features_rocket_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3615);
/* harmony import */ var assets_images_features_rocket_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_images_features_rocket_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var _RevealUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2914);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_section_heading__WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, _RevealUp__WEBPACK_IMPORTED_MODULE_6__]);
([components_section_heading__WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, _RevealUp__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/** @jsxRuntime classic */ /** @jsx jsx */ 






const data = [
    {
        id: 1,
        icon: (assets_images_features_bulb_png__WEBPACK_IMPORTED_MODULE_3___default()),
        path: "#!",
        title: "WHO WE ARE",
        description: `We are a group of dedicated and passionate students from grades 8 to 10, united by our love for the environment. Our primary goal is to promote a sustainable and eco-friendly environment within our school and beyond.
    Through various initiatives and projects, we aim to raise awareness about environmental issues and encourage sustainable practices among students, teachers, and the whole school.
    `
    },
    {
        id: 2,
        icon: (assets_images_features_rocket_png__WEBPACK_IMPORTED_MODULE_4___default()),
        path: "#!",
        title: "WHAT WE DO",
        description: `We are passionate about creating a sustainable environment within our school and beyond. Our club focuses on launching various projects that actively promote eco-friendly practices, including waste reduction, plastic recycling, and responsible consumption. By implementing these initiatives, we strive to establish a greener and healthier school environment for all.`
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
        fontFamily: `'Inter', sans-serif`,
        width: 500,
        p: {
            maxWidth: 490,
            margin: [
                "10px auto 0"
            ],
            fontFamily: "body"
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
        ]
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1174:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4626);
/* harmony import */ var _assets_images_con3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6809);
/* harmony import */ var _assets_images_con3_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_con3_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const initValues = {
    name: "",
    email: "",
    subject: "",
    message: ""
};
const initState = {
    isLoading: false,
    error: "",
    values: initValues
};
function Home() {
    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useToast)();
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initState);
    const { 0: touched , 1: setTouched  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const { values , isLoading , error  } = state;
    const onBlur = ({ target  })=>setTouched((prev)=>({
                ...prev,
                [target.name]: true
            }));
    const handleChange = ({ target  })=>setState((prev)=>({
                ...prev,
                values: {
                    ...prev.values,
                    [target.name]: target.value
                }
            }));
    const handleBlur = (e)=>{
        const { name  } = e.target;
        setTouched((prevTouched)=>({
                ...prevTouched,
                [name]: true
            }));
    };
    const onSubmit = async ()=>{
        setState((prev)=>({
                ...prev,
                isLoading: true
            }));
        try {
            await (0,_lib_api__WEBPACK_IMPORTED_MODULE_5__/* .sendContactForm */ .m)(values);
            setTouched({});
            setState(initState);
            toast({
                title: "Message sent.",
                status: "success",
                duration: 2000,
                position: "top"
            });
        } catch (error) {
            setState((prev)=>({
                    ...prev,
                    isLoading: false,
                    error: error.message
                }));
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_4__.Box, {
        sx: {
            padding: [
                "120px 1%",
                "100px 0%"
            ],
            background: `url(https://uploads-ssl.webflow.com/64c29158c3eb63eb40104787/64c29158c3eb63eb40104861_bg_shade.svg) no-repeat top / cover`,
            "@media (max-width: 767px)": {
                backgroundImage: "none"
            }
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
            sx: {
                marginTop: "-150px"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                        sx: {
                            textAlign: "center",
                            marginBottom: [
                                "20px",
                                "-40px"
                            ]
                        },
                        children: "Contact Us"
                    }),
                    error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        color: "red.300",
                        my: 4,
                        fontSize: "xl",
                        children: error
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                        src: (_assets_images_con3_png__WEBPACK_IMPORTED_MODULE_3___default()),
                        sx: {
                            m: [
                                "50px 20px 20px",
                                null,
                                null,
                                "100px 100px 150px"
                            ],
                            width: [
                                "100%",
                                "40%"
                            ],
                            "@media (max-width: 767px)": {
                                display: "none"
                            }
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                        sx: styles.body,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                isRequired: true,
                                isInvalid: touched.name && !values.name,
                                mb: 5,
                                children: [
                                    values.name === "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                        position: "absolute",
                                        display: "block",
                                        marginLeft: "15px",
                                        marginTop: "6px",
                                        children: "Full Name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                        type: "text",
                                        name: "name",
                                        errorBorderColor: "red.300",
                                        value: values.name,
                                        onChange: handleChange,
                                        onBlur: handleBlur,
                                        onFocus: (e)=>{
                                            e.target.placeholder = "";
                                        },
                                        autoComplete: "name" // Add the autocomplete attribute here
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormErrorMessage, {
                                        children: "Required"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                isRequired: true,
                                isInvalid: touched.email && !values.email,
                                mb: 5,
                                children: [
                                    values.email === "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                        position: "absolute",
                                        display: "block",
                                        marginLeft: "15px",
                                        marginTop: "6px",
                                        children: "Email"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                        type: "email",
                                        name: "email",
                                        errorBorderColor: "red.300",
                                        value: values.email,
                                        onChange: handleChange,
                                        onBlur: handleBlur,
                                        onFocus: (e)=>{
                                            e.target.placeholder = "";
                                        },
                                        autoComplete: "email" // Add the autocomplete attribute here
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormErrorMessage, {
                                        children: "Required"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                isRequired: true,
                                isInvalid: touched.subject && !values.subject,
                                mb: 5,
                                children: [
                                    values.subject === "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                        position: "absolute",
                                        display: "block",
                                        marginLeft: "15px",
                                        marginTop: "6px",
                                        children: "Subject"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                        type: "text",
                                        name: "subject",
                                        errorBorderColor: "red.300",
                                        value: values.subject,
                                        onChange: handleChange,
                                        onBlur: handleBlur,
                                        onFocus: (e)=>{
                                            e.target.placeholder = "";
                                        },
                                        autoComplete: "subject" // Add the autocomplete attribute here
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormErrorMessage, {
                                        children: "Required"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                isRequired: true,
                                isInvalid: touched.message && !values.message,
                                mb: 5,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                        marginLeft: "15px",
                                        marginTop: "6px",
                                        children: "Message"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Textarea, {
                                        type: "text",
                                        name: "message",
                                        rows: 4,
                                        errorBorderColor: "red.300",
                                        value: values.message,
                                        onChange: handleChange,
                                        onBlur: onBlur,
                                        autoComplete: "message" // Add the autocomplete attribute here
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormErrorMessage, {
                                        children: "Required"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                                sx: styles.button,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    sx: {
                                        backgroundColor: "#484dff",
                                        color: "#fff",
                                        marginLeft: "-15px",
                                        ":hover": {
                                            backgroundColor: "#3898ec"
                                        }
                                    },
                                    isLoading: isLoading,
                                    disabled: !values.name || !values.email || !values.subject || !values.message,
                                    onClick: onSubmit,
                                    children: "Submit"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
const styles = {
    body: {
        m: [
            "0px 0px 0px",
            "-650px 800px 50px"
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
/* harmony import */ var assets_images_person_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8566);
/* harmony import */ var assets_images_person_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_images_person_png__WEBPACK_IMPORTED_MODULE_2__);
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
        src: (assets_images_person_png__WEBPACK_IMPORTED_MODULE_2___default()),
        loading: "lazy",
        alt: "support",
        sx: styles.image
    }))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        sx: styles.content
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RevealHori__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Heading, {
        sx: styles.title
    }, "Initiatives for a sustainable school environment"), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Text, {
        as: "p",
        sx: styles.summary
    }, "We have launched several successful initiatives that combat plastic waste, reduce waste, and promote students to recycle paper.")), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RevealUp__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        sx: styles.button
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: "/project"
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Button, {
        sx: styles.bs
    }, "Our Project ", /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_io__WEBPACK_IMPORTED_MODULE_3__.IoIosArrowForward, {
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
            5
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
        fontWeight: 500,
        fontSize: [
            4,
            null,
            null,
            8,
            null,
            null,
            11
        ],
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
        fontFamily: "body",
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
        ],
        fontWeight: "300px"
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

/***/ 5286:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_images_ban5_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9634);
/* harmony import */ var assets_images_ban5_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_images_ban5_png__WEBPACK_IMPORTED_MODULE_1__);
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
    })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);
const styles = {
    section: {
        background: `transparent url(${(assets_images_ban5_png__WEBPACK_IMPORTED_MODULE_1___default())}) no-repeat center top / cover `,
        pt: [
            290,
            null,
            null,
            10,
            null,
            null,
            0
        ],
        pb: [
            15,
            null,
            null,
            12,
            7,
            11,
            0
        ],
        m: [
            "0px -98px 0px -60px",
            null,
            null,
            null,
            "-30px 0px 0px"
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
        title: `01. What is the purpose of an Eco Club?`,
        contents: /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, "The purpose of the Eco Club team is to promote environmental awareness and sustainability within the school. Our team has launched projects that combat plastic waste, reduce waste, and promote students to recycle paper.")
    },
    {
        id: 2,
        title: `02. Who are the people associated with the Eco Club?`,
        contents: /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, "The Eco Club, led by Achintya,  is comprised of a motivated group of students from 8th to 10th grade who are passionate about creating a sustainable environment within our school. Our mission is to promote environmental awareness and inspire positive change.")
    },
    {
        id: 3,
        title: `03. What is a goal or aim of an Eco Club team?`,
        contents: /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, "The goal of an Eco Club team is to promote environmental awareness, sustainability, and conservation within the community. They aim to educate, inspire action, and create a greener and more environmentally conscious society. Through raising awareness, implementing eco-friendly initiatives, and advocating for positive change, the team works towards protecting and preserving the planet for future generations.")
    },
    {
        id: 4,
        title: `04. How can we contribute our part?`,
        contents: /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, "We always appreciate people who are eager to play their part in saving the environment. The easiest way you can contribute to the environment is taking part in the various projects. Your active participation will make a significant impact!")
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
        slogan: "",
        title: "Frequently asked questions"
    })), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RevealUp__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_accordion_accordion__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        items: data
    }))));
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
            backgroundColor: "#FFF",
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
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9290);
/* harmony import */ var components_cards_gallery_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8128);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_images_Inaugration_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3998);
/* harmony import */ var assets_images_Inaugration_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_images_Inaugration_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_images_gall2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7186);
/* harmony import */ var assets_images_gall2_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_images_gall2_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_images_p_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3397);
/* harmony import */ var assets_images_p_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_images_p_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_images_winner_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5729);
/* harmony import */ var assets_images_winner_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_images_winner_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_images_patlu_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9378);
/* harmony import */ var assets_images_patlu_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_images_patlu_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_images_junior_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9395);
/* harmony import */ var assets_images_junior_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_images_junior_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var assets_images_triangle_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9887);
/* harmony import */ var assets_images_triangle_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(assets_images_triangle_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3139);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _RevealHori__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1950);
/* harmony import */ var _RevealUp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2914);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_section_heading__WEBPACK_IMPORTED_MODULE_2__, _emotion_react__WEBPACK_IMPORTED_MODULE_12__, _RevealHori__WEBPACK_IMPORTED_MODULE_14__, _RevealUp__WEBPACK_IMPORTED_MODULE_15__]);
([components_section_heading__WEBPACK_IMPORTED_MODULE_2__, _emotion_react__WEBPACK_IMPORTED_MODULE_12__, _RevealHori__WEBPACK_IMPORTED_MODULE_14__, _RevealUp__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/** @jsxRuntime classic */ /** @jsx jsx */ 















const data = [
    {
        id: 1,
        image: (assets_images_Inaugration_png__WEBPACK_IMPORTED_MODULE_5___default()),
        title: "Inaugration of EcoClub"
    },
    {
        id: 2,
        image: (assets_images_gall2_png__WEBPACK_IMPORTED_MODULE_6___default()),
        title: "Investiture Ceremony"
    },
    {
        id: 3,
        image: (assets_images_p_png__WEBPACK_IMPORTED_MODULE_7___default())
    },
    {
        id: 4,
        image: (assets_images_winner_jpg__WEBPACK_IMPORTED_MODULE_8___default()),
        title: "Winner of Plastic Drive"
    },
    {
        id: 5,
        image: (assets_images_junior_png__WEBPACK_IMPORTED_MODULE_10___default())
    },
    {
        id: 6,
        image: (assets_images_patlu_png__WEBPACK_IMPORTED_MODULE_9___default()),
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
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RevealHori__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_section_heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        sx: styles.heading,
        slogan: "Gallery Section",
        title: "Where art and imagination converge, step into our captivating gallery of boundless creativity"
    })), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RevealUp__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        as: (react_masonry_component__WEBPACK_IMPORTED_MODULE_1___default()),
        options: masonryOptions,
        sx: styles.galleryWrapper
    }, data?.map((item)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_cards_gallery_card__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            key: item.id,
            item: item
        })))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RevealHori__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        sx: styles.button
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/media"
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Button, {
        sx: styles.bs
    }, "Explore Our Gallery", /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_io__WEBPACK_IMPORTED_MODULE_13__.IoIosArrowForward, {
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
    button: {
        m: [
            "10px 50px 0px",
            null,
            null,
            "0px auto",
            "5px 530px -40px"
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
        ],
        padding: [
            "120px 5%",
            "120px 5%"
        ],
        background: `url(https://uploads-ssl.webflow.com/64c29158c3eb63eb40104787/64c29158c3eb63eb40104861_bg_shade.svg) no-repeat top / cover`
    },
    heading: {
        mb: [
            30,
            30,
            40,
            10
        ],
        width: [
            390,
            1220
        ],
        ml: [
            "-10px",
            10
        ],
        fontFamily: "headingAlt"
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
/* harmony import */ var _assets_images_Team_achintya_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1177);
/* harmony import */ var _assets_images_Team_achintya_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_Team_achintya_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_Team_person_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(301);
/* harmony import */ var _assets_images_Team_person_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_Team_person_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_Team_teacher_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1675);
/* harmony import */ var _assets_images_Team_teacher_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_Team_teacher_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_Team_manish_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1468);
/* harmony import */ var _assets_images_Team_manish_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_Team_manish_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_section_heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9290);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _RevealUp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2914);
/* harmony import */ var _RevealHori__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1950);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_section_heading__WEBPACK_IMPORTED_MODULE_8__, _RevealUp__WEBPACK_IMPORTED_MODULE_10__, _RevealHori__WEBPACK_IMPORTED_MODULE_11__]);
([components_section_heading__WEBPACK_IMPORTED_MODULE_8__, _RevealUp__WEBPACK_IMPORTED_MODULE_10__, _RevealHori__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/** @jsxRuntime classic */ /** @jsx jsx */ 












const data = [
    {
        id: 1,
        imgSrc: (_assets_images_Team_person_jpg__WEBPACK_IMPORTED_MODULE_4___default()),
        altText: "Charoo kalra",
        title: "Charoo kalra",
        designation: "Teacher Incharge"
    },
    {
        id: 2,
        imgSrc: (_assets_images_Team_teacher_png__WEBPACK_IMPORTED_MODULE_5___default()),
        altText: "Soma Mitra",
        title: "Soma Mitra",
        designation: "Teacher Incharge"
    },
    {
        id: 3,
        imgSrc: (_assets_images_Team_achintya_png__WEBPACK_IMPORTED_MODULE_3___default()),
        altText: "Achintya Pasricha",
        title: "Achintya Pasricha",
        designation: "Founder"
    },
    {
        id: 4,
        imgSrc: (_assets_images_Team_manish_png__WEBPACK_IMPORTED_MODULE_6___default()),
        altText: "Manish Chaurasia",
        title: "Manish Chaurasia",
        designation: "Vice President"
    }, 
];
function TeamSection() {
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
        sx: styles.section
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RevealUp__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_section_heading__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        sx: styles.heading,
        slogan: "The Whole Team",
        title: "Meet Our Talented Team Members"
    })), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RevealHori__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Grid, {
        sx: styles.grid
    }, data.map((item)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_team_card__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            key: `team--key${item.id}`,
            src: item.imgSrc,
            altText: item.altText,
            title: item.title,
            designation: item.designation,
            social: item.socialProfile
        })))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RevealUp__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        sx: styles.button
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
        href: "/team"
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Flex, {
        as: "form",
        sx: styles.form
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Button, {
        sx: styles.bs
    }, "Let's Meet", /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowForward, {
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
        ],
        fontFamily: "heading"
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

/***/ 3998:
/***/ ((module) => {

module.exports = "/_next/static/images/Inaugration-8ba36dc425fb3db91f040b6c19d84936.png";

/***/ }),

/***/ 9634:
/***/ ((module) => {

module.exports = "/_next/static/images/ban5-6ad4a7625b7e2cfde82d0feb8d32d590.png";

/***/ }),

/***/ 6809:
/***/ ((module) => {

module.exports = "/_next/static/images/con3-d25371f33d9c7e482e45548cfa2cb662.png";

/***/ }),

/***/ 5960:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA0CAMAAADCKvr4AAABVlBMVEUAAAAwQGAwUGD/zxD/z2D/1lowSGD/xxj/xyD/zxj/zyD/z1gwSmD/yhv/yiD/z1r/yxz/z1z/zB3/z1n/z1z/0lz/0VtAWGpAWmr/yhv/zR3/z1r/z11AWmr/0VxAWWv/yxv/yx7/zR7/z1v/zxz/zx7/0VxAWmz/yx7/z1xCW2v/zx3/zx7/zBz/z1z/zR3/0FszSV7/z1v/0Vz/zR3/0Fz/0lz/zB00SV3/zhz/zh3/0Fz/0lw0SV7/zBz/zhwzSV4zSl7/zR3/0Vv/0V0zSl47U2Q9VGY+Vmm8oTP/zR3/0Vw0Sl46UmQ8VGY9Vmg/WGpBWmuznDWzpWCzqG6zr4qzsZj/zR3/0Cv/0Vz/0zn/1kf/1kj/2VX/2Vb/2lX/3GP/3WP/3WT/4HL/44D/5o7/6Zz/7Kr/7Kv/77j/77n/8sb/88f/9tT/9tX/+OP/+eP//PFZg/flAAAATHRSTlMAEBAQEB8gICAgICAwMDAwQEBQUFBQX2BgYGBgYG9vcHBwcHB/f3+AgICPj4+QkJ+foKCgr6+vsL+/v7+/z8/P39/f39/v7+/v7+/v4Qe7yAAAAhtJREFUSMfVlttb0zAYxqPTMZzYDpDDOJ/EoUykiGNDCoNxKKg4DmmrotKNMZiz+/9vSBuStiRp5/Nww3uT0y/ZmzTftwDA1dYW+A8lDePpQ8XBYiF8ueWXYcOjy08C7ZRh9HmtWEKWE77RV4bRE5yvUF6eUaEr9U0HpZW7v4f4lAPnoU95Z0IvhwYguy8B8Bbe0YxjVOHvKJaHjNQO0f5jKuSoGBPgS5CrPJ+ehgJN8uhOTYRrPDvvoFCvObgmxjnLd8MQDTL4fBg+z+ArYbjqXd2pTCYzBEAxDC+im4OwqSTIGo4kQIcs0/pn/zHrrapu0U4gudgCkApIC76DqdlV3Ww0TL1mN+nROPFVKHyQqClqxqrQWo31zlwYs05qV79J7SODT1Cff0mlpZPaOIN3UfziJy5/NGhXFxAfvFXFZeVCbB1FKRnUr3HZ+EV60rwbTJe3secWaa9xw+OZFjB/RqxrCX44pW/Hz13TVXL+3aLYvuX1pt96WpAHV5NAxn6ayLyOrWsyyp99LI3z4AtsHt2tszpxMhzIn8E86H7c80s0pUKjVGH4FM2DznE6Rprf8T335U9P0qbi/1rXpmn7t5ndT4qOZ69cLp8cH52iopyI/p/ZOPAUTY/sfPE0EIl/CygSn9396mns3r0f+jR33977tz976o92k/Osf2rjORDPlTC8nnve1vvh8bpLP2r3vRF/Xyrl4ryRG05NQR1FFUxdAAAAAElFTkSuQmCC"

/***/ }),

/***/ 3615:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAB5lBMVEUAAACAgIDfQFDvz6//YHD/38/mOlJYYGB4gIffOFDv16/359f/YHhaYGXkNVDv1K/0VWr/ZXpYYGTjOFDz16v3WHD769f/YHjlNlDlOVD11q/56dnkOFD016/36tf/YHj/Ynr67djmN1D01q/77dn/YnrlOFDz163/Ynv/ZHv/cobkOVDz1q59hIjlOlDnSFryZ3v016/638/67dnlOFDy167mOVDz2K//Y3r/Y3zmOVBXX2TmOVD67Nj/Y3vmOVDrZ3z02K/67dhXX2NhXWJ7g4iFgIfmOVDnOFD016/67dj/Ynr/Ynv/Y3vAQlXmOVD67dn/Y3wAyMgeysU9zMI+19VXX2Rk4dxpWmJrbm134tt349t6z7t7VV98g4iJ0LqJ0bqJ5NuMf4aMkJKUjpGVfYaWTluY0biY0rib3s+td4Ov5tqv59q307W459q56NnL6NnUPlLU6dnV6dndO1HhyKXjgXvmOVDmn43nQ1boTFzoTVzqYWjqa27q387sfnrtiH/tiIDvZ33vm4vwpZHxr5fyw6Pzzan016/1U2v1oaT3nJn3nJr35Mn649L67Nj7wbv7ysH728z75NP8qKn8qKr8sK/8ubX9lp39lp79p6n+a4H+dIb+fYz+jpj/Y3v/a4H/dIawu8RmAAAAUnRSTlMAEBAQEBAfICAgICAgMDAwMDBAQEBAQEBQUFBQYGBgYGBvcHB/f4CAj4+PkJCfn5+fn5+foKCvr6+vsL+/v7/Pz8/P39/f39/f39/f39/v7+/vXyQ+iAAAAmxJREFUSMeV1Plb0zAYB/CwgQzve96i4oGK942gqDjnxGHRIjLrfSAOlKqViW4qsopCdOKBiHX/qU2aNEnXbOP9YYPn+XyfN9deAErX3PX1R2Ixy65Y88KSevl2TEl9PFFcV9W1w2neG5FSHMJfvDeMIn4d4hB+Ebw8MKcJOjX+j/fSwOp2SGuC97JAHWQ1nue8ZNP7IV9fmTd8j7WqCYr13fXGMT9/isKB/t5+Hf3xiXpjh0+A+oFbnaiu6XDMzNDACvn6H3fS6jFN833KCdRIz+eJ668oSTuRzaR8D2kDXX8388plE9dwemh3wf3S+9I5r+AWuJZ6D+g8bdDHe+UG8VHxdxIO73OPvpf3SoIE1jIdrr9kWZPsrvp4TztEZ1NeuQ09l3yOBXTe0z1sdRfTht/jT/45dHO+gzQIin5aeD8688pDcQfEWznxxfW4nmx5r8dPin7MfNDhrCcp7pj6fM7j7UomEjfdO1tFGhBvjRZ6odwTuoAHWvPJu2+w/Pb7758p63OBP8jut3ZRpf3VoN1BiR9T+Pc76PUt3kcX0jSUmKDzweuD3kCDhhKj1L8q5SuQ1x6582dIXH+BBxWttr/H5lWa9zv9JkuoVbv9js2rEc5v8h9dobOczzAeXSAbpnt8/eGgzNcy/8Ll2fQs6XRvc/39rufEf0gZ0sBm6p9dV1UnMfLa/jdQpAH2T6+qKk5k3w7KhzveAfYHzqi4ul46k3GXLHAU+/gaUH0a+caLhmyS0oDt41vQgu1E42JwzijeACw7fmgj2V/1PPvDCURqQLmFfbx8H8B+ftkeLJmhBytn6EEgIvf/Aav9UzP1d8z+AAAAAElFTkSuQmCC"

/***/ }),

/***/ 7186:
/***/ ((module) => {

module.exports = "/_next/static/images/gall2-61f15a2dd8f9a03e21df68bd964f51a0.png";

/***/ }),

/***/ 9395:
/***/ ((module) => {

module.exports = "/_next/static/images/junior-2f67ebdbd79350169ba85784335c0b1e.png";

/***/ }),

/***/ 3397:
/***/ ((module) => {

module.exports = "/_next/static/images/p-8762f6908e5d2cd3d22b7ee9accddc91.png";

/***/ }),

/***/ 9378:
/***/ ((module) => {

module.exports = "/_next/static/images/patlu-afb0931ac4747722c8be352b9e6b16f7.png";

/***/ }),

/***/ 8566:
/***/ ((module) => {

module.exports = "/_next/static/images/person-2708dd18553e40c7033ff6d21257bf40.png";

/***/ }),

/***/ 9887:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTI5IiBoZWlnaHQ9IjE0NTUiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9Ii4xMDgiIHkxPSItLjAzNCIgeDI9Ii44OTMiIHkyPSIuNDgzIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZWJmMGZhIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZWJmMGZhIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZGF0YS1uYW1lPSJSZWN0YW5nbGUgMzYzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEyNTgpIiBmaWxsPSIjZmZmIiBzdHJva2U9IiM3MDcwNzAiIGQ9Ik0wIDBoMTEyOXYxNDU1SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMTI1OCkiIGNsaXAtcGF0aD0idXJsKCNhKSI+PHJlY3QgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMzYyIiB3aWR0aD0iMTA3MiIgaGVpZ2h0PSIxMDcyIiByeD0iODkiIHRyYW5zZm9ybT0icm90YXRlKDQ1IC0xNTYwLjk1MiA1OTEuNDEzKSIgb3BhY2l0eT0iLjUiIGZpbGw9InVybCgjYikiLz48L2c+PC9zdmc+"

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

/***/ 1111:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/hi");

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

/***/ 2210:
/***/ ((module) => {

"use strict";
module.exports = import("@chakra-ui/react");;

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,954,123,139,961,290,705,341], () => (__webpack_exec__(3486)));
module.exports = __webpack_exports__;

})();