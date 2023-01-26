// Change Header background when scroll down
let header = document.querySelector("header");

// Show Scroll to top button when achive height 500
let scrollToTopButton = document.querySelector(".scroll-to-top");

// when scroll down will be added the class active-header, that have glass style
window.addEventListener("scroll", (e) => {
  //Active a glassmorphism background header
  header.classList.toggle(
    "active-header",
    scrollY > 5 && window.innerWidth > 800
  );

  //Show scroll to top button on screen
  scrollToTopButton.classList.toggle("active-scroll-to-top", scrollY >= 250);
});

// Toggle between light and darkmode
const darkModeToggle = document.querySelector("#mode-toggle");
const LIGHT_MODE_FILE = "light_mode.css";
const DARK_MODE_FILE = "dark_mode.css";
const LOCAL_STORAGE_KEY = "theme";



// Ao carregar a página irá verificar se é light mode, caso não seja seta para dark na url do css theme
window.addEventListener("load", () => {
  let localStorageTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!theme.href.endsWith(localStorageTheme)) {
    //dark mode
    theme.href = theme.href.replace(LIGHT_MODE_FILE, DARK_MODE_FILE);
    darkModeToggle.checked=true;
  }
});

// Ao clicar no botão de darkmode irá fazer a mudança de temas
darkModeToggle.addEventListener("click", () => {
 
  let theme = document.querySelector("#theme");
  if (theme.href.endsWith(LIGHT_MODE_FILE)) {
    theme.href = theme.href.replace(LIGHT_MODE_FILE, DARK_MODE_FILE);
    localStorage.setItem(LOCAL_STORAGE_KEY, DARK_MODE_FILE);
  } else {
    theme.href = theme.href.replace(DARK_MODE_FILE, LIGHT_MODE_FILE);
    localStorage.setItem(LOCAL_STORAGE_KEY, LIGHT_MODE_FILE);
  }
});


