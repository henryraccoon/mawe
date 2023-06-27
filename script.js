"use strict";
const postCodeCheckbox = document.getElementById("post-code");
const formInput = document.querySelector("#form-group-input");
const autoLocationCheckbox = document.querySelector(
  ".form-group-auto-location"
);
const searchButton = document.getElementById("submit-button");
const transportContainer = document.getElementById("stations-list");
const postCodeInput = document.getElementById("post-code-input");
const weatherContainer = document.getElementById("weather-alerts");
const adviceContainer = document.querySelector(".weather-advice");
const buttonContainer = document.getElementById("pagination");
const prevButton = document.getElementById("prev-page");
const nextButton = document.getElementById("next-page");
let checkboxLazyWalker = document.getElementById("lazy-walker");
let checkboxGoodWalker = document.getElementById("good-walker");
const API_KEY_WEATHER = "4385fe1353574335bc6142923230506";
let radius = 300; // metres
let mapZoom = 16;

const goldIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const greyIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// enter postcode check box
postCodeCheckbox.addEventListener("change", function () {
  postCodeInput.style.display = this.checked ? "block" : "none";
  searchButton.style.display = this.checked ? "block" : "none";
});

// getting geolocation
let latitude;
let longitude;
let map;
let allStations = [];
let currentMarker;
let currentPage = 1;
//51.4192772 -0.3246571

const getGeolocation = async function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation
      ? navigator.geolocation.getCurrentPosition(
          function (position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            resolve();
            console.log("auto:", latitude, longitude);
          },
          function (err) {
            alert("could not get your position. try using post code.");
            autoLocationCheckbox.style.display = "none";
            reject(`${err.message}`);
          }
        )
      : alert("could not get your position. try using post code.");
  });
};

formInput.addEventListener("submit", async function (e) {
  e.preventDefault();
  await getLocationByPostcode(postCodeInput.value);
  console.log("postcode:", latitude, longitude);
  if (!map) {
    renderMap();
    await renderWeather();
    await renderResults();
    postCodeInput.style.display = "none";
  } else {
    map.setView([latitude, longitude], mapZoom);
    const marker = L.marker([latitude, longitude]).addTo(map);
    await renderWeather();
    await renderResults();
    postCodeInput.value = "";
  }
});

const getLocationByPostcode = async function (postcode) {
  try {
    const response = await fetch(
      `https://api.postcodes.io/postcodes/${postcode}`
    );
    const data = await response.json();

    if (!response.ok) throw new Error(`${data.error}`);
    latitude = data.result.latitude;
    longitude = data.result.longitude;
  } catch (err) {
    alert(err);
  }
};

// rendering map

const renderMap = function () {
  map = L.map("map").setView([latitude, longitude], mapZoom);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  const marker = L.marker([latitude, longitude]).addTo(map);
};

const addBusMarker = function (responseData) {
  L.marker([responseData.lat, responseData.lon], { icon: redIcon })
    .addTo(map)
    .bindPopup(
      `${responseData.modes[0]}: ${
        responseData.commonName
      }. Distance: ${Math.trunc(responseData.distance)}m.`
    );
};

const addTrainTubeMarker = function (responseData) {
  const modes = [];
  responseData.modes?.forEach((mode) => modes.push(mode));
  L.marker([responseData.lat, responseData.lon], { icon: goldIcon })
    .addTo(map)
    .bindPopup(
      `${modes}: ${responseData.commonName}. Distance: ${Math.trunc(
        responseData.distance
      )}m.`
    );
};

const addJoinedMarker = function (responseData) {
  const modes = [];
  responseData.modes?.forEach((mode) => modes.push(mode));
  L.marker([responseData.lat, responseData.lon], { icon: greenIcon })
    .addTo(map)
    .bindPopup(
      `${modes}: ${responseData.commonName}. Distance: ${Math.trunc(
        responseData.distance
      )}m.`
    );
};

