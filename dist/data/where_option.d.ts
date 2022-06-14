import { OptionData, OptionFn, OptionType, VauleType } from "./types";
export declare const optOption: (option: OptionType) => OptionFn;
export declare const filedOption: (filed: string) => OptionFn;
export declare const optValueType: (valueType?: VauleType) => OptionFn;
export declare const optValue: <T = any>(value: any) => OptionFn;
export declare const optFn: (field: string, ...data: OptionFn[]) => OptionData;
