/// <reference types="react" />
import * as firebase from 'firebase/app';
export * from './sdk';
export declare function FirebaseAppProvider(props: any): JSX.Element;
export declare function useFirebaseApp(): firebase.app.App;
