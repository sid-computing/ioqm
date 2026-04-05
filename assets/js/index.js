document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('paper-form');
  const yearSelect = document.getElementById('paper-year');
  const levelSelect = document.getElementById('paper-level');
  const startBtn = document.getElementById('start-btn');

  // Mutual Exclusivity Logic [4]
  yearSelect.addEventListener('change', () => {
    if (yearSelect.value) levelSelect.value = "";
  });

  levelSelect.addEventListener('change', () => {
    if (levelSelect.value) yearSelect.value = "";
  });

  // Ripple Effect Implementation [3]
  function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");
    const ripple = button.getElementsByClassName("ripple");
    if (ripple) ripple.remove();
    button.appendChild(circle);
  }

  startBtn.addEventListener('click', createRipple);

  // Form Submission & Redirection [5, 6]
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (yearSelect.value) {
      celebrate();
      setTimeout(() => window.location.href = `year.html?value=${yearSelect.value}`, 800);
    } else if (levelSelect.value) {
      celebrate();
      setTimeout(() => window.location.href = `difficulty.html?value=${levelSelect.value}`, 800);
    } else {
      // Error Feedback
      form.parentElement.classList.add('shake');
      setTimeout(() => form.parentElement.classList.remove('shake'), 400);
    }
  });

  // Fun Success Feedback
  function celebrate() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3c8ddc', '#ffffff', '#ffd700']
    });
  }

  // Handle "Enter" Key Globally on Form [6]
  form.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      startBtn.click();
    }
  });
});
