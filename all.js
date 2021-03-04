let todoList = new Vue({
    el:'#app',
    data:{
        newTodo: 'HelloWorld',
        editedTodo: null,
        todos: []
    },
    methods:{
        // 新增todo
        addTodo:function(){
            let todoItem = {
                "completed":false
            };

            if(this.newTodo.trim() === '' ){
                Swal.fire(`請先輸入待辦事項`);
            }
            else{
                todoItem.content = this.newTodo;
                this.todos.push(todoItem);
            }
            this.newTodo = '';

        },
        // 移除指定的todo
        removeTodo:function(item){
            let currentIdx = this.todos.indexOf(item);
            this.todos.splice(currentIdx,1);
        },
        // 修改todo的內容
        editTodo:function(item){
            
            console.log(item.content);
        }
    }

})