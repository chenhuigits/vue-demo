<template>
    <ul class="todo-main">
        <MyItem v-for="todoObj in todoList" 
        :key="todoObj.id" 
        :todo="todoObj"
        :todoCheck="todoCheck"
        :deleteTodo="deleteTodo"
        />
    </ul>
</template>

<script>
    import MyItem from './MyItem.vue';
    export default{
        name:'MyList',
        /* todoList：从App组键接收过来的 */
        props:['todoList','todoCheck','deleteTodo'],
        components:{
            MyItem
        }
   
    }
</script>

<style scoped>
/*main*/
    .todo-main {
		margin-left: 0px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}

	.todo-empty {
		height: 40px;
		line-height: 40px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding-left: 5px;
		margin-top: 10px;
	}
</style>