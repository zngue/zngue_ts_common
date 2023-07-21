"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const window_1 = __importDefault(require("window"));
function edsa(params) {
    window_1.default.wx.config({
        appId: "",
        timestamp: 0,
        nonceStr: "",
        signature: "",
        jsApiList: ""
    });
}
