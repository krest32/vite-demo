<template>
<div>
    <p>自定义组件:{{ msg }}, 对象ID:{{ obj.id }}, 对象姓名:{{ obj.name }}</p>
</div>
</template>

<script>
export default {
    name: "Demo",
    props: {
        msg: String,
        obj: {
            id: Number,
            name: String,
        },
    },
};
</script>

<style></style>
