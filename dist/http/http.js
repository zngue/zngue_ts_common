"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpPostJson = exports.httpGet = exports.httpPost = exports.http = void 0;
const axios_1 = __importDefault(require("axios"));
const nprogress_1 = __importDefault(require("nprogress"));
const qs_1 = __importDefault(require("qs"));
const http = axios_1.default.create({
    baseURL: "/",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
    },
});
exports.http = http;
let requestCallback = null; // 请求拦截器回调
http.interceptors.request.use((config) => {
    nprogress_1.default.start();
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.set("token", token);
    }
    if (requestCallback) {
        config = requestCallback(config);
    }
    return config;
});
http.interceptors.response.use((res) => {
    nprogress_1.default.done();
    if (res && res.status === 200) {
        return res;
    }
    return Promise.reject();
}, (err) => {
    nprogress_1.default.done();
    const { response = {} } = err;
    if (err.message.includes("timeout")) {
        return Promise.reject(err);
    }
    if (response.status === 500) {
        return Promise.reject(err);
    }
    return Promise.reject(err);
});
function httpGet(url, data, config) {
    if (config) {
        requestCallback = config;
    }
    return new Promise((resolve, reject) => {
        http.get(url, {
            params: data,
        }).then((r) => {
            resolve(r.data);
        }).catch((res) => {
            reject(res);
        });
    });
}
exports.httpGet = httpGet;
function httpPost(url, data, params, config) {
    if (config) {
        requestCallback = config;
    }
    return new Promise((resolve, reject) => {
        http.post(url, data ? qs_1.default.stringify(data) : {}, { params: params }).then((r) => {
            resolve(r.data);
        }).catch((res) => {
            reject(res);
        });
    });
}
exports.httpPost = httpPost;
function httpPostJson(url, data, params, config) {
    if (config) {
        requestCallback = config;
    }
    return new Promise((resolve, reject) => {
        http.post(url, data, { params: params }).then((r) => {
            resolve(r.data);
        }).catch((res) => {
            reject(res);
        });
    });
}
exports.httpPostJson = httpPostJson;
