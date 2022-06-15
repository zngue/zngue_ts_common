"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const where_option_1 = require("../data/where_option");
const uni_fn_1 = require("./uni_fn");
class BaseService {
    constructor(model) {
        this.toListPath = "";
        this.dataList = [];
        this.data = {};
        this.loading = false;
        this.finished = false;
        this.count = 0;
        this.listExt = {
            page: 1,
            pageSize: 15,
            order: "",
            join: "",
        };
        this.model = model;
    }
    dataUpdate() {
        return this.dataCreate();
    }
    dataCreate() {
        const data = [];
        return data;
    }
    wherePrimaryKey(id = 'id') {
        const optionData = this.data;
        let data = [];
        if (optionData[id]) {
            data.push((0, where_option_1.optFn)(id, (0, where_option_1.optValue)(optionData[id]), (0, where_option_1.optValueType)("int")));
        }
        return data;
    }
    whereList() {
        const data = [];
        return data;
    }
    create(data) {
        return this.model.create(data);
    }
    updateAfter(data) {
        return true;
    }
    content(option, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, msg, code } = yield this.model.content(option);
            if (!callback) {
                if (code == 200) {
                    this.data = data;
                }
            }
            else {
                callback({ data, msg, code });
            }
        });
    }
    listAfter(data) {
        return true;
    }
    list(option) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.loading) {
                return;
            }
            if (this.finished) {
                return;
            }
            option = option ? option : this.whereList();
            this.loading = true;
            const { data, msg, code } = yield this.model.list(option, this.listExt);
            this.loading = false;
            const flag = this.listAfter({ data, msg, code });
            if (flag) {
                if (code == 200) {
                    if (data) {
                        this.dataList = [...this.dataList, ...data];
                        if (this.listExt.pageSize == data.length) {
                            this.listExt.page++;
                        }
                    }
                    if (!data || (data && data.length != this.listExt.pageSize)) {
                        this.finished = true;
                    }
                }
            }
        });
    }
    listWithCountAfter(data) {
        return true;
    }
    listWithCount(option) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.loading) {
                return;
            }
            if (this.finished) {
                return;
            }
            option = option ? option : this.whereList();
            this.loading = true;
            const { data, code, msg } = yield this.model.listWithCount(option, this.listExt);
            this.loading = false;
            const flag = this.listWithCountAfter({ data, msg, code });
            if (flag) {
                if (data.list) {
                    this.dataList = [...this.dataList, ...data.list];
                    if (this.listExt.pageSize == data.list.length) {
                        this.listExt.page++;
                    }
                }
                if (!data || (data.list && data.list.length != this.listExt.pageSize)) {
                    this.finished = true;
                }
            }
        });
    }
    loadInfo(title = "加载中...") {
        uni.showLoading({
            title: title,
        });
        setTimeout(() => {
            uni.hideLoading();
        }, 3000);
    }
    submit(id = 'id') {
        return __awaiter(this, void 0, void 0, function* () {
            let res;
            id = this.data[id];
            if (!id) {
                if (this.dataCreate().length == 0) {
                    uni.showToast({
                        title: "d请求参数错误"
                    });
                    return;
                }
                res = yield this.create(this.dataCreate());
            }
            else {
                if (this.dataUpdate().length == 0) {
                    uni.showToast({
                        title: "d请求参数错误"
                    });
                    return;
                }
                if (this.wherePrimaryKey().length == 0) {
                    uni.showToast({
                        title: "w请求参数错误"
                    });
                    return;
                }
                res = yield this.model.update(this.dataUpdate(), this.wherePrimaryKey());
            }
            uni.showToast({
                title: res.msg
            });
            if (res.code == 200) {
                (0, uni_fn_1.uniappJumpTo)(this.toListPath);
            }
        });
    }
}
exports.BaseService = BaseService;
