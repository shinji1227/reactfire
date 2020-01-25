"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var auth_1 = require("rxfire/auth");
var __1 = require("..");
var rxjs_1 = require("rxjs");
function preloadUser(firebaseApp) {
    return __1.preloadAuth(firebaseApp).then(function (auth) {
        var result = __1.preloadObservable(auth_1.user(auth()), 'auth: user');
        return result.request.promise;
    });
}
exports.preloadUser = preloadUser;
function useUser(auth, options) {
    auth = auth || __1.useAuth()();
    var currentUser = undefined;
    if (options && options.startWithValue !== undefined) {
        currentUser = options.startWithValue;
    }
    else if (auth.currentUser) {
        currentUser = auth.currentUser;
    }
    return __1.useObservable(auth_1.user(auth), 'auth: user', currentUser);
}
exports.useUser = useUser;
function useIdTokenResult(user, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    if (!user) {
        throw new Error('you must provide a user');
    }
    var idToken$ = rxjs_1.from(user.getIdTokenResult(forceRefresh));
    return __1.useObservable(idToken$, user.uid + "-claims");
}
exports.useIdTokenResult = useIdTokenResult;
function ClaimsCheck(_a) {
    var user = _a.user, fallback = _a.fallback, children = _a.children, requiredClaims = _a.requiredClaims;
    var claims = useIdTokenResult(user, false).claims;
    var missingClaims = {};
    Object.keys(requiredClaims).forEach(function (claim) {
        if (requiredClaims[claim] !== claims[claim]) {
            missingClaims[claim] = {
                expected: requiredClaims[claim],
                actual: claims[claim]
            };
        }
    });
    if (Object.keys(missingClaims).length === 0) {
        return React.createElement(React.Fragment, null, children);
    }
    else {
        return React.createElement(React.Fragment, null, fallback);
    }
}
exports.ClaimsCheck = ClaimsCheck;
function AuthCheck(_a) {
    var auth = _a.auth, fallback = _a.fallback, children = _a.children, requiredClaims = _a.requiredClaims;
    var user = useUser(auth);
    if (user) {
        return requiredClaims ? (React.createElement(ClaimsCheck, { user: user, fallback: fallback, requiredClaims: requiredClaims }, children)) : (React.createElement(React.Fragment, null, children));
    }
    else {
        return React.createElement(React.Fragment, null, fallback);
    }
}
exports.AuthCheck = AuthCheck;
