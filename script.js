// ---------- Surprise message ----------
const button = document.getElementById("surpriseBtn");
const message = document.getElementById("message");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeBtn = document.getElementById("themeBtn");
const backToTop = document.getElementById("backToTop");
const loader = document.getElementById("loader");
const searchBar = document.getElementById("searchBar");
const postList = document.getElementById("postList");

if (button) {
  const facts = [
    "Did you know? Honey never spoils — archaeologists found 3000-year-old pots still edible 🍯",
    "Did you know? Octopuses have three hearts and blue blood 🐙",
    "Bananas are berries, but strawberries aren’t 🍌 🍓",
    "Your stomach gets a new lining every 3–4 days 🔄",
    "Some cats are allergic to humans 🐱",
    "The first computer bug was an actual moth 🦋",
    "Bonus fact: You’re cooler than you think 😎"
  ];
  button.addEventListener("click", function() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    message.innerHTML = randomFact;
  });
}

// ---------- Theme switcher ----------
const themes = ["pink-mode", "navy-mode", "dark-mode", "pastel-mode", "high-contrast-mode"];
let currentTheme = 0;
let themeClicks = 0;

// Load saved theme
if (localStorage.getItem("theme")) {
  document.body.classList.add(localStorage.getItem("theme"));
  currentTheme = themes.indexOf(localStorage.getItem("theme"));
}

if (themeBtn) {
  themeBtn.addEventListener("click", function() {
    document.body.classList.remove(themes[currentTheme]);
    currentTheme = (currentTheme + 1) % themes.length;
    document.body.classList.add(themes[currentTheme]);
    localStorage.setItem("theme", themes[currentTheme]);

    // easter egg shuffle if button spammed 5x
    themeClicks++;
    if (themeClicks >= 5) {
      themeClicks = 0;
      const randomTheme = themes[Math.floor(Math.random() * themes.length)];
      document.body.className = randomTheme;
      localStorage.setItem("theme", randomTheme);
      alert("🎉 Random Theme Shuffle Activated!");
    }
  });
}

// ---------- Mobile menu toggle ----------
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// ---------- Back to top ----------
if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ---------- Article fade-in ----------
const articles = document.querySelectorAll("article");
function revealOnScroll() {
  articles.forEach(article => {
    const rect = article.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      article.classList.add("show");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ---------- Loader fade-out ----------
window.addEventListener("load", () => {
  if (loader) {
    setTimeout(() => {
      loader.classList.add("fade-out");
    }, 800); // small delay for effect
  }
});

// ---------- Search filter ----------
if (searchBar && postList) {
  searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    const items = postList.getElementsByTagName("li");

    Array.from(items).forEach(item => {
      const text = item.textContent.toLowerCase();
      if (text.includes(query)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
}

// ---------- Keyboard shortcuts ----------
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "t" && themeBtn) {
    themeBtn.click(); // switch theme
  }
  if (e.key.toLowerCase() === "m" && menuToggle) {
    menuToggle.click(); // toggle menu
  }
  if (e.key.toLowerCase() === "b" && backToTop) {
    backToTop.click(); // jump to top
  }
});
