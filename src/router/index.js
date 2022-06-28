//  vue3 router 路由
import { createRouter, createWebHistory } from "vue-router";

// 导入路由组件
import About from "../views/about.vue";
import Home from "../views/home.vue";
import Welcome from "../views/welcome.vue";
import Error from "../views/404.vue";
import Order from "../views/order/order.vue";

// 创建路由对象
const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  // 注册路由
  routes: [
    {
      path: "/",
      id: 0,
      name: "index",
      redirect: "/home",
      hidden: true,
    },
    // 嵌套路由
    {
      path: "/home",
      id: 1,
      name: "home",
      redirect: "/welcome",
      component: Home,
      children: [
        {
          path: "/welcome",
          id: 0,
          name: "welcome",
          hidden: false,
          component: Welcome,
        },
        {
          path: "/about",
          id: 1,
          name: "about",
          component: About,
        },
        // 测试路由跳转
        {
          path: "/order",
          id: 2,
          name: "order",
          component: Order,
        },
        {
          path: "/order/:id",
          id: 3,
          name: "orde_id",
          component: Order,
          hidden: true,
        },
      ],
    },

    // 错误页面设置
    {
      path: "/404",
      id: 2,
      name: "error",
      component: Error,
      hidden: true,
    },
    // 没有定义的路由跳转到 404
    {
      path: "/:pathMatch(.*)",
      id: 3,
      name: "all_error",
      //访问主页的时候 重定向到index页面
      redirect: "/404",
      hidden: true,
    },
  ],
});

export default router;
