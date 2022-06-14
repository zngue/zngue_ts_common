export declare type VauleType = "string" | "float64" | "int" | '[]string' | '[]int';
export declare type OptionType = "eq" | "neq" | "gt" | "lt" | "null" | "notnull" | "like" | "in" | "notin" | "or";
export declare interface OptionData<T = any> {
    option?: OptionType;
    valueType?: VauleType;
    value?: T;
    filed: string;
}
export declare type OptionFn = (data: OptionData) => OptionData;
export declare enum DATE_FORMAT {
    YmdHis = "YYYY-MM-DD HH:mm:ss",
    Ymd = "YYY-MM-DD",
    His = "HH:mm:ss",
    md = "MM-DD"
}
export interface Common<T = any> {
    statusCode: number;
    message: string;
    data: T;
}
