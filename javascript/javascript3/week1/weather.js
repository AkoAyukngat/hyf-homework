//#1 WEATHER APP:

//#a Sign up for api key:(Done!)

//#b First call to the weather api:(Done!)

//#c Fetch weather data from a city:
const notification = document.querySelector("#notification");
const button = document.querySelector("#submit");
const inputValue = document.querySelector("#input-value");
const cityName = document.querySelector("#city");
const temperature = document.querySelector("#temp");
const icon = document.querySelector("#weather-icon");
const wind = document.querySelector("#wind-speed");
const cloud = document.querySelector("#cloudiness");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");
//const map = document.querySelector("#Map");

//Weather App Data
const weather = {};
weather.temperature = {
  unit: "celcius",
};

//App Const:
const KELVIN = 237;

//Checking if browser supports geolocation:
// if ("geolocation" in navigator) {
//   navigator.geolocation.getCurrentPosition(setPosition, showError);
// } else {
//   notification.style.display = "block";
//   notification.innerHTML = "Browser does not support geolocation";
// }
//Setting User's position:
// function setPosition(position) {
//   const longitude = position.coords.longitude;
//   const latitude = position.coords.latitude;
// }
// getWeather(longitude, latitude);

//Show message when there is an Error with geolocation:
function showError(error) {
  notification.style.display = "block";
  notification.innerHTML = `${error.message}`;
}

// Converting the Unix_timestamp:
function convertTimestamp(Unix_timestamp) {
  const date = new Date(Unix_timestamp * 1000);
  const hour = date.getHours();
  const minutes = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();
  return hour + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
}

//convert temperature to Fahrenheit/celcius:
function celciusToFahrenheit(temperature) {
  return (temperature * 9) / 5 + 32;
}
celciusToFahrenheit();
// temperature.addEventListener("click", function () {
//   if (weather.main.temp === undefined) return;
//   if (data.main.temp.unit == "celcius") {
//     let fahrenheit = celciusToFahrenheit(data.main.temp);
//     fahrenheit = Math.floor(fahrenheit);
//     temperature.innerHTML = `${fahrenheit}°F`;
//     data.main.temp.unit = "fahrenheit";
//   } else {
//     temperature.innerHTML = `${data.main.temp}°C`;
//     data.main.temp.unit = "celcius";
//   }
// });

button.addEventListener("click", function () {
  const apiKey = "c8187baebe8b094396a116e6d0f08ab3";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      cityName.innerHTML = data.name;
      temperature.innerHTML = `${celciusToFahrenheit(data.main.temp)}°C`;
      icon.innerHTML = `<img src='icons/${data.weather[0].icon}.png'/>`;
      wind.innerHTML = `wind ${data.wind.speed}m/s`;
      cloud.innerHTML = data.weather[0].description;
      sunrise.innerHTML = `Sunrise:${convertTimestamp(data.sys.sunrise)}`;
      sunset.innerHTML = `Sunset:${convertTimestamp(data.sys.sunset)}`;
      //   const mapValue = data["coord"]["lat"]["lon"];

      //   map.innerHTML = mapValue;
    });

  //.catch((err) => alert("Wrong city name"));
});
