import { httpGet, httpPost, httpPostJson } from "./http";
class Http {
    public httpGet<T = any>(url: string, data: any = {}) {
        return httpGet<T>(url, data)
    }

    public httpPost<T = any>(url: string, data: any = {}) {
        return httpPost<T>(url, data)
    }
    public httpPostJson<T = any>(url: string, data: any = {}) {
        return httpPostJson<T>(url, data)
    }
}
export const httpRequest = (): Http => {
    return new Http()
}