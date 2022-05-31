export declare enum EPlatform {
    /**App*/
    AppPlus = "APP-PLUS",
    /**App nvue*/
    AppPlusNvue = "APP-PLUS-NVUE",
    /**H5*/
    H5 = "H5",
    /**微信小程序*/
    MpWeixin = "MP-WEIXIN",
    /**支付宝小程序*/
    MpAlipay = "MP-ALIPAY",
    /**百度小程序*/
    MpBaidu = "MP-BAIDU",
    /**字节跳动小程序*/
    MpToutiao = "MP-TOUTIAO",
    /**QQ小程序*/
    MpQq = "MP-QQ",
    /**360小程序*/
    Mp360 = "MP-360",
    /**微信小程序/支付宝小程序/百度小程序/字节跳动小程序/QQ小程序/360小程序*/
    Mp = "MP",
    /**快应用通用(包含联盟、华为)*/
    QuickappWebview = "quickapp-webview",
    /**快应用联盟*/
    QuickappWebviewUnion = "quickapp-webview-union",
    /**快应用华为*/
    QuickappWebviewHuawei = "quickapp-webview-huawei"
}
/**平台类型*/
export declare const Platform: EPlatform;
/**默认导出平台类型*/
export default Platform;
export declare const isH5: boolean;
export declare const isAppPlus: boolean;
export declare const isMpWeixin: boolean;
export declare const isMp: boolean;
