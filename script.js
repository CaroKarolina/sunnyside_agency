const menuBarsIcon = document.querySelector('.menu__bars')
menuBarsIcon.addEventListener('click', () => {
  menuBarsIcon.parentElement.classList.toggle('collapsible--expanded')
})