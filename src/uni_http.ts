import { isMp, isMpWeixin } from "./platform";
// type httpRequest='OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';

export type HttpHeaderType = "content-type" | "appid" | "mchid" | 'token' | string

export enum HtppType {
    GET = "GET",
    POST = "POST",
    JSON_BODY = "JSON_BODY"
}
export enum HttpContentType {
    FORM_URL_ENCODED = "application/x-www-form-urlencoded",
    JSON = "application/json"
}

class Http {
    public host: string
    public constructor(host: string) {
        this.host = host
    }
    public getHost(): string {
        //#ifdef MP
        return this.host
        //#endif
        return ""
    }
    public get<T = any>(url: string, data: any = {}, header: Record<HttpHeaderType, any> = {}): Promise<T> {
        url = this.getHost() + url
        return new Promise((resolve: any, errFail: any) => {
            uni.request({
                url: url,
                method: HtppType.GET,
                data: data,
                header: header,
                success: (res) => {
                    return resolve(res.data);
                },
                fail: (err: any) => {
                    errFail(err)
                }
            })
        })
    }
    public post<T = any>(url: string, data: any = {}, header: Record<HttpHeaderType, any> = {}): Promise<T> {
        url = this.getHost() + url
        header["content-type"] = HttpContentType.FORM_URL_ENCODED
        return new Promise((resolve: any, errFail: any) => {
            uni.request({
                url: url,
                method: HtppType.POST,
                data: data,
                header: header,
                success: (res) => resolve(res.data),
                fail: (err: any) => {
                    errFail(err)
                }
            })
        })
    }
    public postJson(url: string, data: any = {}, header: Record<HttpHeaderType, any> = {}) {
        url = this.getHost() + url
        header["content-type"] = HttpContentType.JSON
        return new Promise((resolve: any, errFail: any) => {
            uni.request({
                url: url,
                method: HtppType.POST,
                data: data,
                header: header,
                success: (res) => {
                    resolve(res.data)
                },
                fail: (err: any) => {
                    errFail(err)
                }
            })
        })
    }
}
export const httpUniappRequest = (host: string = "") => {
    return new Http(host)
}
