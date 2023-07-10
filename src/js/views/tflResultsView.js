const transportContainer = document.getElementById("stations-list");

/// displaying results

export const displayBusResults = function (responseData) {
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

export const displayTrainTubeResults = function (responseData) {
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

export const displayJoinedResults = function (responseData) {
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
