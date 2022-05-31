"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.windowOnscroll = exports.uniappJumpTo = exports.syncPromise = exports.copyText = void 0;
const platform_1 = require("./platform");
const vue_clipboard3_1 = __importDefault(require("vue-clipboard3"));
const copyText = (data) => {
    if (platform_1.isH5) {
        const { toClipboard } = (0, vue_clipboard3_1.default)();
        toClipboard(data).then((r) => {
            if (r) {
                console.log(r);
                uni.showToast({
                    title: "复制成功",
                });
            }
        });
    }
    else {
        uni.setClipboardData({
            data: data,
            success: () => {
                uni.showToast({
                    title: "复制成功",
                });
            },
        });
    }
};
exports.copyText = copyText;
function syncPromise(call) {
    return new Promise((res, err) => {
        call(res, err);
    });
}
exports.syncPromise = syncPromise;
const uniappJumpTo = (url, params = {}) => {
    let paramsData = [];
    if (params) {
        for (const key in params) {
            paramsData.push(`${key}=${params[key]}`);
        }
    }
    let paramStr = "";
    if (paramsData && paramsData.length > 0) {
        paramStr = paramsData.join("&");
    }
    if (paramStr) {
        uni.navigateTo({
            url: `${url}?` + paramStr,
        });
    }
    else {
        uni.navigateTo({
            url: `${url}`,
        });
    }
};
exports.uniappJumpTo = uniappJumpTo;
const windowOnscroll = (callback) => {
    window.onscroll = function () {
        //为了保证兼容性，这里取两个值，哪个有值取哪一个
        //scrollTop就是触发滚轮事件时滚轮的高度
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 500) {
            callback(scrollTop);
        }
    };
};
exports.windowOnscroll = windowOnscroll;
