import { AxiosConfigCallback, httpGet, httpPost, httpPostJson } from "./http";
export class Http {
    public config?: AxiosConfigCallback
    constructor(config?: AxiosConfigCallback) {
        this.config = config
    }
    public httpGet<T = any, V = any>(url: string, data?: V, config?: AxiosConfigCallback<V>) {
        const axiosConfig = config ? config : this.config
        return httpGet<T, V>(url, data, axiosConfig)
    }
    public httpPost<T = any, V = any>(url: string, data?: V, params?: any, config?: AxiosConfigCallback<V>) {
        const axiosConfig = config ? config : this.config
        return httpPost<T, V>(url, data, params, axiosConfig)
    }
    public httpPostJson<T = any, V = any>(url: string, data?: V, params?: any, config?: AxiosConfigCallback<V>) {
        const axiosConfig = config ? config : this.config
        return httpPostJson<T, V>(url, data, params, axiosConfig)
    }
}
export const httpAxiosRequest = (config?: AxiosConfigCallback): Http => {
    return new Http(config)
}

