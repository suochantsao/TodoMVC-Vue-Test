const vm = new Vue({
    el:'#app',
    data:{
        newTodo: 'HelloWorld',
        todoLength: 0,
        editedTodo: null,
        allActive: true,
        allComplete: true,
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
                this.todoLength = this.activeTodos.length;
            }
            this.newTodo = '';

        },
        // 移除指定的todo
        removeTodo(todo){
            let currentIdx = this.activeTodos.indexOf(todo);
            this.activeTodos.splice(currentIdx,1);
            this.todoLength = this.activeTodos.length;
        },
        // 移除完成的指定todo
        removeDoneTodo(todo){
            let currentIdx = this.completeTodos.indexOf(todo);
            this.completeTodos.splice(currentIdx,1);
            this.todoLength = this.activeTodos.length;
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
        // 選擇指定的todo
        selectTodo(todo){
            console.log("MDFK NMSL");
            let currentIdx = this.activeTodos.indexOf(todo);
            this.completeTodos.push(todo);
            this.activeTodos.splice(currentIdx,1);
            this.todoLength = this.activeTodos.length;
        },
        // 取消選取指定的todo
        cancleTodo(todo){
            let currentIdx = this.completeTodos.indexOf(todo);
            this.activeTodos.push(todo);
            this.completeTodos.splice(currentIdx,1);
            this.todoLength = this.activeTodos.length;
        },
        // 刪除全部todo
        delSelTodo(){
            this.completeTodos = [];
        },
        // 選擇全部的todo
        selAllTodo(){
            let listLength = this.activeTodos.length;
            this.completeTodos = this.activeTodos.slice(0,listLength);
            this.activeTodos = [];
            this.todoLength = this.activeTodos.length;
        },
        // 顯示所有未完成的todo
        actRender(){
            this.allActive = true;
            this.allComplete = false;
        },
        // 顯示所有已完成的todo
        completeRender(){
            this.allActive = false;
            this.allComplete = true;
        },
        // 顯示所有todo
        allRender(){
            this.allActive = true;
            this.allComplete = true;
        }
    }

})