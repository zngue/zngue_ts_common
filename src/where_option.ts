import { OptionData, OptionFn, OptionType, VauleType } from "./types"

export const optOption = (option: OptionType): OptionFn => {
    return (data: OptionData): OptionData => {
        data.option = option
        return data
    }
}
export const optValueType = (valueType: VauleType = "string"): OptionFn => {
    return (data: OptionData): OptionData => {
        data.valueType = valueType
        return data
    }
}
export const optValue = <T = any>(value: any): OptionFn => {
    return (data: OptionData): OptionData<T> => {
        data.value = value
        return data
    }
}
export const optFn = (...data: OptionFn[]): OptionData => {
    let where: OptionData = {
        option: "eq",
        value: "",
        valueType: "string"
    }
    if (data.length > 0) {
        data.forEach((fn: OptionFn) => {
            where = fn(where)
        });
    }
    return where
}