// const userRequests = [
//     "play with Twinkie",
//     "give Twinkie a treat",
//     "ask him to sit",
//     "ask him to spin",
//     "ask him to come over",
//     "tell him he is a good boi",
//     "take him for a walk"
// ]
const twinkieResponses = [
  "*blank stare*",
  "BORK!!!",
  "bork",
  "*brings you a toy*",
  "*comes over for pets*",
  "*comes over out of curiousity*",
  "*comes over thinking you will give him a treat*",
  "*ignores you*",
  "*ignores you*",
  "*ignores you*",
  "*ignores you*",
  "*ignores you*",
  "*ignores you*",
  "*goes back to bed uninterested*",
  "*waits by the door to go outside*",
  "*runs away from you*",
  "*stares at you blankly*",
  "*sits*",
  "*spins*",
  "*sniffs your hand*",
  "*gives you the side eye*",
  "*gives you a single blink of acknowledgement",
  "*sighs deeply and goes to bed*",
  "*stares at you expectantly*",
  "*twitches his ear*",
  "*zoomies commence*",
];

function getNumOfPets() {
  return document.getElementById("numOfPetsText").value;
}

function setNumOfPets() {
  localStorage.setItem(
    "numOfPets",
    document.getElementById("numOfPetsText").value
  );
}

function buttonclick() {
  document.getElementById("numOfPetsText").value++;
  setNumOfPets(document.getElementById("numOfPetsText").value);
  //   console.log(getNumOfPets());
}

function getRandomTwinkieResponse() {
  const max = twinkieResponses.length;
  const randomIndex = Math.floor(Math.random() * max);
  document.getElementById("twinkieResponseText").innerHTML =`Twinkie: 
    ${twinkieResponses[randomIndex]}
    `;
}
