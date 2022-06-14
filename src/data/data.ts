import { Http } from "./../uni/uni_http";
import { CommonList, DataRequest, ExtOptionData, Resonpse } from "./data_types";
import { httpPostJson } from "./../http/http";
import { OptionData } from "./types";

export declare interface DAtA_URI {
    dataCreate: string
    dataList: string
    dataListWithCount: string
    dataUpdate: string
    dataFirst: string
    [key: string]: string
}
export class DataModel {
    public table: string;
    public http?: Http;
    public dataUri: DAtA_URI = {
        dataCreate: "zngpay/public/dataCreate",
        dataList: "zngpay/public/dataList",
        dataListWithCount: "zngpay/public/dataList",
        dataUpdate: "zngpay/public/dataUpdate",
        dataFirst: "zngpay/public/dataFirst"
    }
    public constructor(table: string, http?: Http) {
        this.table = table;
        this.http = http;
    }
    public create<T = any>(data: OptionData[]) {
        const formData: Partial<DataRequest> = {
            table: this.table,
            data: data,
        };
        return this.httpDo<T>(this.dataUri.dataCreate, formData)
    }
    public list<T = any>(where: OptionData[] = [], extOption?: ExtOptionData) {
        const formData: Partial<DataRequest> = {
            table: this.table,
            where: where,
            page: extOption?.page,
            pageSize: extOption?.pageSize,
            order: extOption?.order,
            join: extOption?.join
        };
        return this.httpDo<T>(this.dataUri.dataList, formData)
    }
    public listWithCount<T = any>(where: OptionData[] = [], extOption?: ExtOptionData) {
        const formData: Partial<DataRequest> = {
            table: this.table,
            where: where,
            page: extOption?.page,
            pageSize: extOption?.pageSize,
            order: extOption?.order,
            join: extOption?.join

        };
        return this.httpDo<CommonList<T>>(this.dataUri.dataListWithCount, formData)
    }
    public update<T = any>(data: OptionData[], where: OptionData[] = []) {
        const formData: Partial<DataRequest> = {
            table: this.table,
            where: where,
            data: data,
        };
        return this.httpDo<T>(this.dataUri.dataUpdate, formData)
    }
    public content<T = any>(where: OptionData[] = []) {
        const formData: Partial<DataRequest> = {
            table: this.table,
            where: where,
        };
        const uri = this.dataUri.dataFirst
        return this.httpDo<T>(uri, formData)
    }
    public anyData<T = any>(key: string, data: DataRequest) {
        const uri = this.dataUri[key]
        if (!uri) {
            return
        }
        data.table = this.table
        return this.httpDo<T>(uri, data)
    }
    public httpDo<T = any>(url: string, data: Partial<DataRequest>) {
        if (this.http) {
            return this.http.postJson<Resonpse<T>>(url, data)
        }
        return httpPostJson<Resonpse<T>>(url, data)
    }
}
export const dataModel = (table: string, http?: Http): DataModel => {
    return new DataModel(table, http)
}
