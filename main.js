import { turistPlaces } from "./data.js";
import { displayPlaces, displayButton } from "./display.js";
import searching from "./searching.js";

document.addEventListener("DOMContentLoaded", () => {
  displayPlaces(turistPlaces);
  displayButton();
  searching();
});
