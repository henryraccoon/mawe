import * as model from "./model";
import * as mapView from "./views/mapView";
import * as tflResultView from "./views/tflResultsView";
import * as weatherView from "./views/weatherView";
import * as paginationView from "./views/paginationView";

const postCodeCheckbox = document.getElementById("post-code");
const formInput = document.querySelector("#form-group-input");
const searchButton = document.getElementById("submit-button");
const postCodeInput = document.getElementById("post-code-input");
const transportContainer = document.getElementById("stations-list");
const mobile_btn = document.querySelector(".hamburger");
const mediaQuery = window.matchMedia("(max-width: 420px");
const sidebar = document.querySelector("#sidebar");
const results = document.querySelector(".tfl-results");

let checkboxLazyWalker = document.getElementById("lazy-walker");
let checkboxGoodWalker = document.getElementById("good-walker");

export const renderResults = async function (page) {
  await model.nearestStops();
  transportContainer.innerHTML = "";
  paginationView
    .getSearchResultsPage(model.state.allStations, page)
    .sort((a, b) => b.distance - a.distance)
    .forEach((point) => {
      if (point.modes.length === 1 && point.modes[0] === "bus") {
        mapView.addBusMarker(point);
        tflResultView.displayBusResults(point);
      } else if (point.modes.length === 1 && point.modes[0] === "tube") {
        mapView.addOtherMarker(point);
        tflResultView.displayOtherResults(point);
      } else if (point.modes.length === 1 && point.modes[0] === "river-bus") {
        mapView.addOtherMarker(point);
        tflResultView.displayOtherResults(point);
      } else if (
        point.modes.length === 1 &&
        point.modes[0] === "national-rail"
      ) {
        mapView.addOtherMarker(point);
        tflResultView.displayOtherResults(point);
      } else if (point.lines.length > 0) {
        mapView.addJoinedMarker(point);
        tflResultView.displayJoinedResults(point);
      }
    });

  paginationView.paginationButtons();
};

/// weather
const renderWeather = async function () {
  try {
    const data = await model.fetchWeatherData();
    const currentWeather = data.current;
    const forecastWeather = data.forecast.forecastday[0].day;

    // Call the view function to render the weather data
    weatherView.renderWeatherView(currentWeather, forecastWeather);
  } catch (error) {
    console.error(error);
  }
};

// event handlers

// enter postcode check box
postCodeCheckbox.addEventListener("change", function () {
  postCodeInput.style.display = this.checked ? "block" : "none";
  searchButton.style.display = this.checked ? "block" : "none";
});

formInput.addEventListener("submit", async function (e) {
  e.preventDefault();
  await model.getLocationByPostcode(postCodeInput.value);
  if (!model.state.map) {
    renderMap();
    await renderWeather();
    await renderResults();
    postCodeInput.style.display = "none";
  } else {
    model.state.map.setView(
      [model.state.latitude, model.state.longitude],
      model.state.mapZoom
    );
    const marker = L.marker([
      model.state.latitude,
      model.state.longitude,
    ]).addTo(model.state.map);
    await renderWeather();
    await renderResults();
    postCodeInput.value = "";
  }
});

checkboxLazyWalker.addEventListener("change", function () {
  if (this.checked) {
    if (checkboxGoodWalker.checked) {
      checkboxGoodWalker.checked = false;
    }
    model.state.radius = 200;
    model.state.mapZoom = 16;
    transportContainer.innerHTML = "";
    renderResults();
    paginationView.paginationButtons();
    model.state.map.setView(
      [model.state.latitude, model.state.longitude],
      model.state.mapZoom
    );
  }
});

checkboxGoodWalker.addEventListener("change", function () {
  if (this.checked) {
    if (checkboxLazyWalker.checked) checkboxLazyWalker.checked = false;
    model.state.radius = 800;
    model.state.mapZoom = 15;
    transportContainer.innerHTML = "";
    renderResults();
    paginationView.paginationButtons();
    model.state.map.setView(
      [model.state.latitude, model.state.longitude],
      model.state.mapZoom
    );
  }
});

mobile_btn.addEventListener("click", function () {
  mobile_btn.classList.toggle("is-active");
  if (mediaQuery.matches) {
    if (mobile_btn.classList.contains("is-active")) {
      results.style.display = "none";
      sidebar.style.display = "flex";
    } else {
      results.style.display = "flex";
      sidebar.style.display = "none";
    }
  }
});

const init = async function () {
  try {
    await model.getGeolocation();
    mapView.renderMap();
    renderWeather();
    await renderResults();
  } catch (err) {
    console.error(err);
  }
};

init();
