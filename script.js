// Theme toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Typing effect
const phrases = ["Web Developer", "Designer", "Tech Enthusiast"];
const typedText = document.getElementById("typed-text");
let i = 0,
  j = 0,
  currentPhrase = [],
  isDeleting = false,
  isEnd = false;

function loop() {
  isEnd = false;
  typedText.textContent = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      typedText.textContent = currentPhrase.join("");
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop();
      j--;
      typedText.textContent = currentPhrase.join("");
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const typingSpeed = isEnd ? 2000 : isDeleting ? 50 : 100;
  setTimeout(loop, typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  const aboutHeading = document.querySelector("#about h2");

  aboutHeading.addEventListener("click", () => {
    aboutHeading.classList.toggle("about-clicked");
  });
});

loop();
