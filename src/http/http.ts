import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import nprogress from "nprogress";
import qs from "qs";
const http = axios.create({
    baseURL: "/",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
    },
});
const httpBase = () => {
    const http = axios.create({
        baseURL: "/",
        timeout: 5000,
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
        },
    });

    return http;
}

export type AxiosConfig<T = any> = InternalAxiosRequestConfig<T>; // axios配置
export type AxiosConfigCallback<T = any> = (config: AxiosConfig<T>) => AxiosConfig<T>;// axios配置回调
let requestCallback: AxiosConfigCallback | null = null; // 请求拦截器回调
const axiosRequestConfigSuccess = (config: AxiosConfig) => {
    nprogress.start();
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.set("token", token);
    }
    if (requestCallback) {
        config = requestCallback(config);
    }
    return config;
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
http.interceptors.request.use(axiosRequestConfigSuccess);
http.interceptors.response.use(axiosResponseConfig, axiosResponseError);
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
        http.post<T>(url, data ? qs.stringify(data) : {}, {
            params: params,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
        }).then((r) => {
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
