// Change Header background when scroll down
let header =  document.querySelector('header');

// Show Scroll to top button when achive height 500
let scrollToTopButton =  document.querySelector('.scroll-to-top');

// when scroll down will be added the class active-header, that have glass style
window.addEventListener('scroll',(e)=>{
    header.classList.toggle('active-header', scrollY > 5);
    scrollToTopButton.classList.toggle('active-scroll-to-top', scrollY > 500);
});

