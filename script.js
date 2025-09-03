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

// Theme switcher: Pink → Navy → Normal
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
  themeBtn.addEventListener("click", function() {
    if (document.body.classList.contains("pink-mode")) {
      // switch to navy
      document.body.classList.remove("pink-mode");
      document.body.classList.add("navy-mode");
      themeBtn.textContent = "Switch to Normal";
    } else if (document.body.classList.contains("navy-mode")) {
      // switch to normal
      document.body.classList.remove("navy-mode");
      themeBtn.textContent = "Switch to Pink";
    } else {
      // switch to pink
      document.body.classList.add("pink-mode");
      themeBtn.textContent = "Switch to Navy";
    }
  });
}
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

