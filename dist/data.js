"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataModel = void 0;
const http_1 = require("./http");
class DataModel {
    constructor(table) {
        this.table = table;
    }
    create(data) {
        const formData = {
            table: this.table,
            data: data,
        };
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
        return (0, http_1.httpPostJson)("zngpay/public/dataList", formData);
    }
    update(data, where = []) {
        const formData = {
            table: this.table,
            where: where,
            data: data
        };
        return (0, http_1.httpPostJson)("zngpay/public/dataUpdate", formData);
    }
    content(where = []) {
        const formData = {
            table: this.table,
            where: where,
        };
        return (0, http_1.httpPostJson)("zngpay/public/dataFirst", formData);
    }
}
exports.DataModel = DataModel;
