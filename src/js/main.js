import "../scss/style.scss";

import { startRotateAnimation } from "./modules/index.js";

window.addEventListener("DOMContentLoaded", () => {
  startRotateAnimation(".spin-wrapper", "rotate-animation");
});
