"use strict";
exports.id = 484;
exports.ids = [484];
exports.modules = {

/***/ 484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ config)
/* harmony export */ });
const config = (provider)=>({
        client: {
            id: client[provider].id,
            secret: client[provider].secret
        },
        auth: {
            tokenHost: auth[provider].tokenHost,
            tokenPath: auth[provider].tokenPath,
            authorizePath: auth[provider].authorizePath
        }
    })
;
const auth = {
    github: {
        tokenHost: "https://github.com",
        tokenPath: "/login/oauth/access_token",
        authorizePath: "/login/oauth/authorize"
    },
    gitlab: {
        tokenHost: "https://gitlab.com",
        tokenPath: "/oauth/token",
        authorizePath: "/oauth/authorize"
    }
};
var _OAUTH_GITHUB_CLIENT_ID, _OAUTH_GITHUB_CLIENT_SECRET, _OAUTH_GITLAB_CLIENT_ID, _OAUTH_GITLAB_CLIENT_SECRET;
const client = {
    github: {
        id: (_OAUTH_GITHUB_CLIENT_ID = process.env.OAUTH_GITHUB_CLIENT_ID) !== null && _OAUTH_GITHUB_CLIENT_ID !== void 0 ? _OAUTH_GITHUB_CLIENT_ID : "",
        secret: (_OAUTH_GITHUB_CLIENT_SECRET = process.env.OAUTH_GITHUB_CLIENT_SECRET) !== null && _OAUTH_GITHUB_CLIENT_SECRET !== void 0 ? _OAUTH_GITHUB_CLIENT_SECRET : ""
    },
    gitlab: {
        id: (_OAUTH_GITLAB_CLIENT_ID = process.env.OAUTH_GITLAB_CLIENT_ID) !== null && _OAUTH_GITLAB_CLIENT_ID !== void 0 ? _OAUTH_GITLAB_CLIENT_ID : "",
        secret: (_OAUTH_GITLAB_CLIENT_SECRET = process.env.OAUTH_GITLAB_CLIENT_SECRET) !== null && _OAUTH_GITLAB_CLIENT_SECRET !== void 0 ? _OAUTH_GITLAB_CLIENT_SECRET : ""
    }
};


/***/ })

};
;