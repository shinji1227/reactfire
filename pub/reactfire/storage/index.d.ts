import * as React from 'react';
import { storage } from 'firebase/app';
import { ReactFireOptions } from '..';
export declare function useStorageTask<T = unknown>(task: storage.UploadTask, ref: storage.Reference, options?: ReactFireOptions<T>): storage.UploadTaskSnapshot | T;
export declare function useStorageDownloadURL<T = string>(ref: storage.Reference, options?: ReactFireOptions<T>): string | T;
declare type StorageImageProps = {
    storagePath: string;
    storage?: firebase.storage.Storage;
};
export declare function StorageImage(props: StorageImageProps & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>): JSX.Element;
export {};
