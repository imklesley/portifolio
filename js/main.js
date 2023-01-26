// Change Header background when scroll down
let header = document.querySelector("header");

// Show Scroll to top button when achive height 500
let scrollToTopButton = document.querySelector(".scroll-to-top");

// when scroll down will be added the class active-header, that have glass style
window.addEventListener("scroll", (e) => {
  //Só vai realizar a alteração se o width for maior que 800, para não desfazer o glasmorphism do mobile
  if (window.innerWidth > 800) {
    //Active a glassmorphism background header
    header.classList.toggle("active-header", scrollY > 5);
  }
  //Show scroll to top button on screen
  scrollToTopButton.classList.toggle("active-scroll-to-top", scrollY >= 250);
});


