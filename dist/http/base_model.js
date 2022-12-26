"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpRequest = void 0;
const http_1 = require("./http");
class Http {
    httpGet(url, data = {}) {
        return (0, http_1.httpGet)(url, data);
    }
    httpPost(url, data = {}) {
        return (0, http_1.httpPost)(url, data);
    }
    httpPostJson(url, data = {}) {
        return (0, http_1.httpPostJson)(url, data);
    }
}
const httpRequest = () => {
    return new Http();
};
exports.httpRequest = httpRequest;
