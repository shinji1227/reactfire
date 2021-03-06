export interface ReactFireOptions<T = unknown> {
    startWithValue?: T;
    idField?: string;
}
export declare function checkOptions(options: ReactFireOptions, field: string): any;
export declare function checkStartWithValue(options: ReactFireOptions): any;
export declare function checkIdField(options: ReactFireOptions): any;
export * from './auth';
export * from './database';
export * from './firebaseApp';
export * from './firestore';
export * from './performance';
export * from './storage';
export * from './useObservable';
