import { ProxyOptions } from 'vite'
export function httpService(option: Record<string, string>) {
    let data: Record<string, string | ProxyOptions> = {}
    if (!option) {
        return {}
    }
    for (const key in option) {
        data[key] = {
            target: option[key],
            changeOrigin: true, //是否跨域
        }
    }
    return data
}