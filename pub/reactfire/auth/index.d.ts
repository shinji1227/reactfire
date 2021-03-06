import { auth, User } from 'firebase/app';
import * as React from 'react';
import { ReactFireOptions } from '..';
export declare function preloadUser(firebaseApp: firebase.app.App): any;
export declare function useUser<T = unknown>(auth?: auth.Auth, options?: ReactFireOptions<T>): User | T;
export declare function useIdTokenResult(user: User, forceRefresh?: boolean): any;
export interface AuthCheckProps {
    auth?: auth.Auth;
    fallback: React.ReactNode;
    children: React.ReactNode;
    requiredClaims?: Object;
}
export interface ClaimsCheckProps {
    user: User;
    fallback: React.ReactNode;
    children: React.ReactNode;
    requiredClaims?: Object;
}
export declare function ClaimsCheck({ user, fallback, children, requiredClaims }: {
    user: any;
    fallback: any;
    children: any;
    requiredClaims: any;
}): JSX.Element;
export declare function AuthCheck({ auth, fallback, children, requiredClaims }: AuthCheckProps): JSX.Element;
