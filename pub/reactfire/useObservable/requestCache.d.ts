export declare class ActiveRequest {
    promise: Promise<any>;
    isComplete: boolean;
    value: any;
    error: Error;
    constructor(promise: any);
    setValue: (value: any) => void;
    setError: (err: any) => void;
}
export declare class ObservablePromiseCache {
    activeRequests: Map<any, ActiveRequest>;
    constructor();
    getRequest(requestId: any): ActiveRequest;
    createRequest(promise: Promise<any>, requestId: any): ActiveRequest;
    createDedupedRequest(getPromise: () => Promise<any>, requestId: any): ActiveRequest;
    removeRequest(requestId: string): void;
}
