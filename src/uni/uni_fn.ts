import { isH5 } from "./platform";
import useClipboard from "vue-clipboard3";
export const copyText = (data: string) => {
  if (isH5) {
    const { toClipboard } = useClipboard();
    toClipboard(data).then((r) => {
      if (r) {
        console.log(r);
        uni.showToast({
          title: "复制成功",
        });
      }
    });
  } else {
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

export type Callback = (res: any, err: any) => void;
export function syncPromise<T = any>(call: Callback): Promise<T> {
  return new Promise((res: any, err: any) => {
    call(res, err);
  });
}
export const uniappJumpTo = (url: string, params: Record<string, any> = {}) => {
  let paramsData: string[] = [];
  if (params) {
    for (const key in params) {
      paramsData.push(`${key}=${params[key]}`);
    }
  }
  let paramStr: string = "";
  if (paramsData && paramsData.length > 0) {
    paramStr = paramsData.join("&");
  }
  if (paramStr) {
    uni.navigateTo({
      url: `${url}?` + paramStr,
    });
  } else {
    uni.navigateTo({
      url: `${url}`,
    });
  }
};
export type OnscrollCallback = (top: number) => void;
export const windowOnscroll = (callback: OnscrollCallback) => {
  window.onscroll = function () {
    //为了保证兼容性，这里取两个值，哪个有值取哪一个
    //scrollTop就是触发滚轮事件时滚轮的高度
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 500) {
      callback(scrollTop);
    }
  };
};