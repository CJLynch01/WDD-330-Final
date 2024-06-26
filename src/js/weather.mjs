const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.17&lon=-111.98&appid=d8a9e71401b6b1b5681eae6b4172a2d7&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
                //console.log(data)
                displayResults(data);
        } else {
            throw Error(await response.text());
        }
    }   catch (error) {
            console.log(error);
    }
    
}

export function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    
    if (data.weather && data.weather.length > 0) {
        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        const desc = data.weather[0].description;
        weatherIcon.setAttribute('src', iconsrc );
        weatherIcon.setAttribute('alt', `Weather is ${data.weather.description}`)
        captionDesc.textContent = `${desc}`;
    } else {
        console.error("Weather data not available.");
    }
}

apiFetch();