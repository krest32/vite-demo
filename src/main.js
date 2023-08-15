import {createApp} from "vue";
import App from "./App.vue";

// 导入router
import router from "./router";
// 导入 element plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 导入Vuex
import store from "./store/store";
// 引入全局樣式
import "./assets/css/global.css";
// 引入 axios
import axios from "./utils/axios";


const app = createApp(App);
// store.use(ElementPlus);
app.use(router).use(ElementPlus).use(store);
// 跨域设置，false忽略跨域cookies（Access-Control-Allow-Headers:*）
axios.defaults.withCredentials = false;
// 等待时间，ms
axios.defaults.timeout = 10000;

app.mount("#app");