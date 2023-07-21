import { InternalAxiosRequestConfig } from "axios";
declare const http: import("axios").AxiosInstance;
export declare type AxiosConfig<T = any> = InternalAxiosRequestConfig<T>;
export declare type AxiosConfigCallback<T = any> = (config: AxiosConfig<T>) => AxiosConfig<T>;
declare function httpGet<T = any, V = any>(url: string, data?: V, config?: AxiosConfigCallback<V>): Promise<T>;
declare function httpPost<T = any, V = any>(url: string, data?: V, params?: any, config?: AxiosConfigCallback<V>): Promise<T>;
declare function httpPostJson<T = any, V = any>(url: string, data: any, params?: any, config?: AxiosConfigCallback<V>): Promise<T>;
export { http, httpPost, httpGet, httpPostJson };
