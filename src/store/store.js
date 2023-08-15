//store.js:
import {createStore} from "vuex";
// 导入 element plus 组件
import {ElMessage} from "element-plus";

const store = createStore({
    state() {
        return {
            msg: "store msg default string",
        };
    },
    // 获取 state 的状态
    getters: {
        // 获取Msg
        getMsg(state) {
            return state.msg;
        },
    },
    //   执行的方法
    mutations: {
        errorMsgInfo(state, msg) {
            state.msg = msg;
            ElMessage.error(state.msg);
        },
        successMsgInfo(state, msg) {
            state.msg = msg;
            ElMessage.success(state.msg);
        },
    },
});

export default store;