const displayBusResults = function (responseData) {
  let buses = [];
  responseData.lines.forEach((line) => buses.push(line.name));
  const markup = `
    <ul>
      <li class="station" data-id="${responseData.id}">
        <span class="station-distance">${Math.trunc(
          responseData.distance
        )}m.</span>
        <span class="station-name">${responseData.commonName}</span>
        <span class="station-mode">Mode:${responseData.modes[0]}</span>
        <span class="station-buses">Buses:${buses} </span>
        <span class="station-towards">${
          responseData.additionalProperties[1]?.key
        }: ${responseData.additionalProperties[1]?.value}</span>
        
      </li>
    </ul>
      `;
  transportContainer.insertAdjacentHTML("afterbegin", markup);
};

const displayTrainTubeResults = function (responseData) {
  let lines = [];
  responseData.lines.forEach((line) => lines.push(line.name));
  const markup = `
    <ul>
      <li class="station" data-id="${responseData.id}">
        <span class="station-distance">${Math.trunc(
          responseData.distance
        )}m.</span>
        <span class="station-name">${responseData.commonName}</span>
        <span class="station-mode">Mode:${responseData.modes[0]}</span>
        <span class="station-buses">Lines:${lines} </span>
      </li>
    </ul>
      `;
  transportContainer.insertAdjacentHTML("afterbegin", markup);
};

const displayJoinedResults = function (responseData) {
  let lines = [];
  let modes = [];
  responseData.modes?.forEach((mode) => modes.push(mode));
  responseData.lines.forEach((line) => lines.push(line.name));
  const markup = `
    <ul>
      <li class="station" data-id="${responseData.id}">
        <span class="station-distance">${Math.trunc(
          responseData.distance
        )}m.</span>
        <span class="station-name">${responseData.commonName}</span>
        <span class="station-mode">Mode:${modes}</span>
        <span class="station-buses">Lines:${lines} </span>
      </li>
    </ul>
      `;
  transportContainer.insertAdjacentHTML("afterbegin", markup);
};

const getSearchResultsPage = function (arrayOfStations, page = currentPage) {
  currentPage = page;
  const start = (page - 1) * 4;
  const end = page * 4;

  return arrayOfStations.slice(start, end);
};

// tfl api

const nearestStops = async function () {
  const tflStops = await fetch(
    `https://api.tfl.gov.uk/StopPoint/?lat=${latitude}&lon=${longitude}&stopTypes=NaptanPublicBusCoachTram,NaptanRailStation,NaptanFerryPort,NaptanMetroStation&radius=${radius}`
  );
  const tflData = await tflStops.json();

  const allStationsRaw = tflData.stopPoints;
  allStations = allStationsRaw.filter((station) => station.lines.length !== 0);
};

const renderResults = async function (page) {
  await nearestStops();
  transportContainer.innerHTML = "";
  getSearchResultsPage(allStations, page)
    .sort((a, b) => b.distance - a.distance)
    .forEach((point) => {
      if (point.modes.length === 1 && point.modes[0] === "bus") {
        addBusMarker(point);
        displayBusResults(point);
      } else if (point.modes.length === 1 && point.modes[0] === "tube") {
        addTrainTubeMarker(point);
        displayTrainTubeResults(point);
      } else if (
        point.modes.length === 1 &&
        point.modes[0] === "national-rail"
      ) {
        addTrainTubeMarker(point);
        displayTrainTubeResults(point);
      } else if (point.lines.length > 0) {
        addJoinedMarker(point);
        displayJoinedResults(point);
      }
    });

  paginationButtons();
};

const moveToPopup = function (event) {
  const stationElement = event.target.closest(".station");

  if (!stationElement) return;

  document
    .querySelectorAll(".station")
    .forEach((el) => el.classList.remove("current-preview"));
  stationElement.classList.add("current-preview");

  const currentStation = allStations.find(
    (station) => station.id === stationElement.dataset.id
  );
  if (currentMarker) removeMarker();

  map.setView([currentStation.lat, currentStation.lon], 18);

  currentMarker = L.marker([currentStation.lat, currentStation.lon], {
    icon: greyIcon,
  })
    .addTo(map)
    .bindPopup(
      `${currentStation.commonName}. Distance: ${Math.trunc(
        currentStation.distance
      )}m.`
    )
    .openPopup();
};

