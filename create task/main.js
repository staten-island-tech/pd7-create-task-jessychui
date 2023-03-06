import "./style.css";
import "./amiibos"

const DOMSelectors = {
  mario: document.getElementById("mario"),
  zelda: document.getElementById("zelda"),
  kirby: document.getElementById("kirby"),
  ac: document.getElementById("ac"),
  metroid: document.getElementById("metroid"),
  splatoon: document.getElementById("splatoon"),
};
let amiibos = "did not work lol";
async function getData() {
  const response = await fetch("https://www.amiiboapi.com/api/amiibo");
  const data = await response.json();
  amiibos = data.amiibo;
  console.log(data);
  console.log(amiibos);
  return amiibos;
}

DOMSelectors.ac.addEventListener("click", function () {
  let marioAmiibo = amiibos.filter(
    (marioAmiibo) => amiibos.amiiboSeries === "Animal Crossing"
  );
  console.log(marioAmiibo);
});
getData();

/* if (data.amiibo.amiiboSeries === "Super Mario") {
    console.log(data.amiibo); */
