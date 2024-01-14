export const burger = (selectorBurger, selectorMenu) => {
  const burger = document.querySelector(selectorBurger);
  const menu = document.querySelector(selectorMenu);

  burger.addEventListener("click", function () {
    this.classList.toggle("active");
    menu.classList.toggle("active-menu");
  });
};
