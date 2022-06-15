"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = exports.ZngUni = exports.Http = exports.DATE_FORMAT = exports.DataModel = exports.dataModel = exports.windowOnscroll = exports.uniappJumpTo = exports.syncPromise = exports.copyText = exports.filedOption = exports.httpUniappRequest = exports.httpPostJson = exports.httpGet = exports.httpPost = exports.http = exports.optValueType = exports.optOption = exports.optValue = exports.optFn = void 0;
const where_option_1 = require("./data/where_option");
Object.defineProperty(exports, "optFn", { enumerable: true, get: function () { return where_option_1.optFn; } });
Object.defineProperty(exports, "optValue", { enumerable: true, get: function () { return where_option_1.optValue; } });
Object.defineProperty(exports, "optOption", { enumerable: true, get: function () { return where_option_1.optOption; } });
Object.defineProperty(exports, "optValueType", { enumerable: true, get: function () { return where_option_1.optValueType; } });
Object.defineProperty(exports, "filedOption", { enumerable: true, get: function () { return where_option_1.filedOption; } });
const types_1 = require("./data/types");
Object.defineProperty(exports, "DATE_FORMAT", { enumerable: true, get: function () { return types_1.DATE_FORMAT; } });
const http_1 = require("./http/http");
Object.defineProperty(exports, "http", { enumerable: true, get: function () { return http_1.http; } });
Object.defineProperty(exports, "httpPost", { enumerable: true, get: function () { return http_1.httpPost; } });
Object.defineProperty(exports, "httpGet", { enumerable: true, get: function () { return http_1.httpGet; } });
Object.defineProperty(exports, "httpPostJson", { enumerable: true, get: function () { return http_1.httpPostJson; } });
const data_1 = require("./data/data");
Object.defineProperty(exports, "DataModel", { enumerable: true, get: function () { return data_1.DataModel; } });
Object.defineProperty(exports, "dataModel", { enumerable: true, get: function () { return data_1.dataModel; } });
const uni_http_1 = require("./uni/uni_http");
Object.defineProperty(exports, "httpUniappRequest", { enumerable: true, get: function () { return uni_http_1.httpUniappRequest; } });
Object.defineProperty(exports, "Http", { enumerable: true, get: function () { return uni_http_1.Http; } });
const ZngUni = __importStar(require("./uni/uni"));
exports.ZngUni = ZngUni;
const base_1 = require("./uni/base");
Object.defineProperty(exports, "BaseService", { enumerable: true, get: function () { return base_1.BaseService; } });
const uni_fn_1 = require("./uni/uni_fn");
Object.defineProperty(exports, "copyText", { enumerable: true, get: function () { return uni_fn_1.copyText; } });
Object.defineProperty(exports, "syncPromise", { enumerable: true, get: function () { return uni_fn_1.syncPromise; } });
Object.defineProperty(exports, "uniappJumpTo", { enumerable: true, get: function () { return uni_fn_1.uniappJumpTo; } });
Object.defineProperty(exports, "windowOnscroll", { enumerable: true, get: function () { return uni_fn_1.windowOnscroll; } });
