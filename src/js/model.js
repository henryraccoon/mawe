import { RADIUS, MAPZOOM, API_KEY_WEATHER } from "./config";

const autoLocationCheckbox = document.querySelector(
  ".form-group-auto-location"
);

// getting geolocation
export const state = {
  latitude: 51.4192772,
  longitude: -0.3246571,
  map,
  allStations: [],
  currentMarker: "",
  currentPage: 1,
  radius: RADIUS,
  mapZoom: MAPZOOM,
};
//51.4192772 -0.3246571

export const getGeolocation = async function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation
      ? navigator.geolocation.getCurrentPosition(
          function (position) {
            state.latitude = position.coords.latitude;
            state.longitude = position.coords.longitude;
            resolve();
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

/// getting location by postcode
export const getLocationByPostcode = async function (postcode) {
  try {
    const response = await fetch(
      `https://api.postcodes.io/postcodes/${postcode}`
    );
    const data = await response.json();

    if (!response.ok) throw new Error(`${data.error}`);
    state.latitude = data.result.latitude;
    state.longitude = data.result.longitude;
  } catch (err) {
    alert(err);
  }
};

/// tfl api

export const nearestStops = async function () {
  const tflStops = await fetch(
    `https://api.tfl.gov.uk/StopPoint/?lat=${state.latitude}&lon=${state.longitude}&stopTypes=NaptanPublicBusCoachTram,NaptanRailStation,NaptanFerryPort,NaptanMetroStation&radius=${state.radius}`
  );
  const tflData = await tflStops.json();

  const allStationsRaw = tflData.stopPoints;
  state.allStations = allStationsRaw.filter(
    (station) => station.lines.length !== 0
  );
};

/// weather api

export const fetchWeatherData = async function () {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY_WEATHER}&q=${state.latitude},${state.longitude}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch weather data");
  }
};
