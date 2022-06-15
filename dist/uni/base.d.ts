import { DataModel } from "../data/data";
import { CommonList, ExtOptionData, Resonpse } from "../data/data_types";
import { OptionData } from "../data/types";
export declare type ModelCallBack<T = any> = (data: T) => void;
export declare class BaseService<T = any> {
    toListPath: string;
    dataList: T[];
    data: Partial<T>;
    loading: boolean;
    finished: boolean;
    count: number;
    model: DataModel;
    listExt: ExtOptionData;
    dataUpdate(): OptionData<any>[];
    dataCreate(): OptionData<any>[];
    wherePrimaryKey(id?: string): OptionData[];
    whereList(): OptionData[];
    constructor(model: DataModel);
    create(data: OptionData[]): Promise<Resonpse<any>>;
    updateAfter(data: Resonpse): boolean;
    content(option: OptionData[], callback?: ModelCallBack): Promise<void>;
    listAfter(data: Resonpse<T[]>): boolean;
    list(option?: OptionData[]): Promise<void>;
    listWithCountAfter(data: Resonpse<CommonList<T[]>>): boolean;
    listWithCount(option: OptionData[]): Promise<void>;
    loadInfo(title?: string): void;
    submit(id?: string): Promise<void>;
}
