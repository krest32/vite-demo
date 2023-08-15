import request from "../utils/axios";

export default {
    //得到 查找列表 列表信息
    getTest() {
        return request({
            url: `/hello`,
            method: "get",
        });
    },
};
