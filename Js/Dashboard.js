
// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// Get the saved theme, or use light mode by default
let currentTheme = localStorage.getItem("theme") || "light";

// Apply the theme
function applyTheme() {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    themeIcon.className = "bi bi-sun";
    themeToggle.setAttribute("aria-label", "Switch to light mode");
  } else {
    themeIcon.className = "bi bi-moon-stars";
    themeToggle.setAttribute("aria-label", "Switch to dark mode");
  }
}

// Change theme when button is clicked
themeToggle.addEventListener("click", function () {
  if (currentTheme === "light") {
    currentTheme = "dark";
  } else {
    currentTheme = "light";
  }

  localStorage.setItem("theme", currentTheme);

  applyTheme();
});

// Apply saved theme when page loads
applyTheme();
