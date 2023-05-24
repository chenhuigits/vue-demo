<template>
    <div>
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生年龄{{ age }}</h2>
        <input @click="test" type="text" v-fbind="x"/>
    </div>

</template>

<script>
    export default{
        name:'Student',
        data(){
            return{
                name:'张三',
                age:18

            }
        },
        methods:{
            test(){
                this.hello();
                console.log(this)
            }
        }
    }
</script>

<style>

</style>