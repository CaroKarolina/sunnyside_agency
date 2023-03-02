const menuBarsIcon = document.querySelector(".menu__bars");
const menuItemsEl = menuBarsIcon.nextElementSibling;
const menuAppEl = document.createElement("div");

menuBarsIcon.addEventListener("click", () => {
  if (!menuItemsEl.parentElement.classList.contains("collapsible--expanded"))
    menuItemsEl.append(menuAppEl);
  menuItemsEl.parentElement.classList.toggle("collapsible--expanded");
});

Array.from(menuItemsEl.children).forEach((el) =>
  el.addEventListener("click", () => {
    el.classList.add('menu__active')
    console.log("Klik");
  })
);
