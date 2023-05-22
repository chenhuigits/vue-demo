<template>
    <div>
        <h1 v-text="msg" id="h1title" ref="title"></h1>
        <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
        <School ref="sch"></School>
    </div>
    
</template>

<script>
import School from './componets/School.vue';
    export default{
    name: "App",
    data() {
        return {
            msg: "欢迎学习vue"
        };
    },
    methods: {
        showDOM() {
            // console.log(document.getElementById('h1title'));
            console.log(this.$refs.title);
            console.log(this.$refs.sch);
            console.log(this.$refs.btn);
        }
    },
    components: { School }
}
</script>
<style>

</style>

