"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var operators_1 = require("rxjs/operators");
var requestCache_1 = require("./requestCache");
var requestCache = new requestCache_1.ObservablePromiseCache();
function preloadRequest(getPromise, requestId) {
    var request = requestCache.createDedupedRequest(getPromise, requestId);
    return {
        requestId: requestId,
        request: request
    };
}
exports.preloadRequest = preloadRequest;
function preloadObservable(observable$, observableId) {
    return preloadRequest(function () { return observable$.pipe(operators_1.first()).toPromise(); }, observableId);
}
exports.preloadObservable = preloadObservable;
function usePreloadedRequest(preloadResult) {
    var request = requestCache.getRequest(preloadResult.requestId);
    if (!request.isComplete) {
        throw request.promise;
    }
    if (request.error) {
        throw request.error;
    }
    return request.value;
}
exports.usePreloadedRequest = usePreloadedRequest;
function useObservable(observable$, observableId, startWithValue) {
    if (!observableId) {
        throw new Error('cannot call useObservable without an observableId');
    }
    var result = preloadObservable(observable$, observableId);
    var initialValue = startWithValue;
    if (initialValue === undefined) {
        initialValue = usePreloadedRequest(result);
    }
    var _a = React.useState(initialValue), latestValue = _a[0], setValue = _a[1];
    React.useEffect(function () {
        var subscription = observable$.pipe(operators_1.startWith(initialValue)).subscribe(function (newVal) {
            result.request.setValue(newVal);
            setValue(newVal);
        }, function (error) {
            console.error('There was an error', error);
            throw error;
        });
        return function () {
            subscription.unsubscribe();
            requestCache.removeRequest(observableId);
        };
    }, [observableId]);
    return latestValue;
}
exports.useObservable = useObservable;
