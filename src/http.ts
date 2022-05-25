import axios, { AxiosRequestConfig } from "axios";
import nprogress from "nprogress";
import qs from "qs";
const http = axios.create({
    baseURL: "/",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
    },
});
http.interceptors.request.use((config: AxiosRequestConfig) => {
    nprogress.start();
    const token = localStorage.getItem("token");
    let headers = config.headers as Record<string, any>;
    if (token) {
        headers.token = token;
    }
    config.headers = headers;
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

function httpGet<T = any>(url: string, data: any = {}): Promise<T> {
    return new Promise((resolve, reject) => {
        http
            .get<T>(url, { params: data })
            .then((r) => {
                resolve(r.data);
            })
            .catch((res) => {
                reject(res);
            })

    });
}
function httpPost<T = any>(url: string, data: any = {}): Promise<T> {
    return new Promise((resolve, reject) => {
        http
            .post<T>(url, qs.stringify(data), {
                headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                },
            })
            .then((r) => {
                resolve(r.data);
            })
            .catch((res) => {
                reject(res);
            })

    });
}
function httpPostJson<T = any>(
    url: string,
    data: any = {},
    params: any = {}
): Promise<T> {
    return new Promise((resolve, reject) => {
        http
            .post<T>(url, data, {
                params: params,
            })
            .then((r) => {
                resolve(r.data);
            })
            .catch((res) => {
                reject(res);
            })

    });
}
export { http, httpPost, httpGet, httpPostJson };
