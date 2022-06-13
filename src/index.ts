import { optFn, optValue, optOption, optValueType } from "./data/where_option";
import {
    OptionType,
    OptionFn,
    VauleType,
    OptionData,
    DATE_FORMAT,
    Common,
} from "./data/types";
import { http, httpPost, httpGet, httpPostJson } from "./http/http";
import { CommonList, DataRequest, ExtOptionData, Resonpse } from "./data/data_types";
import { DataModel, dataModel } from "./data/data";
import { httpUniappRequest, Http } from "./uni/uni_http";
import * as ZngUni from "./uni/uni"
import {
    copyText,
    Callback,
    syncPromise,
    uniappJumpTo,
    OnscrollCallback,
    windowOnscroll,
} from "./uni/uni_fn";
export {
    optFn,
    optValue,
    optOption,
    optValueType,
    http,
    httpPost,
    httpGet,
    httpPostJson,
    httpUniappRequest,
    copyText,
    syncPromise,
    uniappJumpTo,
    windowOnscroll,
    dataModel
};
export {
    OnscrollCallback,
    Callback,
    CommonList,
    DataRequest,
    ExtOptionData,
    Resonpse,
    DataModel,
    OptionType,
    OptionFn,
    VauleType,
    OptionData,
    DATE_FORMAT,
    Common,
    Http,
    ZngUni
};








