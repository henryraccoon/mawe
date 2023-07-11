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
            <span class="station-name">${responseData.commonName}(${
    responseData.indicator
  })</span>
            <span class="station-mode">Mode: ${
              responseData.modes[0][0].toUpperCase() +
              responseData.modes[0].slice(1)
            }</span>
            <span class="station-buses">Buses:${buses} </span>
            <span class="station-towards">${
              responseData.additionalProperties[1]?.key
            }: ${responseData.additionalProperties[1]?.value}</span>
            
          </li>
        </ul>
          `;
  transportContainer.insertAdjacentHTML("afterbegin", markup);
};

export const displayOtherResults = function (responseData) {
  let lines = [];
  responseData.lines.forEach((line) => lines.push(line.name));

  const markup = `
        <ul>
          <li class="station" data-id="${responseData.id}">
            <span class="station-distance">${Math.trunc(
              responseData.distance
            )}m.</span>
            <span class="station-name">${responseData.commonName}</span>
            <span class="station-mode">Mode: ${
              responseData.modes[0][0].toUpperCase() +
              responseData.modes[0].slice(1).replace("-", " ")
            }</span>
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
  const modesFixed = modes.map(
    (mode) => mode.toUpperCase() + mode.slice(1).replace("-", " ")
  );
  const markup = `
        <ul>
          <li class="station" data-id="${responseData.id}">
            <span class="station-distance">${Math.trunc(
              responseData.distance
            )}m.</span>
            <span class="station-name">${responseData.commonName}</span>
            <span class="station-mode">Modes: ${modesFixed}</span>
            <span class="station-buses">Lines:${lines} </span>
          </li>
        </ul>
          `;
  transportContainer.insertAdjacentHTML("afterbegin", markup);
};
