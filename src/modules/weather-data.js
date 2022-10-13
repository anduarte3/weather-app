const coolBox = document.createElement('div');
const cityName = document.createElement('h2');
const weatherCondition = document.createElement('p');
const temp = document.createElement('p');
const feelsLike = document.createElement('p');
const humidity = document.createElement('p');
const wind = document.createElement('p');

function getObject(obj) {

    const weatherData = {
        name: obj['name'],
        weather: obj['weather'][0]['main'],
        temp: parseInt(obj['main']['temp']) + ' °C',
        feels_like: parseInt(obj['main']['feels_like']) + ' °C',
        humidity: obj['main']['humidity'] + '%',
        wind: parseInt(obj['wind']['speed']) + ' km/h',
    }

    cityName.textContent = weatherData['name'];
    weatherCondition.textContent = weatherData['weather'];
    temp.textContent = weatherData['temp'];
    feelsLike.textContent = weatherData['feels_like'];
    humidity.textContent = weatherData['humidity'];
    wind.textContent = weatherData['wind'];

    document.body.appendChild(cityName);
    document.body.appendChild(weatherCondition);
    document.body.appendChild(temp);
    document.body.appendChild(feelsLike);
    document.body.appendChild(humidity);
    document.body.appendChild(wind);

}

function clearAll() {
    cityName.textContent = '';
    weatherCondition.textContent = '';
    temp.textContent = '';
    feelsLike.textContent = '';
    humidity.textContent = '';
    wind.textContent = '';
}

export { getObject, clearAll }