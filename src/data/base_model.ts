import { Http, HttpHeaderType } from "../uni/uni_http";
import { Resonpse } from "./data_types";


export class BaseModel {
    public http: Http
    constructor(http: Http) {
        this.http = http
    }
    public httpGet<T = any>(url: string, data: any = {}, header?: Record<HttpHeaderType, any>) {

        return this.http.get<Resonpse<T>>(url, data, header)
    }
    public httpListGet<T = any>(url: string, data: any = {}, header?: Record<HttpHeaderType, any>) {
        return this.http.get<Resonpse<T[]>>(url, data, header)
    }
    public httpPost<T = any>(url: string, data: any = {}, header?: Record<HttpHeaderType, any>) {

        return this.http.post<Resonpse<T>>(url, data, header)
    }
    public httpPostJson<T = any>(url: string, data: any = {}, header?: Record<HttpHeaderType, any>) {

        return this.http.postJson<Resonpse<T>>(url, data, header)
    }

}
