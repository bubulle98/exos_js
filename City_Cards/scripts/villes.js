const CITIES = [
  {
    name: "Paris",
    image: "./images/paris.jpg",
    country: "France",
    continent: "Europe",
    nbResidents: null,
  },
  {
    name: "Tokyo",
    image: "./images/tokyo.jpg",
    country: "Japan",
    continent: "Asia",
    nbResidents: "14 million",
  },
  {
    name: "Washington",
    image: "./images/washington.jpg",
    country: "USA",
    continent: "America",
    nbResidents: null,
  },
  {
    name: "Madrid",
    image: "./images/madrid.jpg",
    country: "Spain",
    continent: "Europe",
    nbResidents: "6.7 million",
  },
  {
    name: "Ottawa",
    image: "./images/ottawa.jpg",
    country: "Canada",
    continent: "America",
    nbResidents: null,
  },

  {
    name: "London",
    image: "./images/london.jpg",
    country: "UK",
    continent: "Europe",
    nbResidents: "8.9 million",
  },
];

const MAIN = document.querySelector(".main-container");
const SELECT = document.querySelector("select");
let continentCards;

createCards(CITIES);

SELECT.addEventListener("change", () => {
  MAIN.innerHTML = "";
  if (SELECT.value === "All") {
    createCards(CITIES);
  } else {
    continentCards = CITIES.filter((card) => card.continent === SELECT.value);
    createCards(continentCards);
  }
});


function createCard(myCity) {
  const CARD_DIV = document.createElement("div");
  const LEFT_DIV = document.createElement("div");
  const RIGHT_DIV = document.createElement("div");
  const NAME_P = document.createElement("p");
  const IMG = document.createElement("img");
  const COUNTRY_P = document.createElement("p");
  const CONTINENT_P = document.createElement("p");
  const RESIDENTS_P = document.createElement("p");

  NAME_P.textContent = myCity.name;
  IMG.src = myCity.image;
  COUNTRY_P.textContent = myCity.country;
  CONTINENT_P.textContent = myCity.continent;
  RESIDENTS_P.textContent = myCity.nbResidents ?? "Donnée inconnue";

  LEFT_DIV.appendChild(IMG);
  RIGHT_DIV.append(NAME_P, COUNTRY_P, CONTINENT_P, RESIDENTS_P);
  CARD_DIV.append(LEFT_DIV, RIGHT_DIV);
  MAIN.appendChild(CARD_DIV);

  CARD_DIV.classList.add("card-div");
}

function createCards(CITIES_ARRAY) {
  CITIES_ARRAY.forEach((city) => {
    createCard(city);
  });
}
