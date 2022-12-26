"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
class BaseModel {
    constructor(http) {
        this.http = http;
    }
    httpGet(url, data = {}, header) {
        return this.http.get(url, data, header);
    }
    httpListGet(url, data = {}, header) {
        return this.http.get(url, data, header);
    }
    httpPost(url, data = {}, header) {
        return this.http.post(url, data, header);
    }
    httpPostJson(url, data = {}, header) {
        return this.http.postJson(url, data, header);
    }
}
exports.BaseModel = BaseModel;
