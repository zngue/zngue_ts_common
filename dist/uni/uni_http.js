"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpUniappRequest = exports.Http = exports.HttpContentType = exports.HtppType = void 0;
const platform_1 = require("./platform");
var HtppType;
(function (HtppType) {
    HtppType["GET"] = "GET";
    HtppType["POST"] = "POST";
    HtppType["JSON_BODY"] = "JSON_BODY";
})(HtppType = exports.HtppType || (exports.HtppType = {}));
var HttpContentType;
(function (HttpContentType) {
    HttpContentType["FORM_URL_ENCODED"] = "application/x-www-form-urlencoded";
    HttpContentType["JSON"] = "application/json";
})(HttpContentType = exports.HttpContentType || (exports.HttpContentType = {}));
class Http {
    constructor(host) {
        this.host = host;
    }
    getHost() {
        if (platform_1.isMp) {
            return this.host;
        }
        return "";
    }
    get(url, data = {}, header = {}) {
        url = this.getHost() + url;
        return new Promise((resolve, errFail) => {
            uni.request({
                url: url,
                method: HtppType.GET,
                data: data,
                header: header,
                success: (res) => {
                    return resolve(res.data);
                },
                fail: (err) => {
                    errFail(err);
                }
            });
        });
    }
    post(url, data = {}, header = {}) {
        url = this.getHost() + url;
        header["content-type"] = HttpContentType.FORM_URL_ENCODED;
        return new Promise((resolve, errFail) => {
            uni.request({
                url: url,
                method: HtppType.POST,
                data: data,
                header: header,
                success: (res) => resolve(res.data),
                fail: (err) => {
                    errFail(err);
                }
            });
        });
    }
    postJson(url, data = {}, header = {}) {
        url = this.getHost() + url;
        header["content-type"] = HttpContentType.JSON;
        return new Promise((resolve, errFail) => {
            uni.request({
                url: url,
                method: HtppType.POST,
                data: data,
                header: header,
                success: (res) => {
                    resolve(res.data);
                },
                fail: (err) => {
                    errFail(err);
                }
            });
        });
    }
}
exports.Http = Http;
const httpUniappRequest = (host = "") => {
    return new Http(host);
};
exports.httpUniappRequest = httpUniappRequest;
