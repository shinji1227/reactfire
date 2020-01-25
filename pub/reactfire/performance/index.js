"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var __1 = require("..");
function getPerfFromContext() {
    var firebaseApp = __1.useFirebaseApp();
    if (!firebaseApp) {
        throw new Error('Firebase not found in context. Either pass it directly to a reactfire hook, or wrap your component in a FirebaseAppProvider');
    }
    var perfFunc = firebaseApp.performance;
    if (!perfFunc || !perfFunc()) {
        throw new Error("No perf object off of Firebase. Did you forget to import 'firebase/performance' in a component?");
    }
    return perfFunc();
}
function SuspenseWithPerf(_a) {
    var children = _a.children, traceId = _a.traceId, fallback = _a.fallback, firePerf = _a.firePerf;
    firePerf = firePerf || getPerfFromContext();
    var Fallback = function () {
        React.useLayoutEffect(function () {
            var trace = firePerf.trace(traceId);
            trace.start();
            return function () {
                trace.stop();
            };
        }, [traceId]);
        return React.createElement(React.Fragment, null, fallback);
    };
    return React.createElement(React.Suspense, { fallback: React.createElement(Fallback, null) }, children);
}
exports.SuspenseWithPerf = SuspenseWithPerf;
