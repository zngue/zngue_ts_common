"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpService = void 0;
function httpService(option) {
    let data = {};
    if (!option) {
        return {};
    }
    for (const key in option) {
        data[key] = {
            target: option[key],
            changeOrigin: true, //是否跨域
        };
    }
    return data;
}
exports.httpService = httpService;
