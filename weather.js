const WEATHER = document.querySelector(".js-weather");
const API_KEY = 'dbace3502de3116d672ff826af411690';
const LOCATE = 'location';

function getWeather(lat, lon) { // api 활용
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function (response) {
        return response.json();
    }).then(function (json) {
        const temperature = json.main.temp;
        const place = json.name;
        const weather = json.weather[0].main;
        WEATHER.innerText = `${place}, ${temperature}°C, ${weather}`;
    });
}

function saveLocation(locate) {
    localStorage.setItem(LOCATE, JSON.stringify(locate));
}

function handleGeoSucess(pos) {
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    const coords = {
        latitude: latitude,
        longitude: longitude
    };
    saveLocation(coords);
    getWeather(latitude, longitude);
}

function handleGeoFail() {
    console.log("can't access geo location");
}

function askForCords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucess, handleGeoFail);
}

function loadCords() {
    const loadedCords = localStorage.getItem(LOCATE);
    if (loadedCords === null) {
        askForCords();
    }
    else {
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCords();
}
init();