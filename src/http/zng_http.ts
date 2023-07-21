import axios, { Axios, AxiosError, AxiosResponse, CreateAxiosDefaults, InternalAxiosRequestConfig } from "axios";
import nprogress from "nprogress";


export type AxiosConfig<T = any> = InternalAxiosRequestConfig<T>; // axios配置
export type Callback<T = any> = (config: T) => T;// axios配置回调
export interface HttpConfig<T = any> {
    baseURL?: string;
    headers?: any;
    params?: any;
    timeout?: number;
    rCallback: Callback<AxiosConfig>;
    requestCallback?: Callback<AxiosConfig>;
}
const axiosResponseConfig = (res: AxiosResponse) => {
    nprogress.done();
    if (res && res.status === 200) {
        return res;
    }
    return Promise.reject();
}

const axiosResponseError = (err: AxiosError) => {
    nprogress.done();
    const { response = { status: Number } } = err;
    if (err.message.includes("timeout")) {
        return Promise.reject(err);
    }
    if (response.status === 500) {
        return Promise.reject(err);
    }
    return Promise.reject(err);
}
const axiosConfig = (callback?: Callback<AxiosConfig>): Callback<AxiosConfig> => {
    return (config: AxiosConfig) => {
        nprogress.start();
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.set("token", token);
        }
        if (callback) {
            config = callback(config);
        }
        return config;
    }
}
export class Http {
    private http: Axios
    private defaultHeaders: any;
    private rCallback?: Callback<AxiosConfig>; // 请求拦截器回调
    constructor(option?: HttpConfig) {
        const defaultHeaders = {
            "Content-Type": "application/json;charset=UTF-8",
        }
        this.rCallback = option?.rCallback
        this.defaultHeaders = defaultHeaders
        const config: CreateAxiosDefaults = {
            baseURL: option?.baseURL || "/",
            timeout: option?.timeout || 5000,
            headers: option?.headers || this.defaultHeaders,
        }
        const http = axios.create(config)
        http.interceptors.request.use(axiosConfig(this.rCallback));
        http.interceptors.response.use(axiosResponseConfig, axiosResponseError);
        this.http = http
    }
    public get<T = any, V = any>(url: string, data?: V, callback?: Callback<AxiosConfig>): Promise<T> {
        if (callback) {
            this.rCallback = callback
        }
        return new Promise((resolve, reject) => {
            this.http.get<T>(url, {
                params: data,
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err)
            })
        })
    }
    public post<T = any, V = any>(url: string, data?: V, params?: any, callback?: Callback<AxiosConfig>): Promise<T> {
        if (callback) {
            this.rCallback = callback
        }
        const defaultHeaders = {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        }
        return new Promise((resolve, reject) => {
            this.http.post<T>(url, data, { headers: defaultHeaders, params: params }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err)
            })
        })
    }
    public postJson<T = any, V = any>(url: string, data?: V, params?: any, callback?: Callback<AxiosConfig>): Promise<T> {
        if (callback) {
            this.rCallback = callback
        }
        return new Promise((resolve, reject) => {
            this.http.post<T>(url, data, { params: params }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err)
            })
        })
    }
}
export const HttpRequest = (option?: HttpConfig): Http => {
    return new Http(option)
}