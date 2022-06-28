import request from "../utils/axios";
export default {
  //得到VedioSort列表信息
  getTest() {
    return request({
      url: `/hello`,
      method: "get",
    });
  },
};
