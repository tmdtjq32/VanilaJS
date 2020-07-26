const clockcontainer = document.querySelector(".js-clock");
const clocktitle = clockcontainer.querySelector("h1");

function getTime() {
    let date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    clocktitle.innerText =
        `${hours < 10 ? `0${hours}` : hours
        }:${minute < 10 ? `0${minute}` : minute
        }:${seconds < 10 ? `0${seconds}` : seconds}`;
}


function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();