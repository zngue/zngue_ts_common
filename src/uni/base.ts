import { DataModel } from "../data/data";
import { CommonList, ExtOptionData, Resonpse } from "../data/data_types";
import { OptionData } from "../data/types";
import { optValueType, optValue, optFn } from "../data/where_option";
import { uniappJumpTo } from "./uni_fn";


export type ModelCallBack<T = any> = (data: T) => void;
export class BaseService<T = any> {
    public toListPath: string = ""
    public dataList: T[] = [];
    public data: Partial<T> = {};
    public loading: boolean = false;
    public finished: boolean = false;
    public count: number = 0;
    public model: DataModel;
    public listExt: ExtOptionData = {
        page: 1,
        pageSize: 15,
        order: "",
        join: "",
    };
    dataUpdate(): OptionData<any>[] {
        return this.dataCreate()
    }
    dataCreate(): OptionData<any>[] {
        const data: OptionData[] = []
        return data
    }
    wherePrimaryKey(id: string = 'id'): OptionData[] {
        const optionData = this.data as any
        let data: OptionData[] = []
        if (optionData[id]) {
            data.push(optFn(id, optValue(optionData[id]), optValueType("int")),)
        }
        return data
    }
    whereList(): OptionData[] {
        const data: OptionData[] = []
        return data
    }
    public constructor(model: DataModel) {
        this.model = model;
    }
    public create(data: OptionData[]) {
        return this.model.create(data);
    }
    public updateAfter(data: Resonpse): boolean {

        return true
    }

    public async content(option: OptionData[], callback?: ModelCallBack) {
        const { data, msg, code } = await this.model.content<T>(option);
        if (!callback) {
            if (code == 200) {
                this.data = data;
            }
        } else {
            callback({ data, msg, code });
        }
    }
    public listAfter(data: Resonpse<T[]>): boolean {
        return true
    }
    public async list(option?: OptionData[]) {
        if (this.loading) {
            return;
        }
        if (this.finished) {
            return;
        }
        option = option ? option : this.whereList()
        this.loading = true;
        const { data, msg, code } = await this.model.list<T[]>(
            option,
            this.listExt
        );
        this.loading = false;
        const flag = this.listAfter({ data, msg, code })
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
    }
    public listWithCountAfter(data: Resonpse<CommonList<T[]>>) {
        return true
    }
    public async listWithCount(option: OptionData[]) {
        if (this.loading) {
            return;
        }
        if (this.finished) {
            return;
        }
        option = option ? option : this.whereList()
        this.loading = true;
        const { data, code, msg } = await this.model.listWithCount<T[]>(
            option,
            this.listExt
        );
        this.loading = false;
        const flag = this.listWithCountAfter({ data, msg, code })
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
    }
    public loadInfo(title: string = "加载中...") {
        uni.showLoading({
            title: title,
        });
        setTimeout(() => {
            uni.hideLoading();
        }, 3000);
    }
    async submit(id: string = 'id') {
        let res: Resonpse<any>
        id = (this.data as any)[id]
        if (!id) {
            if (this.dataCreate().length == 0) {
                uni.showToast({
                    title: "d请求参数错误"
                })
                return
            }
            res = await this.create(this.dataCreate())
        } else {
            if (this.dataUpdate().length == 0) {
                uni.showToast({
                    title: "d请求参数错误"
                })
                return
            }
            if (this.wherePrimaryKey().length == 0) {
                uni.showToast({
                    title: "w请求参数错误"
                })
                return
            }
            res = await this.model.update(this.dataUpdate(), this.wherePrimaryKey())
        }
        uni.showToast({
            title: res.msg
        })
        if (res.code == 200) {
            uniappJumpTo(this.toListPath)
        }
    }
}
