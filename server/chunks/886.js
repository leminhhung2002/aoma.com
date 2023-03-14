exports.id = 886;
exports.ids = [886];
exports.modules = {

/***/ 9397:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./demo-post-1.md": 4774,
	"./demo-post-2.md": 6687,
	"./demo-post-3.md": 2182
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 9397;

/***/ }),

/***/ 2244:
/***/ ((module) => {

const doc = [({"links":[({"title":"Buy Token", "url":"/#presale"}), ({"title":"Telegram Chanel", "url":"/"}), ({"title":"Telegram Official", "url":"/"})]})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ 6230:
/***/ ((module) => {

const doc = [[({"title":"Home", "url":"/"}), ({"title":"Technology", "url":"/#technology"}), ({"title":"Tokennomics", "url":"/#tokennomics"}), ({"title":"Roadmap", "url":"/#roadmap"}), ({"title":"Blog", "url":"/blog"}), ({"title":"Whitepaper", "url":"/doc/whitepapper.pdf"})]];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ 4131:
/***/ ((module) => {

const doc = [[({"icon":"IconBrandTelegram", "url":"https://t.me/bumbumchannel", "title":"Facebook"}), ({"icon":"IconBrandTelegram", "url":"https://t.me/bumbumcommunnity2222", "title":"Telegram"}), ({"icon":"IconBrandTwitter", "url":"https://twitter.com/BumBumWeb3", "title":"Twitter"})]];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ 5538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Social)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _data_social_yml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4131);
/* harmony import */ var _data_social_yml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_social_yml__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Share_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2152);




function Social() {
    const socials = _data_social_yml__WEBPACK_IMPORTED_MODULE_2__;
    var _target;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: "flex items-center space-x-6",
        children: socials.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: item.url,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        target: (_target = item.target) !== null && _target !== void 0 ? _target : "_self",
                        className: "text-white hover:text-pink-600 transition-all",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Share_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            icon: item.icon,
                            width: 46,
                            height: 46,
                            stroke: 1
                        })
                    })
                })
            }, index)
        )
    }));
};


/***/ }),

/***/ 3798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _data_footer_yml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2244);
/* harmony import */ var _data_footer_yml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_footer_yml__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_navigation_yml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6230);
/* harmony import */ var _data_navigation_yml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_navigation_yml__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Header_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5252);
/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5538);






function Footer(props) {
    const footers = _data_footer_yml__WEBPACK_IMPORTED_MODULE_2__;
    const navigators = _data_navigation_yml__WEBPACK_IMPORTED_MODULE_3__;
    var _target, _target1;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        id: "footer",
        className: "py-24 relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container mx-auto px-4 relative z-10",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex lg:flex-row flex-col",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "lg:w-2/3",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header_Logo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        width: 230,
                                        height: 65,
                                        alt: props.data.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-['Roboto_Mono'] font-thin max-w-md",
                                        children: props.data.description
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "py-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Social__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "lg:w-1/3 flex justify-between",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: "lg:w-1/2 flex space-y-1.5 flex-col",
                                    children: navigators.map((navigator, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                href: navigator.url,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    target: (_target = navigator.target) !== null && _target !== void 0 ? _target : "_self",
                                                    className: "text-white font-['Roboto_Mono'] font-light hover:text-pink-600 transition-all",
                                                    children: navigator.title
                                                })
                                            })
                                        }, index)
                                    )
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: "lg:w-1/2 flex space-y-1.5 flex-col",
                                    children: footers.links.map((footer, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                href: footer.url,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    target: (_target1 = footer.target) !== null && _target1 !== void 0 ? _target1 : "_self",
                                                    className: "text-white font-['Roboto_Mono'] font-light hover:text-pink-600 transition-all",
                                                    children: footer.title
                                                })
                                            })
                                        }, index)
                                    )
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute z-0 inset-0 bg-[url('/images/footer.png')] opacity-60 bg-right bg-no-repeat"
            })
        ]
    }));
};


/***/ }),

/***/ 5252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);



