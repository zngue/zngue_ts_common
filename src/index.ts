import { optFn, optValue, optOption, optValueType, filedOption } from "./data/where_option";
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
import { DataModel, dataModel, DAtA_URI } from "./data/data";
import { httpUniappRequest, Http } from "./uni/uni_http";
import * as ZngUni from "./uni/uni"
import { BaseService, ModelCallBack } from "./uni/base"
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
    filedOption,
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
    DAtA_URI,
    Common,
    Http,
    ZngUni,
    BaseService,
    ModelCallBack
};








