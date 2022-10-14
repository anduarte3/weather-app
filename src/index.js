import './style.css';
import { getObject, clearAll } from './modules/weather-data.js'

const form = document.getElementById('weather-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearAll();
    const inputCity = document.getElementById('city').value;
    getLocation(inputCity);
});

//take city name, get object data
async function getLocation (cityName) {
    const requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&limit=5&appid=5e12a6c2d14545e9f0f90b5fe22260bd`;

    const request = new Request(requestURL);

    const response = await fetch(request);
    const cityWeather = await response.json();

    getObject(cityWeather);
}