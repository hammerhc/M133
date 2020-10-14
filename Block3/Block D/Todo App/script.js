var todoArray = [];
var nextIndex = todoArray.length;

function load() {
    document.querySelector("#buttonAdd").addEventListener("click", addTodo);
    if (localStorage.todoArray) {
        todoArray = JSON.parse(localStorage.getItem("todoArray"));
    } else {
        localStorage.setItem("todoArray", JSON.stringify(todoArray));
    }
    if (todoArray.length > 0) {
        addTodoList(todoArray);
    }
    nextIndex = todoArray.length;
}

function addTodo() {
    var todoText = document.querySelector("#inputTodo").value;
    var todoList = document.querySelector("#todoList");
    if (todoText.length > 0) {
        var id = "todoItem" + nextIndex;
        document.querySelector("#inputTodo").value = "";
        todoArray.push({id: id, name: todoText, checked: false});
        todoList.innerHTML += createTodo(id, todoText, false);
        localStorage.setItem("todoArray", JSON.stringify(todoArray));
        nextIndex = todoArray.length;
    }
}

function addTodoList(list) {
    for (var i = 0; i < list.length; i++) {
        todoList.innerHTML += createTodo(list[i].id, list[i].name, list[i].checked);
    }
}

function createTodo(id, text, checked) {
    console.log(id);
    if (checked) {
        return "<div class='todoItem'><input id=" + id +" class='todoCheckbox' onclick='checkedTodo(this)' checked=" + checked + " type='checkbox'><label for=" + id + ">" + text + "</label></div>";
    }
    else {
        return "<div class='todoItem'><input id=" + id +" class='todoCheckbox' onclick='checkedTodo(this)' type='checkbox'><label for=" + id + ">" + text + "</label></div>";
    }
}

function checkedTodo(event) {
    for (var i = 0; i < todoArray.length; i++) {
        if (todoArray[i].id == event.id) {
            todoArray[i].checked = event.checked;
        }
    }
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
}