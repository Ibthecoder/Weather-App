const apiKey = "bd32aa3cdcd05904b1d7f0fc59b936f5"; // Your API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (city === "") {
    alert("Please enter a city name!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found ❌");
    }

    const data = await response.json();

    // Weather icon from OpenWeatherMap
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    document.getElementById("icon").src = iconUrl;
    document.getElementById(
      "cityName"
    ).innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById(
      "temperature"
    ).innerText = `🌡 Temperature: ${data.main.temp}°C`;
    document.getElementById(
      "description"
    ).innerText = `☁ Weather: ${data.weather[0].description}`;
    document.getElementById(
      "humidity"
    ).innerText = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById(
      "wind"
    ).innerText = `🌬 Wind Speed: ${data.wind.speed} m/s`;
  } catch (error) {
    alert(error.message);
  }
}

