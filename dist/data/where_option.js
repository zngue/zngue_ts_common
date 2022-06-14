"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optFn = exports.optValue = exports.optValueType = exports.filedOption = exports.optOption = void 0;
const optOption = (option) => {
    return (data) => {
        data.option = option;
        return data;
    };
};
exports.optOption = optOption;
const filedOption = (filed) => {
    return (data) => {
        data.filed = filed;
        return data;
    };
};
exports.filedOption = filedOption;
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
const optFn = (field, ...data) => {
    let where = {
        option: "eq",
        value: "",
        valueType: "string",
        filed: field
    };
    if (data.length > 0) {
        data.forEach((fn) => {
            where = fn(where);
        });
    }
    return where;
};
exports.optFn = optFn;
