const vm = new Vue({
    el:'#app',
    data:{
        newTodo: 'HelloWorld',
        editedTodo: null,
        editContent: {},
        activeTodos: [],
        completeTodos: []
    },
    methods:{
        // 新增todo
        addTodo(){
            let todoItem = {
                "completed":false
            };
            let value    = this.newTodo.trim();

            if(value === '' ){
                Swal.fire(`請先輸入待辦事項`);
                return;
            }
            else{
                todoItem.content = value;
                this.activeTodos.push(todoItem);
            }
            this.newTodo = '';

        },
        // 移除指定的todo
        removeTodo(todo){
            let currentIdx = this.activeTodos.indexOf(todo);
            this.activeTodos.splice(currentIdx,1);
        },
        removeDoneTodo(todo){
            let currentIdx = this.completeTodos.indexOf(todo);
            this.completeTodos.splice(currentIdx,1);
        },
        // 修改todo的內容
        editTodo(todo){
            this.editContent = todo;
            this.editedTodo  = todo.content;
        },
        // 完成todo的修改
        doneTodo(todo){
            let value    = this.editedTodo.trim();

            if( value === ''){
                Swal.fire(`內容不能為空的`);
                return;
            }
            else{
                todo.content = this.editedTodo;
                this.editContent = {};
            }
        },
        selectTodo(todo){
            console.log("MDFK NMSL");
            let currentIdx = this.activeTodos.indexOf(todo);
            this.completeTodos.push(todo);
            this.activeTodos.splice(currentIdx,1);
        },
        cancleTodo(todo){
            let currentIdx = this.completeTodos.indexOf(todo);
            this.activeTodos.push(todo);
            this.completeTodos.splice(currentIdx,1);
        },
        delSelTodo(){
            this.completeTodos = [];
        },
        selAllTodo(){
            let listLength = this.activeTodos.length;
            this.completeTodos = this.activeTodos.slice(0,listLength);
            this.activeTodos = [];
        }
    }

})