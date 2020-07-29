const body = document.querySelector("body");
const IMAGE_NUM = 5;

function callBg(num) {
    const image = new Image();
    image.src = `images/${num}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function callRandom() {
    let number = Math.random() * IMAGE_NUM;
    number = Math.ceil(number);
    return number;
}

function init() {
    const getNumber = callRandom();
    callBg(getNumber);
}
init();