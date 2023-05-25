<template>
    <div>
        <li>
            <label>
                <input type="checkbox" :checked="todo.none" @change="handleCheck(todo.id)"/>
                <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
                <!-- <input type="checkbox" v-model="todo.done"/> -->
                <span>{{ todo.name }}</span>
            </label>
            <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
	    </li>
    </div>
</template>

<script>
    export default{
        name:'MyItem',
        props:['todo','todoCheck','deleteTodo'],
        methods:{
            handleCheck(value){
                this.todoCheck(value);
            },
            handleDelete(value){
                if (confirm('确定删除码？')){
                    this.deleteTodo(value);
                } 
            }
        }
    }
</script>

<style scoped>
    li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover{
        /* 鼠标聚焦现实背景色 */
		background-color: #ddd;
	}
	
	li:hover button{
        /* 鼠标聚焦button显示 */
		display: block;
	}
</style>