function Logo({ width , height , alt  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative flex flex-1",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
            href: "/",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    src: "/logo.svg",
                    alt: alt,
                    width: width,
                    height: height
                })
            })
        })
    }));
};


/***/ }),

/***/ 5500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@tabler/icons"
var icons_ = __webpack_require__(4116);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./data/navigation.yml
var data_navigation = __webpack_require__(6230);
// EXTERNAL MODULE: external "@usedapp/core"
var core_ = __webpack_require__(9439);
// EXTERNAL MODULE: ./hooks/useConnect.tsx
var useConnect = __webpack_require__(1596);
;// CONCATENATED MODULE: ./components/Header/Connect.tsx



function Connect() {
    const { connect , deactivate , activeProvider , account  } = (0,useConnect/* useConnect */.$)();
    return(/*#__PURE__*/ jsx_runtime_.jsx("button", {
        onClick: ()=>account ? deactivate() : activeProvider()
        ,
        className: "flex items-center justify-center px-6 py-1 transition-all bg-pink-600 rounded-full hover:bg-sky-500",
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "text-white flex mb-0.5",
            children: account ? (0,core_.shortenAddress)(account) : "Connect Wallet"
        })
    }));
};

// EXTERNAL MODULE: ./components/Header/Logo.tsx
var Logo = __webpack_require__(5252);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/Footer/Social.tsx
var Social = __webpack_require__(5538);
;// CONCATENATED MODULE: ./components/Header/Menu.tsx






function Menu({ isOpen , toggleMenu , navigation  }) {
    var _target;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: toggleMenu,
                className: external_classnames_default()("fixed inset-0 z-40 bg-black opacity-50 transition-opacity lg:hidden cursor-pointer", isOpen ? "block" : "hidden")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()("fixed h-full inset-y-0 opacity-0 transition-all left-0 z-50 bg-[url('/images/bg-blur.jpg')] bg-cover bg-center shadow-2xl lg:hidden", isOpen ? "block w-80 opacity-100" : "invisible w-0"),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col justify-between h-full",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex items-center justify-center mx-auto mt-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Logo/* default */.Z, {
                                width: 160,
                                height: 60,
                                alt: "Logo"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "flex flex-col px-10 space-y-4",
                            children: navigation.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: item.url,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            onClick: toggleMenu,
                                            target: (_target = item.target) !== null && _target !== void 0 ? _target : "_self",
                                            className: "text-white transition-all hover:text-pink-600",
                                            children: item.title
                                        })
                                    })
                                }, index)
                            )
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-col items-center justify-center mx-auto",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Connect, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex items-center justify-center px-4 mb-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Social/* default */.Z, {})
                        })
                    ]
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/Header/Navigation.tsx


function Navigation({ ...props }) {
    var _target;
    return(/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "flex items-center space-x-6",
        children: props.data.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: item.url,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        target: (_target = item.target) !== null && _target !== void 0 ? _target : "_self",
                        className: "text-white hover:text-pink-600 transition-all",
                        children: item.title
                    })
                })
            }, index)
        )
    }));
};

;// CONCATENATED MODULE: ./components/Header/index.tsx








const Header = ()=>{
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const toggleMenu = ()=>{
        setIsOpen(!isOpen);
    };
    const navigation = data_navigation;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container mx-auto px-4 pt-8",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Logo/* default */.Z, {
                            width: 160,
                            height: 60,
                            alt: "Logo"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "lg:flex items-center space-x-4 hidden",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {
                                    data: navigation
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Connect, {})
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex items-center lg:hidden",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: toggleMenu,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.IconAlignRight, {
                                    width: 32,
                                    height: 32
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                isOpen: isOpen,
                toggleMenu: toggleMenu,
                navigation: navigation
            })
        ]
    }));
};
/* harmony default export */ const components_Header = (Header);


/***/ }),

/***/ 2360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabler_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4116);
/* harmony import */ var _tabler_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);




