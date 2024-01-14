import "../scss/style.scss";

import {
  startRotateAnimation,
  getDescription,
  inputSetting,
  burger,
} from "./modules/index.js";

window.addEventListener("DOMContentLoaded", () => {
  getDescription("description");
  startRotateAnimation(".spin-wrapper", "rotate-animation");
  inputSetting("search");
  burger(".burger", ".menu");
});
