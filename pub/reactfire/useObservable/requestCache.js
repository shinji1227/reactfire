"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActiveRequest = (function () {
    function ActiveRequest(promise) {
        var _this = this;
        this.setValue = function (value) {
            _this.value = value;
            _this.isComplete = true;
        };
        this.setError = function (err) {
            _this.error = err;
            _this.isComplete = true;
        };
        this.isComplete = false;
        this.promise = promise
            .then(function (result) {
            _this.setValue(result);
            return result;
        })
            .catch(function (err) {
            _this.isComplete = true;
            _this.setError(err);
        });
    }
    return ActiveRequest;
}());
exports.ActiveRequest = ActiveRequest;
var ObservablePromiseCache = (function () {
    function ObservablePromiseCache() {
        this.activeRequests = new Map();
    }
    ObservablePromiseCache.prototype.getRequest = function (requestId) {
        var request = this.activeRequests.get(requestId);
        if (request === undefined) {
            throw new Error("No\u00A0request\u00A0with\u00A0ID\u00A0\"" + requestId + "\"\u00A0exists");
        }
        return request;
    };
    ObservablePromiseCache.prototype.createRequest = function (promise, requestId) {
        if (this.activeRequests.get(requestId) !== undefined) {
            throw new Error("request\u00A0\"" + requestId + "\"\u00A0is\u00A0already\u00A0in\u00A0use.");
        }
        var request = new ActiveRequest(promise);
        this.activeRequests.set(requestId, request);
        return request;
    };
    ObservablePromiseCache.prototype.createDedupedRequest = function (getPromise, requestId) {
        var request = this.activeRequests.get(requestId);
        if (request === undefined) {
            request = this.createRequest(getPromise(), requestId);
        }
        return request;
    };
    ObservablePromiseCache.prototype.removeRequest = function (requestId) {
        this.activeRequests.delete(requestId);
    };
    return ObservablePromiseCache;
}());
exports.ObservablePromiseCache = ObservablePromiseCache;
