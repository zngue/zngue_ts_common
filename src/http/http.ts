import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import nprogress from "nprogress";
import qs from "qs";
const http = axios.create({
    baseURL: "/",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
    },
});
export type AxiosConfig<T = any> = InternalAxiosRequestConfig<T>;

export type AxiosConfigCallback<T = any> = (config: AxiosConfig<T>) => AxiosConfig<T>;

let requestCallback: AxiosConfigCallback | null = null; // 请求拦截器回调
http.interceptors.request.use((config: AxiosConfig) => {
    nprogress.start();
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.set("token", token);
    }
    if (requestCallback) {
        config = requestCallback(config);
    }
    return config;
});
http.interceptors.response.use(
    (res) => {
        nprogress.done();
        if (res && res.status === 200) {
            return res;
        }
        return Promise.reject();
    },
    (err) => {
        nprogress.done();
        const { response = {} } = err;
        if (err.message.includes("timeout")) {
            return Promise.reject(err);
        }
        if (response.status === 500) {
            return Promise.reject(err);
        }
        return Promise.reject(err);
    }
);
function httpGet<T = any, V = any>(url: string, data?: V, config?: AxiosConfigCallback<V>): Promise<T> {
    if (config) {
        requestCallback = config;
    }
    return new Promise((resolve, reject) => {
        http.get<T>(url, {
            params: data,
        }).then((r) => {
            resolve(r.data);
        }).catch((res) => {
            reject(res);
        })
    });
}
function httpPost<T = any, V = any>(url: string, data?: V, params?: any, config?: AxiosConfigCallback<V>): Promise<T> {
    if (config) {
        requestCallback = config;
    }
    return new Promise((resolve, reject) => {
        http.post<T>(url, data ? qs.stringify(data) : {}, { params: params }).then((r) => {
            resolve(r.data);
        }).catch((res) => {
            reject(res);
        })
    });
}
function httpPostJson<T = any, V = any>(url: string, data: any, params?: any, config?: AxiosConfigCallback<V>): Promise<T> {
    if (config) {
        requestCallback = config;
    }
    return new Promise((resolve, reject) => {
        http.post<T>(url, data, { params: params }).then((r) => {
            resolve(r.data);
        }).catch((res) => {
            reject(res);
        })
    });
}
export { http, httpPost, httpGet, httpPostJson };
