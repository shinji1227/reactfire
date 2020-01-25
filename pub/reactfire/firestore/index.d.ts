import { firestore } from 'firebase/app';
import { ReactFireOptions } from '..';
export declare function preloadFirestoreDoc(refProvider: (firestore: firebase.firestore.Firestore) => firestore.DocumentReference, firebaseApp: firebase.app.App): any;
export declare function useFirestoreDoc<T = unknown>(ref: firestore.DocumentReference, options?: ReactFireOptions<T>): T extends {} ? T : firestore.DocumentSnapshot;
export declare function useFirestoreDocData<T = unknown>(ref: firestore.DocumentReference, options?: ReactFireOptions<T>): T;
export declare function useFirestoreCollection<T = {
    [key: string]: unknown;
}>(query: firestore.Query, options?: ReactFireOptions<T[]>): T extends {} ? T[] : firestore.QuerySnapshot;
export declare function useFirestoreCollectionData<T = {
    [key: string]: unknown;
}>(query: firestore.Query, options?: ReactFireOptions<T[]>): T[];
