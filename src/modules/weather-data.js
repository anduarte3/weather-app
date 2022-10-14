const weatherBox = document.createElement('div');
const cityPos = document.createElement('div');
const styleCol = document.createElement('div');
const vertical = document.createElement('div');
const upperBox = document.createElement('div');
const lowerBox = document.createElement('div');

const cityName = document.createElement('h2');
const weatherCondition = document.createElement('div');
const temp = document.createElement('div');
const feelsLike = document.createElement('p');
const humidity = document.createElement('p');
const wind = document.createElement('p');

const image = document.createElement('img');

weatherBox.setAttribute('id','weather-id')

weatherBox.classList.add('weather-box');
upperBox.classList.add('upper-box');
lowerBox.classList.add('lower-box');
styleCol.classList.add('style-col')
vertical.classList.add('vl')
temp.classList.add('temp-format');
weatherCondition.classList.add('weather-format');

function getObject(obj) {
    
    const weatherData = {
        name: obj['name'],
        weather: obj['weather'][0]['main'],
        icon: obj['weather'][0]['icon'], // description for weather logos
        temp: parseInt(obj['main']['temp']),
        feels_like: parseInt(obj['main']['feels_like']) ,
        humidity: obj['main']['humidity'],
        wind: parseInt(obj['wind']['speed']),
       
    }

    weatherIcon(weatherData['icon']);
    function weatherIcon(icon) {
        image.src = `http://openweathermap.org/img/wn/${icon}@4x.png`
    }

    cityName.textContent = weatherData['name'];
    temp.textContent = weatherData['temp'] + ' °C';
    feelsLike.textContent = 'Feels Like: ' + weatherData['feels_like'] + ' °C';
    humidity.textContent = 'Humidity: ' + weatherData['humidity'] + ' %';
    wind.textContent = 'Wind: ' + weatherData['wind'] + ' km/h';

    document.body.appendChild(weatherBox);

    weatherBox.appendChild(cityPos);
    weatherBox.appendChild(styleCol)

    styleCol.appendChild(upperBox);
    styleCol.appendChild(vertical);
    styleCol.appendChild(lowerBox);
    
    cityPos.appendChild(cityName);
    upperBox.appendChild(temp);
    upperBox.appendChild(weatherCondition);
    lowerBox.appendChild(feelsLike);
    lowerBox.appendChild(humidity);
    lowerBox.appendChild(wind);

    weatherCondition.appendChild(image)
}

function clearAll() {
    cityName.textContent = '';
    temp.textContent = '';
    feelsLike.textContent = '';
    humidity.textContent = '';
    wind.textContent = '';
}

export { getObject, clearAll }