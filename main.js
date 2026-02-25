
const ratingForm = document.getElementById("rating-form");
const ratingCard = document.querySelector(".card-rating");
const thanksCard = document.getElementById("thanks-card");
const selectedScoreEl = document.getElementById("selected-score");

ratingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(ratingForm);
  const selectedScore = formData.get("score");
  if (!selectedScore) return;

  selectedScoreEl.textContent = selectedScore;
  ratingCard.classList.add("is-hidden");
  thanksCard.classList.remove("is-hidden");
});
