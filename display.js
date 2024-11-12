import { turistPlaces } from "./data.js";

function displayPlaces(array) {
  const container = document.querySelector(".container");
  const templete = array.length > 0? array
    .map((arr) => {
      const { id, img, title, description } = arr;
      return `
        <article class="card" id="place-${id}">
            <img class="img" src="${img}" alt="Angkor Wat" />
            <h3 class="heading">${title}</h3>
            <p class="details">
              ${description}
            </p>
          </article>
      `;
    })
    .join(""): `<p class="notFound"> There are no such as place </p>`
  container.innerHTML = templete;
}

function displayButton(array) {
  const containerBtn = document.querySelector(".btn-container");
  const buttons = ["All", ...new Set(turistPlaces.map((item) => item.country))];
  containerBtn.innerHTML = buttons
    .map((btn) => {
      return `
        <button class="btn" data-id="${btn}">${btn}</button>
      `;
    })
    .join("");

  const allBtn = document.querySelectorAll(".btn");

  allBtn.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.target.dataset.id;
      const id = e.target.dataset.id;

      const filterArray = turistPlaces.filter((item) => item.country === id);
      if (id === "All") {
        displayPlaces(turistPlaces);
      } else {
        displayPlaces(filterArray);
      }
      const input = document.querySelector(".input");
      input.value = "";
    });
  });
}

export { displayPlaces, displayButton };
