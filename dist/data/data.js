"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataModel = exports.DataModel = void 0;
const http_1 = require("./../http/http");
class DataModel {
    constructor(table, http) {
        this.dataUri = {
            dataCreate: "zngpay/public/dataCreate",
            dataList: "zngpay/public/dataList",
            dataListWithCount: "zngpay/public/dataList",
            dataUpdate: "zngpay/public/dataUpdate",
            dataFirst: "zngpay/public/dataFirst"
        };
        this.table = table;
        this.http = http;
    }
    create(data) {
        const formData = {
            table: this.table,
            data: data,
        };
        return this.httpDo(this.dataUri.dataCreate, formData);
    }
    list(where = [], extOption) {
        const formData = {
            table: this.table,
            where: where,
            page: extOption === null || extOption === void 0 ? void 0 : extOption.page,
            pageSize: extOption === null || extOption === void 0 ? void 0 : extOption.pageSize,
            order: extOption === null || extOption === void 0 ? void 0 : extOption.order,
            join: extOption === null || extOption === void 0 ? void 0 : extOption.join
        };
        return this.httpDo(this.dataUri.dataList, formData);
    }
    listWithCount(where = [], extOption) {
        const formData = {
            table: this.table,
            where: where,
            page: extOption === null || extOption === void 0 ? void 0 : extOption.page,
            pageSize: extOption === null || extOption === void 0 ? void 0 : extOption.pageSize,
            order: extOption === null || extOption === void 0 ? void 0 : extOption.order,
            join: extOption === null || extOption === void 0 ? void 0 : extOption.join
        };
        return this.httpDo(this.dataUri.dataListWithCount, formData);
    }
    update(data, where = []) {
        const formData = {
            table: this.table,
            where: where,
            data: data,
        };
        return this.httpDo(this.dataUri.dataUpdate, formData);
    }
    content(where = [], extOption) {
        const formData = {
            table: this.table,
            where: where,
            order: extOption === null || extOption === void 0 ? void 0 : extOption.order,
            join: extOption === null || extOption === void 0 ? void 0 : extOption.join
        };
        const uri = this.dataUri.dataFirst;
        return this.httpDo(uri, formData);
    }
    anyData(key, data) {
        const uri = this.dataUri[key];
        if (!uri) {
            return;
        }
        data.table = this.table;
        return this.httpDo(uri, data);
    }
    httpDo(url, data) {
        if (this.http) {
            return this.http.postJson(url, data);
        }
        return (0, http_1.httpPostJson)(url, data);
    }
}
exports.DataModel = DataModel;
const dataModel = (table, http) => {
    return new DataModel(table, http);
};
exports.dataModel = dataModel;
