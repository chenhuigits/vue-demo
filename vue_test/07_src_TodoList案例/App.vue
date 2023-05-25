<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <MyHeader :todoList="todoList"/>
            <MyList :todoList="todoList" :todoCheck="todoCheck" :deleteTodo="deleteTodo"/>
            <MyFooter :todoList="todoList" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"></MyFooter> 
        </div>
        
    </div>
</template>

<script>
    import MyFooter from './components/MyFooter.vue';
    import MyHeader from './components/MyHeader.vue';
    import MyList from './components/MyList.vue';

    export default{
        name:'App',
        data(){
            return{
                todoList:[
                    {id:'001',name:'打代码',none:false},
                    {id:'002',name:'睡觉',none:false},
                    {id:'003',name:'吃饭',none:true}
                ]
            }
        },
        methods:{
            todoCheck(todoId){
                // 勾选
                this.todoList.forEach(todo=>{
                    if (todo.id===todoId){
                        todo.none = !todo.none;
                    }
                });
            },
            deleteTodo(todoId){
                // 删除
                this.todoList = this.todoList.filter(todo=>{
                    return todo.id!==todoId;
                });
            },
            checkAllTodo(value){
                // 全选或者全不选
                this.todoList.forEach(todo=>{
                    todo.none = value;
                });
            },
            clearAllTodo(){
              // 清除已完成
              this.todoList = this.todoList.filter(todo=>{
                    return !todo.none;
                });  
            }

        } ,
       
        components:{ MyHeader, MyList, MyFooter }
    }
</script>

<style >
/*base*/
    body {
		background: #fff;
	}
	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}
	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}
	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}
	.btn:focus {
		outline: none;
	}
	.todo-container {
		width: 600px;
		margin: 0 auto;
	}
	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>