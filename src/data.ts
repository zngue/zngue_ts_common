import { CommonList, DataRequest, ExtOptionData, Resonpse } from "./data_types";
import { httpPostJson } from "./http";
import { OptionData } from "./types";

export class DataModel {
    public table: string;

    public constructor(table: string) {
        this.table = table;
    }
    public create<T = any>(data: Record<string, OptionData>) {
        const formData: Partial<DataRequest> = {
            table: this.table,
            data: data,
        };
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
        return httpPostJson<Resonpse<CommonList<T>>>("zngpay/public/dataList", formData);
    }
    public update<T = any>(data: Record<string, OptionData>, where: OptionData[] = []) {
        const formData: Partial<DataRequest> = {
            table: this.table,
            where: where,
            data: data
        };
        return httpPostJson<Resonpse<T>>("zngpay/public/dataUpdate", formData);
    }
    public content<T = any>(where: OptionData[] = []) {
        const formData: Partial<DataRequest> = {
            table: this.table,
            where: where,
        };
        return httpPostJson<Resonpse<T>>("zngpay/public/dataFirst", formData);
    }

}