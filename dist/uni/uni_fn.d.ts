export declare const copyText: (data: string) => void;
export declare type Callback = (res: any, err: any) => void;
export declare function syncPromise<T = any>(call: Callback): Promise<T>;
export declare const uniappJumpTo: (url: string, params?: Record<string, any>) => void;
export declare type OnscrollCallback = (top: number) => void;
export declare const windowOnscroll: (callback: OnscrollCallback) => void;
