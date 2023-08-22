"use strict";
exports.id = 797;
exports.ids = [797];
exports.modules = {

/***/ 3797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
            marginLeft: "20px",
            marginRight: 10,
            marginTop: -2
        }
    }), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", null, about.map(({ path , label  }, i)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
            href: path,
            key: i
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", null, label)))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {
        sx: {
            marginLeft: "20px",
            marginRight: 10,
            marginTop: -2
        }
    }), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", null, project.map(({ path , label  }, i)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
            href: path,
            key: i
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", null, label)))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {
        sx: {
            marginLeft: "20px",
            marginRight: 10,
            marginTop: -2
        }
    }), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", null, gallery.map(({ path , label  }, i)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
            href: path,
            key: i
        }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", null, label)))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {
        sx: {
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
        flexShrink: "0",
        color: "#646464",
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


/***/ })

};
;