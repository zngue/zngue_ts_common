import { OptionData } from "./types";

export interface DataRequest {
    table: string;
    data: OptionData[];
    where: OptionData[];
    page: number;
    pageSize: number;
    order: string;
}
export interface ExtOptionData {
    page: number;
    pageSize: number;
    order: string;
}
export interface Resonpse<T = any> {
    code: number;
    msg: string;
    data: T;
}
export interface CommonList<T = any> {
    count: number;
    list: T;
}
