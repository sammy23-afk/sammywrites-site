// Surprise message
const button = document.getElementById("surpriseBtn");
const message = document.getElementById("message");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (button) {
    const facts = [
    "Did you know? Honey never spoils — archaeologists have found pots of honey thousands of years old still good to eat &#127855;", // 🍯
    "Did you know? Octopuses have three hearts and blue blood &#128025;", // 🐙
    "Did you know? Bananas are berries, but strawberries aren’t &#127820; &#127827;", // 🍌 🍓
    "Did you know? Your stomach gets a new lining every 3–4 days &#128260;", // 🔄
    "Did you know? Some cats are allergic to humans &#128049;", // 🐱
    "Did you know? The first computer bug was an actual moth &#128030;" // 🦋
    ];

    button.addEventListener("click", function() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    message.innerHTML = randomFact; // use innerHTML to render entities
    });
}

// Theme switcher with multiple themes
const themeBtn = document.getElementById("themeBtn");
const themes = ["pink-mode", "navy-mode", "dark-mode", "pastel-mode"];
let currentTheme = 0;

if (themeBtn) {
  themeBtn.addEventListener("click", function() {
    // remove current theme class
    document.body.classList.remove(themes[currentTheme]);

    // move to next theme
    currentTheme = (currentTheme + 1) % themes.length;

    // apply new theme
    document.body.classList.add(themes[currentTheme]);
  });
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

