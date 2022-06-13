"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataModel = exports.DataModel = void 0;
const http_1 = require("./../http/http");
class DataModel {
    constructor(table, http) {
        this.table = table;
        this.http = http;
    }
    create(data) {
        const formData = {
            table: this.table,
            data: data,
        };
        if (this.http) {
            return this.http.postJson("zngpay/public/dataCreate", formData);
        }
        return (0, http_1.httpPostJson)("zngpay/public/dataCreate", formData);
    }
    list(where = [], extOption) {
        const formData = {
            table: this.table,
            where: where,
            page: (extOption === null || extOption === void 0 ? void 0 : extOption.page) || 1,
            pageSize: (extOption === null || extOption === void 0 ? void 0 : extOption.pageSize) || 15,
            order: extOption === null || extOption === void 0 ? void 0 : extOption.order,
        };
        if (this.http) {
            return this.http.postJson("zngpay/public/dataList", formData);
        }
        return (0, http_1.httpPostJson)("zngpay/public/dataList", formData);
    }
    listWithPage(where = [], extOption) {
        const formData = {
            table: this.table,
            where: where,
            page: (extOption === null || extOption === void 0 ? void 0 : extOption.page) || 1,
            pageSize: (extOption === null || extOption === void 0 ? void 0 : extOption.pageSize) || 15,
            order: extOption === null || extOption === void 0 ? void 0 : extOption.order,
        };
        if (this.http) {
            return this.http.postJson("zngpay/public/dataList", formData);
        }
        return (0, http_1.httpPostJson)("zngpay/public/dataList", formData);
    }
    update(data, where = []) {
        const formData = {
            table: this.table,
            where: where,
            data: data,
        };
        if (this.http) {
            return this.http.postJson("zngpay/public/dataUpdate", formData);
        }
        return (0, http_1.httpPostJson)("zngpay/public/dataUpdate", formData);
    }
    content(where = []) {
        const formData = {
            table: this.table,
            where: where,
        };
        if (this.http) {
            return this.http.postJson("zngpay/public/dataFirst", formData);
        }
        return (0, http_1.httpPostJson)("zngpay/public/dataFirst", formData);
    }
}
exports.DataModel = DataModel;
const dataModel = (table, http) => {
    return new DataModel(table, http);
};
exports.dataModel = dataModel;
