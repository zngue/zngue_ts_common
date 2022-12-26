declare class Http {
    httpGet<T = any>(url: string, data?: any): Promise<T>;
    httpPost<T = any>(url: string, data?: any): Promise<T>;
    httpPostJson<T = any>(url: string, data?: any): Promise<T>;
}
export declare const httpRequest: () => Http;
export {};
