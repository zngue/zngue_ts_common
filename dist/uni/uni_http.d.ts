export declare type HttpHeaderType = "content-type" | "appid" | "mchid" | 'token' | string;
export declare enum HtppType {
    GET = "GET",
    POST = "POST",
    JSON_BODY = "JSON_BODY"
}
export declare enum HttpContentType {
    FORM_URL_ENCODED = "application/x-www-form-urlencoded",
    JSON = "application/json"
}
export declare class Http {
    host: string;
    constructor(host: string);
    getHost(): string;
    get<T = any>(url: string, data?: any, header?: Record<HttpHeaderType, any>): Promise<T>;
    post<T = any>(url: string, data?: any, header?: Record<HttpHeaderType, any>): Promise<T>;
    postJson<T = any>(url: string, data?: any, header?: Record<HttpHeaderType, any>): Promise<T>;
}
export declare const httpUniappRequest: (host?: string) => Http;
