import { Http } from "./../uni/uni_http";
import { CommonList, DataRequest, ExtOptionData, Resonpse } from "./data_types";
import { httpPostJson } from "./../http/http";
import { OptionData } from "./types";

export class DataModel {
    public table: string;
    public http?: Http;

    public constructor(table: string, http?: Http) {
        this.table = table;
        this.http = http;
    }
    public create<T = any>(data: Record<string, OptionData>) {
        const formData: Partial<DataRequest> = {
            table: this.table,
            data: data,
        };
        if (this.http) {
            return this.http.postJson<Resonpse<T>>("zngpay/public/dataCreate", formData);
        }
        return httpPostJson<Resonpse<T>>("zngpay/public/dataCreate", formData);

    }
    public list<T = any>(where: OptionData[] = [], extOption?: ExtOptionData) {
        const formData: Partial<DataRequest> = {
            table: this.table,
            where: where,
            page: extOption?.page || 1,
            pageSize: extOption?.pageSize || 15,
            order: extOption?.order,
        };
        if (this.http) {
            return this.http.postJson<Resonpse<T>>("zngpay/public/dataList", formData);
        }
        return httpPostJson<Resonpse<T>>("zngpay/public/dataList", formData);

    }
    public listWithPage<T = any>(where: OptionData[] = [], extOption?: ExtOptionData) {
        const formData: Partial<DataRequest> = {
            table: this.table,
            where: where,
            page: extOption?.page || 1,
            pageSize: extOption?.pageSize || 15,
            order: extOption?.order,
        };
        if (this.http) {
            return this.http.postJson<Resonpse<CommonList<T>>>("zngpay/public/dataList", formData);
        }
        return httpPostJson<Resonpse<CommonList<T>>>("zngpay/public/dataList", formData);

    }
    public update<T = any>(
        data: Record<string, OptionData>,
        where: OptionData[] = []
    ) {
        const formData: Partial<DataRequest> = {
            table: this.table,
            where: where,
            data: data,
        };

        if (this.http) {
            return this.http.postJson<Resonpse<T>>("zngpay/public/dataUpdate", formData);
        }
        return httpPostJson<Resonpse<T>>("zngpay/public/dataUpdate", formData);
    }
    public content<T = any>(where: OptionData[] = []) {
        const formData: Partial<DataRequest> = {
            table: this.table,
            where: where,
        };
        if (this.http) {

            return this.http.postJson<Resonpse<T>>("zngpay/public/dataFirst", formData);
        }
        return httpPostJson<Resonpse<T>>("zngpay/public/dataFirst", formData);
    }
}

export const dataModel = (table: string, http?: Http): DataModel => {
    return new DataModel(table, http)
}
