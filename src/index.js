import './style.css';

import getObject from './modules/weather-data.js'

//write functions that hit the API

//take location, return weather data for that specific location

//json data from API and return to object only the data asked

async function getCoordinates(cityName) {
    const requestCoordinates = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=5e12a6c2d14545e9f0f90b5fe22260bd`;

    const request = new Request(requestCoordinates);

    const response = await fetch(request);
    const cityObject = await response.json();

    setUrl(cityObject[0]['lat'],cityObject[0]['lon'])
}
getCoordinates('Montreal')

async function setUrl(lat,lon) {
    const requestURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=5e12a6c2d14545e9f0f90b5fe22260bd`;

    const request = new Request(requestURL);

    const response = await fetch(request);
    const cityWeather = await response.json();

    getObject(cityWeather);
}
