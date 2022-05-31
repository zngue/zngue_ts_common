"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optFn = exports.optValue = exports.optValueType = exports.optOption = void 0;
const optOption = (option) => {
    return (data) => {
        data.option = option;
        return data;
    };
};
exports.optOption = optOption;
const optValueType = (valueType = "string") => {
    return (data) => {
        data.valueType = valueType;
        return data;
    };
};
exports.optValueType = optValueType;
const optValue = (value) => {
    return (data) => {
        data.value = value;
        return data;
    };
};
exports.optValue = optValue;
const optFn = (...data) => {
    let where = {
        option: "eq",
        value: "",
        valueType: "string"
    };
    if (data.length > 0) {
        data.forEach((fn) => {
            where = fn(where);
        });
    }
    return where;
};
exports.optFn = optFn;
