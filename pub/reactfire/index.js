"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
function checkOptions(options, field) {
    return options ? options[field] : undefined;
}
exports.checkOptions = checkOptions;
function checkStartWithValue(options) {
    return checkOptions(options, 'startWithValue');
}
exports.checkStartWithValue = checkStartWithValue;
function checkIdField(options) {
    return checkOptions(options, 'idField');
}
exports.checkIdField = checkIdField;
__export(require("./auth"));
__export(require("./database"));
__export(require("./firebaseApp"));
__export(require("./firestore"));
__export(require("./performance"));
__export(require("./storage"));
__export(require("./useObservable"));
