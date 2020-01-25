"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firestore_1 = require("rxfire/firestore");
var __1 = require("..");
var useObservable_1 = require("../useObservable");
function preloadFirestoreDoc(refProvider, firebaseApp) {
    return __1.preloadFirestore(firebaseApp).then(function (firestore) {
        var ref = refProvider(firestore());
        return useObservable_1.preloadObservable(firestore_1.doc(ref), ref.path);
    });
}
exports.preloadFirestoreDoc = preloadFirestoreDoc;
function useFirestoreDoc(ref, options) {
    return __1.useObservable(firestore_1.doc(ref), 'firestore doc: ' + ref.path, options ? options.startWithValue : undefined);
}
exports.useFirestoreDoc = useFirestoreDoc;
function useFirestoreDocData(ref, options) {
    return __1.useObservable(firestore_1.docData(ref, __1.checkIdField(options)), 'firestore docdata: ' + ref.path, __1.checkStartWithValue(options));
}
exports.useFirestoreDocData = useFirestoreDocData;
function useFirestoreCollection(query, options) {
    var queryId = getHashFromFirestoreQuery(query);
    return __1.useObservable(firestore_1.fromCollectionRef(query, __1.checkIdField(options)), queryId, options ? options.startWithValue : undefined);
}
exports.useFirestoreCollection = useFirestoreCollection;
function getHashFromFirestoreQuery(query) {
    var hash = query._query.canonicalId();
    return "firestore: " + hash;
}
function useFirestoreCollectionData(query, options) {
    var queryId = getHashFromFirestoreQuery(query);
    return __1.useObservable(firestore_1.collectionData(query, __1.checkIdField(options)), queryId, __1.checkStartWithValue(options));
}
exports.useFirestoreCollectionData = useFirestoreCollectionData;