const removeMarker = function () {
  map.removeLayer(currentMarker);
};

transportContainer.addEventListener("click", moveToPopup);

checkboxLazyWalker.addEventListener("change", function () {
  if (this.checked) {
    if (checkboxGoodWalker.checked) {
      checkboxGoodWalker.checked = false;
    }
    radius = 200;
    mapZoom = 16;
    transportContainer.innerHTML = "";
    renderResults();
    paginationButtons();
    map.setView([latitude, longitude], mapZoom);
  }
});

checkboxGoodWalker.addEventListener("change", function () {
  if (this.checked) {
    if (checkboxLazyWalker.checked) checkboxLazyWalker.checked = false;
    radius = 800;
    mapZoom = 15;
    transportContainer.innerHTML = "";
    renderResults();
    paginationButtons();
    map.setView([latitude, longitude], mapZoom);
  }
});

const paginationButtons = function () {
  const numPages = Math.ceil(allStations.length / 4);
  nextButton.innerHTML = "";
  prevButton.innerHTML = "";
  if (!nextButton.classList.contains("hidden")) {
    nextButton.classList.add("hidden");
  }
  if (!prevButton.classList.contains("hidden")) {
    prevButton.classList.add("hidden");
  }
  const markupNext = `
      <span>Page ${currentPage + 1}</span>
    `;
  const markupPrev = `
      <span>Page ${currentPage - 1}</span>
    `;

  // page 1, and there are other pages
  if (currentPage === 1 && numPages > 1) {
    nextButton.dataset.goto = `${currentPage + 1}`;
    nextButton.insertAdjacentHTML("afterbegin", markupNext);
    nextButton.classList.remove("hidden");
  }

  // page 1, no other pages
  if (currentPage === 1 && numPages === 1) {
  }

  // last page
  if (numPages === currentPage && numPages > 1) {
    prevButton.dataset.goto = `${currentPage - 1}`;
    prevButton.insertAdjacentHTML("afterbegin", markupPrev);
    prevButton.classList.remove("hidden");
  }

  // other page
  if (currentPage < numPages && currentPage !== 1) {
    nextButton.dataset.goto = `${currentPage + 1}`;
    nextButton.insertAdjacentHTML("afterbegin", markupNext);
    nextButton.classList.remove("hidden");
    prevButton.dataset.goto = `${currentPage - 1}`;
    prevButton.insertAdjacentHTML("afterbegin", markupPrev);
    prevButton.classList.remove("hidden");
  }
};

buttonContainer.addEventListener("click", function (e) {
  const btn = e.target.closest(".btn");
  if (!btn) return;
  const goToPage = +btn.dataset.goto;
  renderResults(goToPage);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// weather

const renderWeather = async function () {
  const currentWeatherResults = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY_WEATHER}&q=${latitude},${longitude}`
  );
  const data = await currentWeatherResults.json();
  const currentWeather = data.current;
  const forecastWeather = data.forecast.forecastday[0].day;
  const { icon } = currentWeather.condition;

  // advice logic
  const adviceLogic =
    forecastWeather.daily_chance_of_rain > 40
      ? "Today might be raining. You should probably take your umbrella."
      : forecastWeather.mintemp_c < 10
      ? "Today is expected to be cool, you might want to take or wear warmer clothes"
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
  weatherContainer.insertAdjacentHTML("afterbegin", markup);
  adviceContainer.insertAdjacentHTML("afterbegin", adviceMarkup);
};

const init = async function () {
  try {
    await getGeolocation();
    renderMap();
    renderWeather();
    await renderResults();
  } catch (err) {
    console.error(err);
  }
};

init();
