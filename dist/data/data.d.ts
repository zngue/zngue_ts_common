import { Http } from "./../uni/uni_http";
import { CommonList, ExtOptionData, Resonpse } from "./data_types";
import { OptionData } from "./types";
export declare class DataModel {
    table: string;
    http?: Http;
    constructor(table: string, http?: Http);
    create<T = any>(data: Record<string, OptionData>): Promise<Resonpse<T>>;
    list<T = any>(where?: OptionData[], extOption?: ExtOptionData): Promise<Resonpse<T>>;
    listWithPage<T = any>(where?: OptionData[], extOption?: ExtOptionData): Promise<Resonpse<CommonList<T>>>;
    update<T = any>(data: Record<string, OptionData>, where?: OptionData[]): Promise<Resonpse<T>>;
    content<T = any>(where?: OptionData[]): Promise<Resonpse<T>>;
}
export declare const dataModel: (table: string, http?: Http | undefined) => DataModel;
