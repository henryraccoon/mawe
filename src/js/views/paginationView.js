import { renderResults } from "../controller";
import { state } from "../model";

const buttonContainer = document.getElementById("pagination");
const prevButton = document.getElementById("prev-page");
const nextButton = document.getElementById("next-page");

// pagination

export const getSearchResultsPage = function (
  arrayOfStations,
  page = state.currentPage
) {
  state.currentPage = page;
  const start = (page - 1) * 4;
  const end = page * 4;

  return arrayOfStations.slice(start, end);
};

export const paginationButtons = function () {
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
          <span>Page ${state.currentPage + 1}</span>
        `;
  const markupPrev = `
          <span>Page ${state.currentPage - 1}</span>
        `;

  // page 1, and there are other pages
  if (state.currentPage === 1 && numPages > 1) {
    nextButton.dataset.goto = `${state.currentPage + 1}`;
    nextButton.insertAdjacentHTML("afterbegin", markupNext);
    nextButton.classList.remove("hidden");
  }

  // page 1, no other pages
  if (state.currentPage === 1 && numPages === 1) {
  }

  // last page
  if (numPages === state.currentPage && numPages > 1) {
    prevButton.dataset.goto = `${state.currentPage - 1}`;
    prevButton.insertAdjacentHTML("afterbegin", markupPrev);
    prevButton.classList.remove("hidden");
  }

  // other page
  if (state.currentPage < numPages && state.currentPage !== 1) {
    nextButton.dataset.goto = `${state.currentPage + 1}`;
    nextButton.insertAdjacentHTML("afterbegin", markupNext);
    nextButton.classList.remove("hidden");
    prevButton.dataset.goto = `${state.currentPage - 1}`;
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
