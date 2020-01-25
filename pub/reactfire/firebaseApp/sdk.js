"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var SDK;
(function (SDK) {
    SDK["ANALYTICS"] = "analytics";
    SDK["AUTH"] = "auth";
    SDK["DATABASE"] = "database";
    SDK["FIRESTORE"] = "firestore";
    SDK["FUNCTIONS"] = "functions";
    SDK["MESSAGING"] = "messaging";
    SDK["PERFORMANCE"] = "performance";
    SDK["REMOTE_CONFIG"] = "remoteConfig";
    SDK["STORAGE"] = "storage";
})(SDK || (SDK = {}));
function fetchSDK(sdk, firebaseApp) {
    if (!firebaseApp) {
        throw new Error('Firebase app was not provided');
    }
    var sdkPromise;
    if (firebaseApp[sdk]) {
        sdkPromise = Promise.resolve(firebaseApp[sdk]);
    }
    else {
        switch (sdk) {
            case SDK.ANALYTICS:
                sdkPromise = Promise.resolve().then(function () { return require('firebase/analytics'); });
                break;
            case SDK.AUTH:
                sdkPromise = Promise.resolve().then(function () { return require('firebase/auth'); });
                break;
            case SDK.DATABASE:
                sdkPromise = Promise.resolve().then(function () { return require('firebase/database'); });
                break;
            case SDK.FIRESTORE:
                sdkPromise = Promise.resolve().then(function () { return require('firebase/firestore'); });
                break;
            case SDK.FUNCTIONS:
                sdkPromise = Promise.resolve().then(function () { return require('firebase/functions'); });
                break;
            case SDK.MESSAGING:
                sdkPromise = Promise.resolve().then(function () { return require('firebase/messaging'); });
                break;
            case SDK.PERFORMANCE:
                sdkPromise = Promise.resolve().then(function () { return require('firebase/performance'); });
                break;
            case SDK.REMOTE_CONFIG:
                sdkPromise = Promise.resolve().then(function () { return require('firebase/remote-config'); });
                break;
            case SDK.STORAGE:
                sdkPromise = Promise.resolve().then(function () { return require('firebase/storage'); });
                break;
        }
        sdkPromise = sdkPromise.then(function () { return firebaseApp[sdk]; });
    }
    return sdkPromise;
}
function useSDK(sdk, firebaseApp) {
    firebaseApp = firebaseApp || __1.useFirebaseApp();
    var result = __1.preloadRequest(function () { return fetchSDK(sdk, firebaseApp); }, "firebase-sdk-" + sdk);
    return __1.usePreloadedRequest(result);
}
function preloadAuth(firebaseApp) {
    return fetchSDK(SDK.AUTH, firebaseApp);
}
exports.preloadAuth = preloadAuth;
function useAuth(firebaseApp) {
    return useSDK(SDK.AUTH, firebaseApp);
}
exports.useAuth = useAuth;
function preloadAnalytics(firebaseApp) {
    return fetchSDK(SDK.ANALYTICS, firebaseApp);
}
exports.preloadAnalytics = preloadAnalytics;
function useAnalytics(firebaseApp) {
    return useSDK(SDK.ANALYTICS, firebaseApp);
}
exports.useAnalytics = useAnalytics;
function preloadDatabase(firebaseApp) {
    return fetchSDK(SDK.DATABASE, firebaseApp);
}
exports.preloadDatabase = preloadDatabase;
function useDatabase(firebaseApp) {
    return useSDK(SDK.DATABASE, firebaseApp);
}
exports.useDatabase = useDatabase;
function preloadFirestore(firebaseApp) {
    return fetchSDK(SDK.FIRESTORE, firebaseApp);
}
exports.preloadFirestore = preloadFirestore;
function useFirestore(firebaseApp) {
    return useSDK(SDK.FIRESTORE, firebaseApp);
}
exports.useFirestore = useFirestore;
function preloadFunctions(firebaseApp) {
    return fetchSDK(SDK.FUNCTIONS, firebaseApp);
}
exports.preloadFunctions = preloadFunctions;
function useFunctions(firebaseApp) {
    return useSDK(SDK.FUNCTIONS, firebaseApp);
}
exports.useFunctions = useFunctions;
function preloadMessaging(firebaseApp) {
    return fetchSDK(SDK.MESSAGING, firebaseApp);
}
exports.preloadMessaging = preloadMessaging;
function useMessaging(firebaseApp) {
    return useSDK(SDK.MESSAGING, firebaseApp);
}
exports.useMessaging = useMessaging;
function preloadPerformance(firebaseApp) {
    return fetchSDK(SDK.PERFORMANCE, firebaseApp);
}
exports.preloadPerformance = preloadPerformance;
function usePerformance(firebaseApp) {
    return useSDK(SDK.PERFORMANCE, firebaseApp);
}
exports.usePerformance = usePerformance;
function preloadRemoteConfig(firebaseApp) {
    return fetchSDK(SDK.REMOTE_CONFIG, firebaseApp);
}
exports.preloadRemoteConfig = preloadRemoteConfig;
function useRemoteConfig(firebaseApp) {
    return useSDK(SDK.REMOTE_CONFIG, firebaseApp);
}
exports.useRemoteConfig = useRemoteConfig;
function preloadStorage(firebaseApp) {
    return fetchSDK(SDK.STORAGE, firebaseApp);
}
exports.preloadStorage = preloadStorage;
function useStorage(firebaseApp) {
    return useSDK(SDK.STORAGE, firebaseApp);
}
exports.useStorage = useStorage;
