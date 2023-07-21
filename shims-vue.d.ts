
declare module 'window' {
    export const wx: IWx
}


interface ConfigOption {
    debug?: boolean
    appId: string
    timestamp: number
    nonceStr: string
    signature: string
    jsApiList: string
}
interface IWx {
    readonly config(data: ConfigOption): void
    readonly ready(callback: any): void
    readonly error(callback: any): void
    readonly checkJsApi(): void
    readonly updateAppMessageShareData()
    readonly updateTimelineShareData()
}