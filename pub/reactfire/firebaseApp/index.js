"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var firebase = require("firebase/app");
var React = require("react");
__export(require("./sdk"));
var FirebaseAppContext = React.createContext(undefined);
function FirebaseAppProvider(props) {
    var firebaseConfig = props.firebaseConfig, initPerformance = props.initPerformance;
    var firebaseApp = props.firebaseApp;
    firebaseApp =
        firebaseApp ||
            React.useMemo(function () {
                if (!firebase.apps.length) {
                    firebase.initializeApp(firebaseConfig);
                }
                return firebase;
            }, [firebaseConfig]);
    React.useMemo(function () {
        if (initPerformance === true && !!firebase.apps.length) {
            if (!firebase.performance) {
                throw new Error('firebase.performance not found. Did you forget to import it?');
            }
            firebase.performance();
        }
    }, [initPerformance, firebaseApp]);
    return React.createElement(FirebaseAppContext.Provider, __assign({ value: firebaseApp }, props));
}
exports.FirebaseAppProvider = FirebaseAppProvider;
function useFirebaseApp() {
    var firebaseApp = React.useContext(FirebaseAppContext);
    if (!firebaseApp) {
        throw new Error('Cannot call useFirebaseApp unless your component is within a FirebaseAppProvider');
    }
    return firebaseApp;
}
exports.useFirebaseApp = useFirebaseApp;
