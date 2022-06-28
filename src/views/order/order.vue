<template>
  <div>
    <h1>订单页面</h1>
    <p><router-link to="/about">Go to About</router-link></p>
    <p><router-link to="/404">Go to 404</router-link></p>
    <button @click="clickbutton()">跳转按钮</button>
  </div>
</template>

<script>
export default {
    methods:{
        clickbutton(){
            this.$router.push('/home')
        }
    }
};
</script>

<style></style>
