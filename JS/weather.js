const API_KEY = 'e1567dc23e49b6fd41ce3884370799d0';

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].description} / ${data.main.temp};`
    });
}
function onGeoError() {
  alert("I can't find you. NO weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
