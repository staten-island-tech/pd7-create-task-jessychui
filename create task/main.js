import "./style.css";

const DOMSelectors = {
  mario: document.getElementById("mario"),
  zelda: document.getElementById("zelda"),
  kirby: document.getElementById("kirby"),
  ac: document.getElementById("ac"),
  metroid: document.getElementById("metroid"),
  splatoon: document.getElementById("splatoon"),
};

async function getData() {
  const response = await fetch("https://www.amiiboapi.com/api/amiibo");
  const data = await response.json();
}
