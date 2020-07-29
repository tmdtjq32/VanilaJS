const toDoForm = document.querySelector(".js-toDoForm"),
    toDoinput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");
const TO_DO_LIST = "To do list";
const TO_DO = [];

function deleteTodo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li); // html 리스트 요소 삭제
    const cleanlist = TO_DO.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });
    saveToDO(cleanlist);
}

function saveToDO(list) {
    localStorage.setItem(TO_DO_LIST, JSON.stringify(list));
    // JSON.stringify로 객체를 str타입으로 변환
}
function paintTodo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = TO_DO.length + 1;
    delBtn.innerText = "del";
    delBtn.addEventListener("click", deleteTodo);
    span.innerText = text;
    li.id = newId;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    const to_DoObj = {   // 객체들을 리스트의 원소로 저장
        value: text,
        id: newId
    };
    TO_DO.push(to_DoObj);

}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoinput.value;
    paintTodo(currentValue); // ul에 출력
    saveToDO(TO_DO); // localstorage에 저장
    toDoinput.value = "";
}

function loadToDos() {
    const loadToDo = localStorage.getItem(TO_DO_LIST); // 키값의 value 로드
    if (loadToDo !== null) {
        const changeToObj = JSON.parse(loadToDo);
        // JSON.parse로 str타입을 객체로 변환
        changeToObj.forEach(function (toDo) {
            paintTodo(toDo.value);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();