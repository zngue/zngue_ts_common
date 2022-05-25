declare const http: import("axios").AxiosInstance;
declare function httpGet<T = any>(url: string, data?: any): Promise<T>;
declare function httpPost<T = any>(url: string, data?: any): Promise<T>;
declare function httpPostJson<T = any>(url: string, data?: any, params?: any): Promise<T>;
export { http, httpPost, httpGet, httpPostJson };
