<template>
    <div>
        <h2>{{ msg }}</h2>
        <School></School>
    </div>
</template>
<script>
    import School from './School.vue';
    export default{
        name:"App",
        data(){
            return{
                msg:"欢迎来到尚硅谷学习！"
            }
        },
        components:{
            School
        }
    }
</script>