<template>
    <div  class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="keyWord" @keyup.enter="add">
    </div>
</template>

<script>
    export default{
        name:'MyHeader',
        data(){
            return{
                keyWord:''
            }
        },
        props:['todoList'],
        methods:{
            add(){            
                if (!this.keyWord.trim()){
                    return alert('输入不能为空！');
                }
                const tmpTodo={id:this.getUuid(),name:this.keyWord,none:false}
                // console.log(this.getUuid());
                this.todoList.unshift(tmpTodo);
                this.keyWord = '';
            },
            /* 获取uuid的方法 */
            getUuid(){
                if (typeof crypto === 'object') {
                    if (typeof crypto.randomUUID === 'function') {
                    return crypto.randomUUID();
                    }
                    if (typeof crypto.getRandomValues === 'function' && typeof Uint8Array === 'function') {
                    const callback = (c) => {
                        const num = Number(c);
                        return (num ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (num / 4)))).toString(16);
                    };
                    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, callback);
                    }
                }
                let timestamp = new Date().getTime();
                let perforNow = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0;
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                    let random = Math.random() * 16;
                    if (timestamp > 0) {
                    random = (timestamp + random) % 16 | 0;
                    timestamp = Math.floor(timestamp / 16);
                    } else {
                    random = (perforNow + random) % 16 | 0;
                    perforNow = Math.floor(perforNow / 16);
                    }
                    return (c === 'x' ? random : (random & 0x3) | 0x8).toString(16);
                });
            }
        }
        
    }
</script>

<style>
    /*header*/
	.todo-header input {
		width: 560px;
		height: 28px;
		font-size: 14px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 4px 7px;
	}

	.todo-header input:focus {
		outline: none;
		border-color: rgba(82, 168, 236, 0.8);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
	}
</style>