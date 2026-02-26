const ratingForm = document.querySelector("#rating-form");
const ratingCard = document.querySelector(".card-rating");
const thanksCard = document.querySelector(".card-thanks");
const selectedScoreEl = document.querySelector("#selected-score");
const ratingButtons = document.querySelectorAll(".rating-btn[data-score]");

let selectedScore = "";

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedScore = button.dataset.score || "";

    ratingButtons.forEach((item) => {
      const isSelected = item === button;
      item.classList.toggle("is-selected", isSelected);
      item.setAttribute("aria-pressed", String(isSelected));
    });
  });
});

ratingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!selectedScore) return;

  selectedScoreEl.textContent = selectedScore;
  ratingCard.classList.add("is-hidden");
  thanksCard.classList.remove("is-hidden");
});
