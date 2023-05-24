<template>
    <div>
        <h2 @click="showName">学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>

</template>

<script>
    export default{
        name:'School',
        data(){
            return{
                name:'尚硅谷',
                address:'北京',
                x:666// 主键属性和混合主键属性相同的情况
            }
        },
        methods:{
            /* showName(){
                alert('@School',this.name);
            } */
        }
    }
</script>

<style>

</style>