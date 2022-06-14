import { Http } from "./../uni/uni_http";
import { CommonList, DataRequest, ExtOptionData, Resonpse } from "./data_types";
import { OptionData } from "./types";
export declare interface DAtA_URI {
    dataCreate: string;
    dataList: string;
    dataListWithCount: string;
    dataUpdate: string;
    dataFirst: string;
    [key: string]: string;
}
export declare class DataModel {
    table: string;
    http?: Http;
    dataUri: DAtA_URI;
    constructor(table: string, http?: Http);
    create<T = any>(data: OptionData[]): Promise<Resonpse<T>>;
    list<T = any>(where?: OptionData[], extOption?: ExtOptionData): Promise<Resonpse<T>>;
    listWithCount<T = any>(where?: OptionData[], extOption?: ExtOptionData): Promise<Resonpse<CommonList<T>>>;
    update<T = any>(data: OptionData[], where?: OptionData[]): Promise<Resonpse<T>>;
    content<T = any>(where?: OptionData[], extOption?: ExtOptionData): Promise<Resonpse<T>>;
    anyData<T = any>(key: string, data: DataRequest): Promise<Resonpse<T>> | undefined;
    httpDo<T = any>(url: string, data: Partial<DataRequest>): Promise<Resonpse<T>>;
}
export declare const dataModel: (table: string, http?: Http | undefined) => DataModel;
