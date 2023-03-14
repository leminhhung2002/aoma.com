"use strict";
(() => {
var exports = {};
exports.id = 585;
exports.ids = [585];
exports.modules = {

/***/ 5875:
/***/ ((module) => {

module.exports = require("simple-oauth2");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 2226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomString": () => (/* binding */ randomString),
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6113);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var simple_oauth2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5875);
/* harmony import */ var simple_oauth2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(simple_oauth2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(484);



const randomString = ()=>(0,crypto__WEBPACK_IMPORTED_MODULE_0__.randomBytes)(4).toString("hex")
;
async function handler(req, res) {
    const { host  } = req.headers;
    const url = new URL(`https://${host}/${req.url}`);
    const urlParams = url.searchParams;
    const code = urlParams.get("code");
    const provider = urlParams.get("provider");
    if (provider === "github" || provider === "gitlab") {
        const client = new simple_oauth2__WEBPACK_IMPORTED_MODULE_1__.AuthorizationCode((0,_libs_config__WEBPACK_IMPORTED_MODULE_2__/* .config */ .v)(provider));
        const tokenParams = {
            code: code !== null && code !== void 0 ? code : "",
            redirect_uri: `https://${host}/api/callback?provider=${provider}`
        };
        try {
            const accessToken = await client.getToken(tokenParams);
            const token = accessToken.token["access_token"];
            const responseBody = renderBody("success", {
                token,
                provider
            });
            res.statusCode = 200;
            res.end(responseBody);
        } catch (e) {
            res.statusCode = 200;
            res.end(renderBody("error", e));
        }
    } else {
        res.statusCode = 404;
        res.end();
    }
};
const renderBody = (status, content)=>{
    return `
   <script>
      const receiveMessage = (message) => {
        window.opener.postMessage(
          'authorization:${content.provider}:${status}:${JSON.stringify(content)}',
          message.origin
        );
        window.removeEventListener("message", receiveMessage, false);
      }
      window.addEventListener("message", receiveMessage, false);
      window.opener.postMessage("authorizing:${content.provider}", "*");
    </script>
  `;
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [484], () => (__webpack_exec__(2226)));
module.exports = __webpack_exports__;

})();