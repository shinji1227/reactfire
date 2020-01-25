import { Observable } from 'rxjs';
import { ActiveRequest } from './requestCache';
export declare function preloadRequest(getPromise: any, requestId: string): {
    requestId: string;
    request: ActiveRequest;
};
export declare function preloadObservable(observable$: Observable<any>, observableId: string): {
    requestId: string;
    request: ActiveRequest;
};
export declare function usePreloadedRequest(preloadResult: {
    requestId: string;
}): any;
export declare function useObservable(observable$: Observable<any>, observableId: string, startWithValue?: any): any;
