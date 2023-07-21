import { AxiosConfigCallback } from "./http";
export declare class Http {
    config?: AxiosConfigCallback;
    constructor(config?: AxiosConfigCallback);
    httpGet<T = any, V = any>(url: string, data?: V, config?: AxiosConfigCallback<V>): Promise<T>;
    httpPost<T = any, V = any>(url: string, data?: V, params?: any, config?: AxiosConfigCallback<V>): Promise<T>;
    httpPostJson<T = any, V = any>(url: string, data?: V, params?: any, config?: AxiosConfigCallback<V>): Promise<T>;
}
export declare const httpAxiosRequest: (config?: AxiosConfigCallback) => Http;
