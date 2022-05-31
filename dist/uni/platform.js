"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMp = exports.isMpWeixin = exports.isAppPlus = exports.isH5 = exports.Platform = exports.EPlatform = void 0;
var EPlatform;
(function (EPlatform) {
    /**App*/
    EPlatform["AppPlus"] = "APP-PLUS";
    /**App nvue*/
    EPlatform["AppPlusNvue"] = "APP-PLUS-NVUE";
    /**H5*/
    EPlatform["H5"] = "H5";
    /**微信小程序*/
    EPlatform["MpWeixin"] = "MP-WEIXIN";
    /**支付宝小程序*/
    EPlatform["MpAlipay"] = "MP-ALIPAY";
    /**百度小程序*/
    EPlatform["MpBaidu"] = "MP-BAIDU";
    /**字节跳动小程序*/
    EPlatform["MpToutiao"] = "MP-TOUTIAO";
    /**QQ小程序*/
    EPlatform["MpQq"] = "MP-QQ";
    /**360小程序*/
    EPlatform["Mp360"] = "MP-360";
    /**微信小程序/支付宝小程序/百度小程序/字节跳动小程序/QQ小程序/360小程序*/
    EPlatform["Mp"] = "MP";
    /**快应用通用(包含联盟、华为)*/
    EPlatform["QuickappWebview"] = "quickapp-webview";
    /**快应用联盟*/
    EPlatform["QuickappWebviewUnion"] = "quickapp-webview-union";
    /**快应用华为*/
    EPlatform["QuickappWebviewHuawei"] = "quickapp-webview-huawei";
})(EPlatform = exports.EPlatform || (exports.EPlatform = {}));
/**使用条件编译获取平台信息*/
function ifDefPlatform() {
    let platform;
    //#ifdef APP-PLUS
    platform = EPlatform.AppPlus;
    //#endif
    //#ifdef APP-PLUS-NVUE
    platform = EPlatform.AppPlusNvue;
    //#endif
    //#ifdef H5
    platform = EPlatform.H5;
    //#endif
    //#ifdef MP-WEIXIN
    platform = EPlatform.MpWeixin;
    //#endif
    //#ifdef MP-ALIPAY
    platform = EPlatform.MpAlipay;
    //#endif
    //#ifdef MP-BAIDU
    platform = EPlatform.MpBaidu;
    //#endif
    //#ifdef MP-TOUTIAO
    platform = EPlatform.MpToutiao;
    //#endif
    //#ifdef MP-QQ
    platform = EPlatform.MpQq;
    //#endif
    //#ifdef MP-360
    platform = EPlatform.Mp360;
    //#endif
    //#ifdef quickapp-webview
    platform = EPlatform.QuickappWebview;
    //#endif
    //#ifdef quickapp-webview-union
    platform = EPlatform.QuickappWebviewUnion;
    //#endif
    //#ifdef quickapp-webview-huawei
    platform = EPlatform.QuickappWebviewHuawei;
    //#endif
    return platform;
}
const platformMp = () => {
    // #ifdef MP 
    return true;
    // #endif 
    return false;
};
/**平台类型*/
exports.Platform = ifDefPlatform();
/**默认导出平台类型*/
exports.default = exports.Platform;
exports.isH5 = exports.Platform === EPlatform.H5;
exports.isAppPlus = exports.Platform === EPlatform.AppPlus;
exports.isMpWeixin = exports.Platform === EPlatform.MpWeixin;
exports.isMp = platformMp();
