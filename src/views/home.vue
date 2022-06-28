<template>
<!-- 整体页面布局 -->
<el-container class="home-contianer">
    <!-- 头部页面布局 -->
    <el-header>
        <h3>页面头部区域</h3>
        <!-- 页面中加入组件元素 -->
        <Demo :msg="msg" :obj="user"></Demo>
    </el-header>

    <!-- 内容区域 -->
    <el-container>
        <el-aside>
            <h1 align="center">菜单栏</h1>
            <!-- 迭代循环 routes ， 
             unique-opened 仅打开一个列表，
              :collapse-transition="iscollapse"
             route与 :index 实现 route 跳转的功能-->
            <el-menu active-text-color="#ffd04b" :unique-opened="true" :router="true" @open="handleOpen" @close="handleClose">
                <!-- 一级菜单列表 -->
                <el-sub-menu v-for="item in router" :key="item.path" :index="item.path + ''">
                    <!-- 显示节点的名称，此处可以增加图标 -->
                    <template #title>
                        <span>{{ item.name }}</span>
                    </template>
                    <!-- 二级菜单列表-->
                    <el-menu-item v-for="subItem in item.children" :key="subItem.id" :index="subItem.path + ''">
                        <template #title>
                            <span>{{ subItem.name }}</span></template>
                    </el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-aside>
        <!-- 进入home页面中，然后在main区域：展示welcome页面 -->
        <el-main>
            <!-- 主内容区域 -->
            <h1>内容区域</h1>
            <button @click="demoApi">访问请求:{{ response.msg }}</button>
            <el-button type="success" @click="clickbutton()">跳转 order</el-button>
            <router-view></router-view>
        </el-main>
    </el-container>
</el-container>
</template>

<script>
// 导入组件
import Demo from "../components/demo.vue";
import demoApi from "../api/demo";

export default {
    // 使用组件
    components: {
        Demo,
    },

    data() {
        return {
            // vuex 获取 store 中的 count
            msg: this.$store.state.msg,
            user: {
                id: 1,
                name: "杜鑫",
            },
            response: {},
        };
    },
    // 获取 routes 对象
    computed: {
        router() {
            // 过滤掉没有子列表的routes
            this.$router.options.routes = this.$router.options.routes.filter(item => item.children)
            return this.$router.options.routes
        },
    },
    methods: {
        demoApi() {
            demoApi.getTest()
                // 成功
                .then((Response) => {
                    this.response = Response;
                    // 通过 Store 传递变量
                    this.$store.commit("successMsgInfo", this.response.msg);
                    this.msg = this.$store.state.msg;
                }).catch((error) => {
                    // 失败
                    this.$store.commit("errorMsgInfo", msg);
                })

        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },

        clickbutton() {
            this.$router.push({
                name: "orde_id",
                params: {
                    id: "123",
                },
            });
        },

        toWeb(path) {
            console.log(path);
            this.$router.push({
                path,
            });
        },
    },
};
</script>

<style lang="less" scoped>
.home-contianer {
    height: 100%;
}

.el-aside {
    background-color: #8c9aca;
    width: 20%;
    align-items: center;
}

.el-header {
    background-color: #6d7a83;
    display: flex;
    /* 文字居于两侧 */
    justify-content: space-between;
    padding-left: 0%;
    align-items: center;
    color: #ffff;
    font-size: 20px;
}

.el-main {
    background-color: #eaedf1;
}

.el-button {
    margin: 5px;
}
</style>
