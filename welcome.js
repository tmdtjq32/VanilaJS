const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    welcome = document.querySelector(".js-welcome");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    console.log(currentValue);
    paintWelcome(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintWelcome(text) {
    form.classList.remove(SHOWING_CN);
    welcome.classList.add(SHOWING_CN);
    welcome.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    }
    else {
        paintWelcome(currentUser);
    }
}

function init() {
    loadName();
}
init();