function getObject(obj) {

    const coolBox = document.createElement('div');
    const cityName = document.createElement('h2');
    const weatherCondition = document.createElement('p');
    const temp = document.createElement('p');
    const feelsLike = document.createElement('p');
    const humidity = document.createElement('p');
    const wind = document.createElement('p');

    cityName.textContent = obj['name'];
    weatherCondition.textContent = obj['weather'][0]['main'];
    temp.textContent = parseInt(obj['main']['temp']) + ' °C';
    feelsLike.textContent = parseInt(obj['main']['feels_like']) + ' °C';
    humidity.textContent = obj['main']['humidity'] + '%';
    wind.textContent = parseInt(obj['wind']['speed']) + ' km/h';

    document.body.appendChild(cityName);
    document.body.appendChild(weatherCondition);
    document.body.appendChild(temp);
    document.body.appendChild(feelsLike);
    document.body.appendChild(humidity);
    document.body.appendChild(wind);

}

export default getObject