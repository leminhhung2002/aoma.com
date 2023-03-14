"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@usedapp/core"
var core_ = __webpack_require__(9439);
;// CONCATENATED MODULE: ./context/DappContext.tsx


const config = {};
const DappContextProvider = ({ children  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(core_.DAppProvider, {
        config: config,
        children: children
    }));
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./context/ThemeContext.tsx


const defaultContext = {
    darkMode: false,
    toggleDarkMode: ()=>{},
    menuOpen: false,
    toggleMenu: ()=>{}
};
const ThemeContext = /*#__PURE__*/ (0,external_react_.createContext)(defaultContext);
const ThemeContextProvider = ({ children  })=>{
    const [darkMode, setDarkMode] = external_react_default().useState(false);
    const [menuOpen, setMenuOpen] = external_react_default().useState(false);
    const toggleDarkMode = ()=>setDarkMode(!darkMode)
    ;
    const toggleMenu = ()=>setMenuOpen(!menuOpen)
    ;
    const contextValue = {
        darkMode,
        toggleDarkMode,
        menuOpen,
        toggleMenu
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(ThemeContext.Provider, {
        value: contextValue,
        children: children
    }));
};

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
;// CONCATENATED MODULE: ./context/ToastContext.tsx


const ToastContext_config = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true
};
const ToastContextProvider = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {
        ...ToastContext_config
    }));
};

;// CONCATENATED MODULE: ./pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(ThemeContextProvider, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DappContextProvider, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ToastContextProvider, {})
            ]
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 9439:
/***/ ((module) => {

module.exports = require("@usedapp/core");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5798));
module.exports = __webpack_exports__;

})();