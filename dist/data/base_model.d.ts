import { Http, HttpHeaderType } from "../uni/uni_http";
import { Resonpse } from "./data_types";
export declare class BaseModel {
    http: Http;
    constructor(http: Http);
    httpGet<T = any>(url: string, data?: any, header?: Record<HttpHeaderType, any>): Promise<Resonpse<T>>;
    httpListGet<T = any>(url: string, data?: any, header?: Record<HttpHeaderType, any>): Promise<Resonpse<T[]>>;
    httpPost<T = any>(url: string, data?: any, header?: Record<HttpHeaderType, any>): Promise<Resonpse<T>>;
    httpPostJson<T = any>(url: string, data?: any, header?: Record<HttpHeaderType, any>): Promise<Resonpse<T>>;
}
