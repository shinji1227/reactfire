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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var storage_1 = require("rxfire/storage");
var rxjs_1 = require("rxjs");
var __1 = require("..");
function _fromTask(task) {
    return new rxjs_1.Observable(function (subscriber) {
        var progress = function (snap) {
            return subscriber.next(snap);
        };
        var error = function (e) { return subscriber.error(e); };
        var complete = function () {
            return subscriber.complete();
        };
        task.on('state_changed', progress, error, complete);
    });
}
function useStorageTask(task, ref, options) {
    return __1.useObservable(_fromTask(task), 'storage upload: ' + ref.toString(), options ? options.startWithValue : undefined);
}
exports.useStorageTask = useStorageTask;
function useStorageDownloadURL(ref, options) {
    return __1.useObservable(storage_1.getDownloadURL(ref), 'storage download:' + ref.toString(), options ? options.startWithValue : undefined);
}
exports.useStorageDownloadURL = useStorageDownloadURL;
function StorageImage(props) {
    var storage = props.storage, storagePath = props.storagePath, imgProps = __rest(props, ["storage", "storagePath"]);
    storage = storage || __1.useFirebaseApp().storage();
    var imgSrc = useStorageDownloadURL(storage.ref(storagePath));
    return React.createElement("img", __assign({ src: imgSrc }, imgProps));
}
exports.StorageImage = StorageImage;
