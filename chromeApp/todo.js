const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
function filterFn(toDo){
    return toDo.id ===1
}

let toDos =[];


function deleteToDo(event){
 const btn = event.target;
 const li = btn.parentNode;
 toDoList.removeChild(li);
 const cleanToDos = toDos.filter(function(toDo){
     return toDo.id !== parseInt(li.id)
 });
 toDos = cleanToDos
 saveToDos();
}

function saveTodos(){
    localStorage.setItem(TODOS_LS,toDos)
}

function paintTodo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click",deleteToDo)
    const span = document.createElement("span");
    const newId = toDos.length+1;
    span.innerText=text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;//li에 id 할당, 이런식으로 저장하는 이유는 local storage에도 todo를 저장해둬야 하기 때문
    toDoList.appendChild(li);
    const toDoObj = {
        text:text,
        id: newId
    }
    toDos.push(toDoObj);
    saveTodos()
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
       parsedToDos.forEach(function(toDo){
           console.log(toDo.text);
       });
    }
}

    function init(){
        loadToDos();
        toDoForm.addEventListener("submit", handleSubmit);
    }

    init();