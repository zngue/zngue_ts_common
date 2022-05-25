import { CommonList, ExtOptionData, Resonpse } from "./data_types";
import { OptionData } from "./types";
export declare class DataModel {
    table: string;
    constructor(table: string);
    create<T = any>(data: Record<string, OptionData>): Promise<Resonpse<T>>;
    list<T = any>(where?: Record<string, OptionData>, extOption?: ExtOptionData): Promise<Resonpse<T>>;
    listWithPage<T = any>(where?: Record<string, OptionData>, extOption?: ExtOptionData): Promise<Resonpse<CommonList<T>>>;
    update<T = any>(data: Record<string, OptionData>, where: Record<string, OptionData>): Promise<Resonpse<T>>;
    content<T = any>(where: Record<string, OptionData>): Promise<Resonpse<T>>;
}
