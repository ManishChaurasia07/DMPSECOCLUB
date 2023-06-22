"use strict";
(() => {
var exports = {};
exports.id = 218;
exports.ids = [218,54,332,148,743,71,904,377,593];
exports.modules = {

/***/ 4626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 6276:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var assets_images_dms_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2954);
/* harmony import */ var assets_images_dms_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_images_dms_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4626);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4961);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8055);
/* harmony import */ var _Header_navbar_drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3797);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6690);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8772);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, components_link__WEBPACK_IMPORTED_MODULE_6__, _footer__WEBPACK_IMPORTED_MODULE_10__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, components_link__WEBPACK_IMPORTED_MODULE_6__, _footer__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












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
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initState);
    const { 0: touched , 1: setTouched  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});
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
    const onSubmit = async ()=>{
        setState((prev)=>({
                ...prev,
                isLoading: true
            }));
        try {
            await (0,_lib_api__WEBPACK_IMPORTED_MODULE_11__/* .sendContactForm */ .m)(values);
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
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_seo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    title: "DMPS - ECOCLUB",
                    description: "Hi! We protect our environment by taking some of the steps like a collecting of e-waste which is hazardous to our environment and plastic. We all do some acitivity which can protect us from destroying the world!"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Img, {
                        src: (assets_images_dms_png__WEBPACK_IMPORTED_MODULE_2___default()),
                        sx: {
                            mr: [
                                null,
                                null,
                                null,
                                null,
                                30,
                                "578px"
                            ],
                            ml: [
                                "-30px",
                                null,
                                null,
                                null,
                                30,
                                "20px"
                            ],
                            cursor: "pointer",
                            mt: 4
                        }
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                    sx: {
                        display: [
                            "none",
                            null,
                            null,
                            null,
                            "flex"
                        ],
                        alignItems: "center",
                        flexGrow: 3,
                        mt: "-20px",
                        ml: 900,
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
                        }
                    },
                    children: [
                        menuItems.map(({ label  }, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_link__WEBPACK_IMPORTED_MODULE_6__/* .NavLink */ .OL, {
                                    label: label,
                                    sx: {}
                                }, i)
                            })),
                        about.map(({ label  }, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_link__WEBPACK_IMPORTED_MODULE_6__/* .NavLink */ .OL, {
                                    label: label,
                                    sx: {}
                                }, i)
                            })),
                        project.map(({ label  }, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                href: "/project",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_link__WEBPACK_IMPORTED_MODULE_6__/* .NavLink */ .OL, {
                                    label: label,
                                    sx: {}
                                }, i)
                            })),
                        gallery.map(({ label  }, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                href: "/gallery",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_link__WEBPACK_IMPORTED_MODULE_6__/* .NavLink */ .OL, {
                                    label: label,
                                    sx: {}
                                }, i)
                            })),
                        blog.map(({ label  }, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_link__WEBPACK_IMPORTED_MODULE_6__/* .NavLink */ .OL, {
                                    label: label,
                                    sx: {}
                                }, i)
                            }))
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                    maxW: "450px",
                    sx: {
                        borderRadius: 4,
                        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                        pt: 5,
                        pb: 5,
                        mt: "64px",
                        ml: [
                            2,
                            550
                        ]
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                            sx: {
                                textAlign: "center"
                            },
                            children: "Contact Us"
                        }),
                        error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            color: "red.300",
                            my: 4,
                            fontSize: "xl",
                            children: error
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                            isRequired: true,
                            isInvalid: touched.name && !values.name,
                            mb: 5,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                    children: "Name"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                    type: "text",
                                    name: "name",
                                    errorBorderColor: "red.300",
                                    value: values.name,
                                    onChange: handleChange,
                                    onBlur: onBlur
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
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                    children: "Email"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                    type: "email",
                                    name: "email",
                                    errorBorderColor: "red.300",
                                    value: values.email,
                                    onChange: handleChange,
                                    onBlur: onBlur
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormErrorMessage, {
                                    children: "Required"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                            mb: 5,
                            isRequired: true,
                            isInvalid: touched.subject && !values.subject,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                    children: "Subject"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                    type: "text",
                                    name: "subject",
                                    errorBorderColor: "red.300",
                                    value: values.subject,
                                    onChange: handleChange,
                                    onBlur: onBlur
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
                                    children: "Message"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Textarea, {
                                    type: "text",
                                    name: "message",
                                    rows: 4,
                                    errorBorderColor: "red.300",
                                    value: values.message,
                                    onChange: handleChange,
                                    onBlur: onBlur
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormErrorMessage, {
                                    children: "Required"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            variant: "outline",
                            colorScheme: "blue",
                            isLoading: isLoading,
                            disabled: !values.name || !values.email || !values.subject || !values.message,
                            onClick: onSubmit,
                            children: "Submit"
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 4751:
/***/ ((module) => {

module.exports = require("react-icons/io");

/***/ }),

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8800:
/***/ ((module) => {

module.exports = require("theme-ui");

/***/ }),

/***/ 2210:
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,954,123,139,797,772,961], () => (__webpack_exec__(6276)));
module.exports = __webpack_exports__;

})();