import * as icons from "../helpers";
import { MAPZOOM } from "../config";
import { state } from "../model";

const transportContainer = document.getElementById("stations-list");

// rendering map

export const renderMap = function () {
  state.map = L.map("map").setView([state.latitude, state.longitude], MAPZOOM);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(state.map);
  const marker = L.marker([state.latitude, state.longitude]).addTo(state.map);
};

// add markers
export const addBusMarker = function (responseData) {
  L.marker([responseData.lat, responseData.lon], { icon: icons.redIcon })
    .addTo(state.map)
    .bindPopup(
      `${
        responseData.modes[0][0].toUpperCase() + responseData.modes[0].slice(1)
      }: ${responseData.commonName}. Distance: ${Math.trunc(
        responseData.distance
      )}m.`
    );
};

export const addOtherMarker = function (responseData) {
  const modes = [];
  responseData.modes?.forEach((mode) => modes.push(mode));
  L.marker([responseData.lat, responseData.lon], { icon: icons.goldIcon })
    .addTo(state.map)
    .bindPopup(
      `${modes.map(
        (mode) => mode[0].toUpperCase() + mode.slice(1).replace("-", " ")
      )}: ${responseData.commonName}. Distance: ${Math.trunc(
        responseData.distance
      )}m.`
    );
};

export const addJoinedMarker = function (responseData) {
  const modes = [];
  responseData.modes?.forEach((mode) => modes.push(mode));
  const modesFixed = modes.map(
    (mode) => mode[0].toUpperCase() + mode.slice(1).replace("-", " ")
  );
  L.marker([responseData.lat, responseData.lon], { icon: icons.greenIcon })
    .addTo(state.map)
    .bindPopup(
      `${modesFixed}: ${responseData.commonName}. Distance: ${Math.trunc(
        responseData.distance
      )}m.`
    );
};

//// move to popup

export const moveToPopup = function (event) {
  const stationElement = event.target.closest(".station");

  if (!stationElement) return;

  document
    .querySelectorAll(".station")
    .forEach((el) => el.classList.remove("current-preview"));
  stationElement.classList.add("current-preview");

  const currentStation = state.allStations.find(
    (station) => station.id === stationElement.dataset.id
  );
  console.log(currentStation);
  if (state.currentMarker) removeMarker();

  state.map.setView([currentStation.lat, currentStation.lon], 18);

  state.currentMarker = L.marker([currentStation.lat, currentStation.lon], {
    icon: icons.greyIcon,
  })
    .addTo(state.map)
    .bindPopup(
      `${currentStation.commonName}. Distance: ${Math.trunc(
        currentStation.distance
      )}m.`
    )
    .openPopup();
};

export const removeMarker = function () {
  state.map.removeLayer(state.currentMarker);
};

// event handlers

transportContainer.addEventListener("click", moveToPopup);
