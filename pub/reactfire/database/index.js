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
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("rxfire/database");
var __1 = require("..");
var operators_1 = require("rxjs/operators");
function useDatabaseObject(ref, options) {
    return __1.useObservable(database_1.object(ref), "RTDB Doc: " + ref.toString(), options ? options.startWithValue : undefined);
}
exports.useDatabaseObject = useDatabaseObject;
function objectVal(query, keyField) {
    return database_1.object(query).pipe(operators_1.map(function (change) { return changeToData(change, keyField); }));
}
function changeToData(change, keyField) {
    var _a;
    var val = change.snapshot.val();
    if (typeof val !== 'object') {
        return val;
    }
    return __assign(__assign({}, change.snapshot.val()), (keyField ? (_a = {}, _a[keyField] = change.snapshot.key, _a) : null));
}
function useDatabaseObjectData(ref, options) {
    return __1.useObservable(objectVal(ref, __1.checkIdField(options)), "RTDB DocData: " + ref.toString(), __1.checkStartWithValue(options));
}
exports.useDatabaseObjectData = useDatabaseObjectData;
function useDatabaseList(ref, options) {
    var hash = "RTDB List: " + ref.toString() + "|" + ref.queryIdentifier();
    return __1.useObservable(database_1.list(ref), hash, options ? options.startWithValue : undefined);
}
exports.useDatabaseList = useDatabaseList;
function useDatabaseListData(ref, options) {
    return __1.useObservable(database_1.listVal(ref, __1.checkIdField(options)), "RTDB ListData: " + ref.toString(), __1.checkStartWithValue(options));
}
exports.useDatabaseListData = useDatabaseListData;
