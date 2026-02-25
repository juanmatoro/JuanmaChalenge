const ratingForm = document.getElementById("rating-form");
const ratingCard = document.querySelector(".card-rating");
const thanksCard = document.getElementById("thanks-card");
const selectedScoreEl = document.getElementById("selected-score");
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
