
<template>
    <div v-show="todoNumObj.totalNum">
        <label>
            <input type="checkbox" v-model="isChecked"/>
        </label>
        <span>
            <span>已完成{{todoNumObj.checkedNum}}</span>/全部{{ todoNumObj.totalNum }}
		</span>
		<button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
        
    </div>
    
</template>

<script>
    export default{
        name:'MyFooter',
        props:['todoList','clearAllTodo','checkAllTodo'],
        computed:{
           todoNumObj(){
            var checkedNum = 0;
            this.todoList.forEach(element => {
            
                if (element.none){
                    checkedNum++;
                }
            });
            
            return {checkedNum:checkedNum,totalNum:this.todoList.length};
           },
           isChecked:{
                get(){
                    var a = this.todoNumObj.checkedNum;
                    var b = this.todoNumObj.totalNum;
                    if (a===b & a!==0){
                        return true;
                    }else{
                        return false;
                    }
                },
                set(value){
                    console.log(value)
                    this.checkAllTodo(value);
                }
                
            } 
        },
        methods:{
            clearAll(){
                /* 清除已完成 */
                this.clearAllTodo();
            },
            /* checkAll(e){
                // 全选或者取消
                this.checkAllTodo(e.target.checked)
            } */
        }
    }
</script>

<style>
</style>



