const weatherContainer = document.getElementById("weather-alerts");
const adviceContainer = document.querySelector(".weather-advice");

/// rendering weather

export const renderWeatherView = function (currentWeather, forecastWeather) {
  const { icon } = currentWeather.condition;

  // Advice logic
  const adviceLogic =
    forecastWeather.daily_chance_of_rain > 40
      ? "Today might be raining. You should probably take your umbrella."
      : forecastWeather.mintemp_c < 10
      ? "Today is expected to be cool. You might want to take or wear warmer clothes."
      : "Enjoy good weather today!";

  const adviceMarkup = `<h4>${adviceLogic}</h4>`;

  const markup = `
        <div id="weather-alerts">
          <div class="current-weather">
            <img src="${icon}" alt="Weather Icon" />
            <div class="weather-details">
              <div class="weather-field">
                <span class="field-label">Temperature:</span>
                <span class="field-value">${currentWeather.temp_c}C</span>
              </div>
              <div class="weather-field">
                <span class="field-label">Feels Like:</span>
                <span class="field-value">${currentWeather.feelslike_c}</span>
              </div>
              <div class="weather-field">
                <span class="field-label">Wind:</span>
                <span class="field-value">${currentWeather.wind_kph} km/h</span>
              </div>
              <div class="weather-field">
                <span class="field-label">Humidity:</span>
                <span class="field-value">${currentWeather.humidity}%</span>
              </div>
            </div>
          </div>
          <div class="expected-today">
            <h3>Expected Today:</h3>
            <div class="weather-field">
              <span class="field-label">Min Temperature:</span>
              <span class="field-value">${forecastWeather.mintemp_c}°C</span>
            </div>
            <div class="weather-field">
              <span class="field-label">Max Temperature:</span>
              <span class="field-value">${forecastWeather.maxtemp_c}°C</span>
            </div>
            <div class="weather-field">
              <span class="field-label">Chance of Rain:</span>
              <span class="field-value">${forecastWeather.daily_chance_of_rain}%</span>
            </div>
          </div>
        </div>
      `;

  // Update the weather container with the rendered markup
  weatherContainer.innerHTML = markup;
  adviceContainer.innerHTML = adviceMarkup;
};
