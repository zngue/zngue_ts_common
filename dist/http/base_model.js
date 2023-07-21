"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpAxiosRequest = exports.Http = void 0;
const http_1 = require("./http");
class Http {
    constructor(config) {
        this.config = config;
    }
    httpGet(url, data, config) {
        const axiosConfig = config ? config : this.config;
        return (0, http_1.httpGet)(url, data, axiosConfig);
    }
    httpPost(url, data, params, config) {
        const axiosConfig = config ? config : this.config;
        return (0, http_1.httpPost)(url, data, params, axiosConfig);
    }
    httpPostJson(url, data, params, config) {
        const axiosConfig = config ? config : this.config;
        return (0, http_1.httpPostJson)(url, data, params, axiosConfig);
    }
}
exports.Http = Http;
const httpAxiosRequest = (config) => {
    return new Http(config);
};
exports.httpAxiosRequest = httpAxiosRequest;
