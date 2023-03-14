"use strict";
(() => {
var exports = {};
exports.id = 508;
exports.ids = [508];
exports.modules = {

/***/ 5875:
/***/ ((module) => {

module.exports = require("simple-oauth2");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 2150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler),
  "randomString": () => (/* binding */ randomString)
});

// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(6113);
// EXTERNAL MODULE: external "simple-oauth2"
var external_simple_oauth2_ = __webpack_require__(5875);
// EXTERNAL MODULE: ./libs/config.ts
var config = __webpack_require__(484);
;// CONCATENATED MODULE: ./libs/scopes.ts
const scopes = {
    github: "repo,user",
    gitlab: "api"
};

;// CONCATENATED MODULE: ./pages/api/auth.ts




const randomString = ()=>(0,external_crypto_.randomBytes)(4).toString("hex")
;
function handler(req, res) {
    const { host  } = req.headers;
    const url = new URL(`https://${host}/${req.url}`);
    const urlParams = url.searchParams;
    const provider = urlParams.get("provider");
    if (provider === "github" || provider === "gitlab") {
        const client = new external_simple_oauth2_.AuthorizationCode((0,config/* config */.v)(provider));
        const authorizationUri = client.authorizeURL({
            redirect_uri: `https://${host}/api/callback?provider=${provider}`,
            scope: scopes[provider],
            state: randomString()
        });
        res.writeHead(301, {
            Location: authorizationUri
        });
    } else {
        res.writeHead(404);
    }
    res.end();
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [484], () => (__webpack_exec__(2150)));
module.exports = __webpack_exports__;

})();