function Heading({ position , title  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative flex flex-wrap w-full overflow-hidden",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("flex", {
                "mx-auto items-center": position == "center",
                "flex-col": position == "bottom",
                "mr-auto items-center": position == "left"
            }),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex mr-2 space-x-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "relative w-4 bg-pink-600 h-11",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "absolute inset-y-0 w-2 h-full bg-black -right-2"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "font-['Roboto_Mono'] text-5xl font-medium lowercase",
                            children: title
                        })
                    ]
                }),
                (position == "center" || position == "left") && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "relative flex",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "relative -left-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons__WEBPACK_IMPORTED_MODULE_1__.IconArrowNarrowRight, {
                                width: 100,
                                height: 100,
                                stroke: 0.5
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "absolute top-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                src: "/images/arrow.png",
                                width: 84,
                                height: 84,
                                alt: "Arrow"
                            })
                        })
                    ]
                }),
                position == "bottom" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "relative",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons__WEBPACK_IMPORTED_MODULE_1__.IconArrowNarrowDown, {
                            width: 100,
                            height: 100,
                            stroke: 0.5
                        })
                    })
                })
            ]
        })
    }));
};


/***/ }),

/***/ 2152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabler_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4116);
/* harmony import */ var _tabler_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons__WEBPACK_IMPORTED_MODULE_1__);


function Icon({ ...props }) {
    const { icon , ...args } = props;
    const Icons = _tabler_icons__WEBPACK_IMPORTED_MODULE_1__;
    const IconComponent = Icons[icon];
    return IconComponent && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconComponent, {
        ...args
    });
};


/***/ }),

/***/ 1596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ useConnect)
/* harmony export */ });
/* harmony import */ var _coinbase_wallet_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4395);
/* harmony import */ var _coinbase_wallet_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coinbase_wallet_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _usedapp_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9439);
/* harmony import */ var _usedapp_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_usedapp_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4137);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2840);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_4__);





function useConnect() {
    const { activateBrowserWallet , active , activate , deactivate , account , chainId ,  } = (0,_usedapp_core__WEBPACK_IMPORTED_MODULE_1__.useEthers)();
    const connect = async ()=>{
        //activateBrowserWallet();
        activeProvider();
    };
    const activeProvider = async ()=>{
        const providerOptions = {
            injected: {
                display: {
                    name: "Metamask",
                    description: "Connect with the provider in your Browser"
                },
                package: null
            },
            binancechainwallet: {
                package: true
            },
            walletconnect: {
                package: (_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_2___default()),
                options: {
                    bridge: "https://bridge.walletconnect.org",
                    infuraId: "d8df2cb7844e4a54ab0a782f608749dd"
                }
            },
            walletlink: {
                package: (_coinbase_wallet_sdk__WEBPACK_IMPORTED_MODULE_0___default()),
                options: {
                    appName: "Web 3 Modal Demo",
                    infuraId: "d8df2cb7844e4a54ab0a782f608749dd"
                }
            }
        };
        const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_4___default())({
            providerOptions,
            theme: "dark"
        });
        try {
            const provider = await web3Modal.connect();
            await activate(provider);
        } catch (e) {
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(e.message);
        }
    };
    return {
        connect,
        deactivate,
        activeProvider,
        active,
        account,
        chainId
    };
}


/***/ }),

