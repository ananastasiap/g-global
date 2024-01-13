export const startRotateAnimation = (
  selectorForAnimation,
  classForAnimation
) => {
  const containerForAnimation = document.querySelector(selectorForAnimation);

  containerForAnimation.addEventListener("animationend", function () {
    containerForAnimation.classList.add(classForAnimation);
  });
};
