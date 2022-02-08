//Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')


//Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
document.addEventListener('DOMContentLoaded', getTodos);



//Functions

function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
    //Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create li
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Add todo to local storage
    saveLocalTodos(todoInput.value);
    //Check mark button
    const completedButton = document.createElement('button'); 
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //TrashButton
    const TrashButton = document.createElement('button'); 
    TrashButton.innerHTML = '<i class="fas fa-trash"></i>';
    TrashButton.classList.add("trash-btn");
    todoDiv.appendChild(TrashButton);
    //append to list
    todoList.appendChild(todoDiv);
    //Clear todoinput
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    //Delete todo
    if (item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function(){
          todo.remove();  
        });
    }

    //Check mark
    if (item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}


function saveLocalTodos(todo){
    //Check storage
    let todos;
    if (localStorage.getItem('todo') === null){
            todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
    let todos;
    if (localStorage.getItem('todo') === null){
        todos = [];
    }
    else{
    todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(function(todo){

            //Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create li
    const newTodo = document.createElement('li')
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check mark button
    const completedButton = document.createElement('button'); 
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //TrashButton
    const TrashButton = document.createElement('button'); 
    TrashButton.innerHTML = '<i class="fas fa-trash"></i>';
    TrashButton.classList.add("trash-btn");
    todoDiv.appendChild(TrashButton);
    //append to list
    todoList.appendChild(todoDiv);

    });
}