import { OptionData } from "./types";

export declare interface DataRequest {
    table: string;
    data: Record<string, Partial<OptionData>>;
    where: Record<string, Partial<OptionData>>;
    page: number;
    pageSize: number;
    order: string;
}
export declare interface ExtOptionData {
    page: number;
    pageSize: number;
    order: string;
}
export declare interface Resonpse<T = any> {
    code: number
    msg: string
    data: T
}
export interface CommonList<T = any> {
    count: number;
    list: T;
}