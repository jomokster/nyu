var API = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

fetch(API)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    document.querySelector(".quote").innerText = data[0];
  });

const el = document.querySelector("h2");

const basilChefs = ["mama", "papa", "baby"];
const basilTexture = ["greasy", "frozen", "spicy"];

function random(array) {
  const max = array.length;
  const randomIndex = Math.floor(Math.random() * max);
  return array[randomIndex];
}

var recipeName = `${random(basilChefs)}'s ${random(basilTexture)} pesto`;

el.innerHTML = recipeName;




var modalOuter = document.querySelector(".modal-outer");
var modalInner = document.querySelector(".modal");
var modalContent = {
  "beta": "<h3>Hi! I'm a Modal Window (ʘ‿ʘ)╯</h3><p>Information about the beta program.</p>",
  "pickit": "<h3>Pickity</h3>pick",
  "cookit": "<h3>Cook!!!!</h3>Cooking is hard",
  "storeit": "<h3>Store galore</h3>bye"
}
var navURLs = {
  "http://localhost:3000/#pickit": modalContent["pickit"],
  "http://localhost:3000/#cookit": modalContent["cookit"],
  "http://localhost:3000/#storeit": modalContent["storeit"],  
}
// var allLIs = document.querySelectorAll("li");
// console.log(allLIs)
function showPopover(event) {
  console.log(event.target)
  if (event.target.matches(".beta")) {
    modalInner.innerHTML = modalContent["beta"];
    modalOuter.classList.add("open");
  } else if (event.target.closest("nav ul")) {
    console.log(event.target.href)
    url = event.target.href
    modalInner.innerHTML = navURLs[url];
    modalOuter.classList.add("open");
  // } else if (event.target.matches("li .nav-pickit")) {
  //   modalInner.innerHTML = modalContent["pickit"];
  //   modalOuter.classList.add("open");
  // } else if (event.target.matches("li .nav-cookit")) {
  //   modalInner.innerHTML = modalContent["cookit"];
  //   modalOuter.classList.add("open");
  // } else if (event.target.matches("li .nav-storeit")) {
  //   modalInner.innerHTML = modalContent["storeit"];
  //   modalOuter.classList.add("open");
  } else if (event.target.matches(".closer, .modal-outer")) {
    modalOuter.classList.remove("open");
  } else return;
  event.preventDefault();
}

document.addEventListener("click", showPopover);
