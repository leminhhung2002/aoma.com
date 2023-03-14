"use strict";
exports.id = 119;
exports.ids = [119];
exports.modules = {

/***/ 5119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PostLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react-tsparticles"
var external_react_tsparticles_ = __webpack_require__(4753);
var external_react_tsparticles_default = /*#__PURE__*/__webpack_require__.n(external_react_tsparticles_);
// EXTERNAL MODULE: ./components/Share/Heading.tsx
var Heading = __webpack_require__(2360);
;// CONCATENATED MODULE: ./components/Blog/Heading.tsx


function Heading_Heading(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-transparent",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container px-4 mx-auto",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center justify-center max-w-4xl pt-40",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Heading/* default */.Z, {
                    title: props.title,
                    position: "bottom"
                })
            })
        })
    }));
};

// EXTERNAL MODULE: ./components/Footer/index.tsx
var Footer = __webpack_require__(3798);
// EXTERNAL MODULE: ./components/Header/index.tsx + 3 modules
var Header = __webpack_require__(5500);
;// CONCATENATED MODULE: ./components/Layout/PostLayout.tsx






function PostLayout({ children , data  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute inset-0 bg-[url('/images/line.png')] bg-right bg-no-repeat z-0 h-96 top-10"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: data.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: data.description
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative flex flex-col w-full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_tsparticles_default()), {
                        id: "tsparticles",
                        className: "absolute inset-0 -z-10",
                        url: "/particles.json"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "max-w-4xl min-h-screen mx-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Heading_Heading, {
                        title: data.title
                    }),
                    children
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                data: data
            })
        ]
    }));
};


/***/ })

};
;