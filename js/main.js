// Change Header background when scroll down
let header =  document.querySelector('header');

// when scroll down will be added the class active-heade, that have glass style
window.addEventListener('scroll',(e)=>{
    header.classList.toggle('active-header', scrollY > 5);
});
