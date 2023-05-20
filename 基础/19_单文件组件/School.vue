<template>
    <div class="demo">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <Student></Student>
        <button @click="showName">点我提示学校名称</button>
    </div>
</template>

<script>
    import Student from './Student.vue';
    export default{
    name: "School",
    data() {
        return {
            name: "尚硅谷",
            address: "北京昌平"
        };
    },
    methods: {
        showName() {
            alert(this.name);
        }
    },
    components: { Student }
}
</script>

<style>
    .demo{
        background-color: orange;
    }
</style>