/***/ 4774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("---\ntitle: \"Food truck migas sriracha chia vape edison bulb flannel\"\nauthor: \"Netlifriends\"\ndate: \"2020-04-27\"\nimage: /images/posts/web-3.0.jpeg\n---\n\nI'm baby tattooed affogato incididunt ut brooklyn fixie normcore woke unicorn. Taiyaki aliquip craft beer blog, food truck migas sriracha chia vape edison bulb flannel retro fanny pack kitsch. Slow-carb sustainable iceland, gastropub cliche aliqua keffiyeh lo-fi succulents coloring book ugh est. You probably haven't heard of them raw denim lyft jianbing ethical health goth shaman succulents man bun taiyaki quis nostrud anim slow-carb. Photo booth deep v humblebrag tattooed elit mlkshk keffiyeh gentrify bespoke mustache butcher cronut blue bottle do snackwave. Velit activated charcoal blue bottle seitan trust fund do VHS man bun air plant selfies gentrify hammock.\n\n## But it's not all easy\n\nHumblebrag sartorial man braid ad vice, wolf ramps in cronut proident cold-pressed occupy organic normcore. Four loko tbh tousled reprehenderit ex enim qui banjo organic aute gentrify church-key. Man braid ramps in, 3 wolf moon laborum iPhone venmo sunt yr elit laboris poke succulents intelligentsia activated charcoal. Gentrify messenger bag hot chicken brooklyn. Seitan four loko art party, ut 8-bit live-edge heirloom. Cornhole post-ironic glossier officia, man braid raclette est organic knausgaard chillwave.\n\n- I am tired\n- Of people making lists\n- That don't really have a purpose\n\nTypewriter yuccie sed 90's. Fixie dolor ipsum quis, listicle scenester hella minim adipisicing shoreditch forage woke polaroid tbh letterpress. Ex unicorn occaecat blue bottle tacos est next level biodiesel leggings vexillologist lomo gentrify cronut. Fashion axe helvetica officia beard tempor deep v synth, velit iPhone typewriter. Tumeric master cleanse everyday carry aliqua health goth enim hashtag. Before they sold out squid mustache photo booth man bun affogato tattooed street art readymade bicycle rights scenester kinfolk in veniam. Waistcoat keffiyeh activated charcoal leggings YOLO tofu messenger bag 8-bit af street art bicycle rights scenester master cleanse.\n\nDrinking vinegar mollit artisan, four dollar toast meh in asymmetrical deserunt cold-pressed proident fam jianbing kitsch normcore tacos. Deserunt voluptate in est, lo-fi forage yuccie pug chartreuse. Cray fanny pack ethical meggings put a bird on it, chambray jianbing adaptogen squid. In irure sunt yr aesthetic post-ironic, 3 wolf moon lyft. Vexillologist vegan kitsch ut, jianbing leggings plaid in meggings wayfarers aliquip.\n");

/***/ }),

/***/ 6687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("---\ntitle: \"Food truck migas sriracha chia vape edison bulb flannel\"\nauthor: \"Netlifriends\"\ndate: \"2020-04-29\"\nimage: /images/posts/revenue.jpeg\n---\n\n## Are Seattleites dangerous?\n\nThe answer may surprise you: they really aren't.\n\nI'm baby tattooed affogato incididunt ut brooklyn fixie normcore woke unicorn. Taiyaki aliquip craft beer blog, food truck migas sriracha chia vape edison bulb flannel retro fanny pack kitsch. Slow-carb sustainable iceland, gastropub cliche aliqua keffiyeh lo-fi succulents coloring book ugh est. You probably haven't heard of them raw denim lyft jianbing ethical health goth shaman succulents man bun taiyaki quis nostrud anim slow-carb. Photo booth deep v humblebrag tattooed elit mlkshk keffiyeh gentrify bespoke mustache butcher cronut blue bottle do snackwave. Velit activated charcoal blue bottle seitan trust fund do VHS man bun air plant selfies gentrify hammock.\n\n## But it's not all easy\n\nHumblebrag sartorial man braid ad vice, wolf ramps in cronut proident cold-pressed occupy organic normcore. Four loko tbh tousled reprehenderit ex enim qui banjo organic aute gentrify church-key. Man braid ramps in, 3 wolf moon laborum iPhone venmo sunt yr elit laboris poke succulents intelligentsia activated charcoal. Gentrify messenger bag hot chicken brooklyn. Seitan four loko art party, ut 8-bit live-edge heirloom. Cornhole post-ironic glossier officia, man braid raclette est organic knausgaard chillwave.\n\n- I am tired\n- Of people making lists\n- That don't really have a purpose\n\nTypewriter yuccie sed 90's. Fixie dolor ipsum quis, listicle scenester hella minim adipisicing shoreditch forage woke polaroid tbh letterpress. Ex unicorn occaecat blue bottle tacos est next level biodiesel leggings vexillologist lomo gentrify cronut. Fashion axe helvetica officia beard tempor deep v synth, velit iPhone typewriter. Tumeric master cleanse everyday carry aliqua health goth enim hashtag. Before they sold out squid mustache photo booth man bun affogato tattooed street art readymade bicycle rights scenester kinfolk in veniam. Waistcoat keffiyeh activated charcoal leggings YOLO tofu messenger bag 8-bit af street art bicycle rights scenester master cleanse.\n\nDrinking vinegar mollit artisan, four dollar toast meh in asymmetrical deserunt cold-pressed proident fam jianbing kitsch normcore tacos. Deserunt voluptate in est, lo-fi forage yuccie pug chartreuse. Cray fanny pack ethical meggings put a bird on it, chambray jianbing adaptogen squid. In irure sunt yr aesthetic post-ironic, 3 wolf moon lyft. Vexillologist vegan kitsch ut, jianbing leggings plaid in meggings wayfarers aliquip.\n");

