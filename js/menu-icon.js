const menuIcon = document.querySelector(".menu-icon");
const navbar =  document.querySelector('nav > ul');
const emptySpaceOnOpenDrawer =  document.querySelector('.empty-space-on-open-drawer');

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("move");
  navbar.classList.toggle('active-nav');
  emptySpaceOnOpenDrawer.classList.toggle('empty-space-on-open-drawer-active')
});


//Foi colocado esse espaço vazio para uando o usuário clicar fora do drawer
// fará ele fechar
emptySpaceOnOpenDrawer.addEventListener('click',()=>{
  menuIcon.classList.toggle("move");
  navbar.classList.toggle('active-nav');
  emptySpaceOnOpenDrawer.classList.toggle('empty-space-on-open-drawer-active')
})


// Com o drawer aberto quando o usuário scrolar ele será fechado
window.onscroll = ()=>{
  menuIcon.classList.remove("move");
  navbar.classList.remove('active-nav');
  emptySpaceOnOpenDrawer.classList.remove('empty-space-on-open-drawer-active')
}