const yearSelect = document.getElementById("year-select");
const difficultySelect = document.getElementById("difficulty-select");
const yearEnterBtn = document.getElementById("year-enter-btn");
const difficultyEnterBtn = document.getElementById("difficulty-enter-btn");

function goToSelected(selectElement) {
  const value = selectElement.value;
  if (!value) {
    selectElement.focus();
    return;
  }
  window.location.href = value;
}

yearEnterBtn?.addEventListener("click", () => {
  goToSelected(yearSelect);
});

difficultyEnterBtn?.addEventListener("click", () => {
  goToSelected(difficultySelect);
});

yearSelect?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    goToSelected(yearSelect);
  }
});

difficultySelect?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    goToSelected(difficultySelect);
  }
});