/***/ }),

/***/ 2182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("---\ntitle: \"Food truck migas sriracha chia vape edison bulb flannel\"\nauthor: \"Netlifriends\"\ndate: \"2020-04-28\"\nimage: /images/posts/ftx.jpeg\n---\n\n## What even is Seattle?\n\nI'm baby tattooed affogato incididunt ut brooklyn fixie normcore woke unicorn. Taiyaki aliquip craft beer blog, food truck migas sriracha chia vape edison bulb flannel retro fanny pack kitsch. Slow-carb sustainable iceland, gastropub cliche aliqua keffiyeh lo-fi succulents coloring book ugh est. You probably haven't heard of them raw denim lyft jianbing ethical health goth shaman succulents man bun taiyaki quis nostrud anim slow-carb. Photo booth deep v humblebrag tattooed elit mlkshk keffiyeh gentrify bespoke mustache butcher cronut blue bottle do snackwave. Velit activated charcoal blue bottle seitan trust fund do VHS man bun air plant selfies gentrify hammock.\n\n## But it's not all easy\n\nHumblebrag sartorial man braid ad vice, wolf ramps in cronut proident cold-pressed occupy organic normcore. Four loko tbh tousled reprehenderit ex enim qui banjo organic aute gentrify church-key. Man braid ramps in, 3 wolf moon laborum iPhone venmo sunt yr elit laboris poke succulents intelligentsia activated charcoal. Gentrify messenger bag hot chicken brooklyn. Seitan four loko art party, ut 8-bit live-edge heirloom. Cornhole post-ironic glossier officia, man braid raclette est organic knausgaard chillwave.\n\n- I am tired\n- Of people making lists\n- That don't really have a purpose\n\nTypewriter yuccie sed 90's. Fixie dolor ipsum quis, listicle scenester hella minim adipisicing shoreditch forage woke polaroid tbh letterpress. Ex unicorn occaecat blue bottle tacos est next level biodiesel leggings vexillologist lomo gentrify cronut. Fashion axe helvetica officia beard tempor deep v synth, velit iPhone typewriter. Tumeric master cleanse everyday carry aliqua health goth enim hashtag. Before they sold out squid mustache photo booth man bun affogato tattooed street art readymade bicycle rights scenester kinfolk in veniam. Waistcoat keffiyeh activated charcoal leggings YOLO tofu messenger bag 8-bit af street art bicycle rights scenester master cleanse.\n\nDrinking vinegar mollit artisan, four dollar toast meh in asymmetrical deserunt cold-pressed proident fam jianbing kitsch normcore tacos. Deserunt voluptate in est, lo-fi forage yuccie pug chartreuse. Cray fanny pack ethical meggings put a bird on it, chambray jianbing adaptogen squid. In irure sunt yr aesthetic post-ironic, 3 wolf moon lyft. Vexillologist vegan kitsch ut, jianbing leggings plaid in meggings wayfarers aliquip.\n");

/***/ })

};
;