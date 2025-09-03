// Loader fade-out
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) setTimeout(() => loader.classList.add("fade-out"), 800);
});

// Surprise facts
const facts = [
  "Did you know? Honey never spoils 🍯",
  "Octopuses have three hearts 🐙",
  "Bananas are berries, strawberries aren’t 🍌 🍓",
  "Your stomach gets a new lining every 3–4 days 🔄",
  "Some cats are allergic to humans 🐱",
  "The first computer bug was a moth 🦋"
];
const btn = document.getElementById("surpriseBtn");
if (btn) {
  btn.addEventListener("click", () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("message").innerHTML = randomFact;
  });
}

// Theme switcher
const themes = ["pink-mode", "navy-mode", "dark-mode", "pastel-mode", "high-contrast-mode"];
let currentTheme = 0;
const themeBtn = document.getElementById("themeBtn");

// Load saved theme
if (localStorage.getItem("theme")) {
  document.body.className = localStorage.getItem("theme");
  currentTheme = themes.indexOf(localStorage.getItem("theme"));
}

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.remove(themes[currentTheme]);
    currentTheme = (currentTheme + 1) % themes.length;
    document.body.classList.add(themes[currentTheme]);
    localStorage.setItem("theme", themes[currentTheme]);
  });
}

// Back-to-top button
const backToTop = document.getElementById("backToTop");
if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 200);
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Mobile menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
if (menuToggle) {
  menuToggle.addEventListener("click", () => navLinks.classList.toggle("show"));
}

// Search filter
const searchBar = document.getElementById("searchBar");
const postList = document.getElementById("postList");
if (searchBar && postList) {
  searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    Array.from(postList.getElementsByTagName("li")).forEach(item => {
      item.style.display = item.textContent.toLowerCase().includes(query) ? "" : "none";
    });
  });
}

// Scroll reveal
function revealOnScroll() {
  document.querySelectorAll("article, .card, section").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Progress bar
const progressBar = document.getElementById("progressBar");
if (progressBar) {
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = progress + "%";
  });
}

// Copy quotes
document.querySelectorAll("blockquote").forEach(block => {
  const btn = document.createElement("button");
  btn.className = "copy-quote";
  btn.textContent = "📋 Copy";
  block.appendChild(btn);
  btn.addEventListener("click", () => {
    navigator.clipboard.writeText(block.innerText);
    btn.textContent = "✅ Copied!";
    setTimeout(() => (btn.textContent = "📋 Copy"), 1500);
  });
});
