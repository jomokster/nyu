import { setWithExpiry, getWithExpiry } from "./modules/localStorageHelpers.js";

// const API = "http://localhost:3000/results";
const LIST = "hardcover-fiction";
const API_KEY = "Tb5fBGclJuYZUydv6soIRa9ucureYf3m";
const API = `https://api.nytimes.com/svc/books/v3/lists.json?list=${LIST}&api-key=${API_KEY}`;
const storagePrefix = "nyt-autosave";

function getStories(event) {
  const stories = getWithExpiry(storagePrefix);
  if (!stories) {
  fetch(API)
    .then((response) => response.json())
    .then((data) => showData(data.results));
  }
  else {
    document.querySelector(".stories").innerHTML = stories;
  }
}

// function getImageUrl(story) {
//   if (story == null) {
//     return "https://images.pexels.com/photos/14959678/pexels-photo-14959678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
//   }
//   return story.multimedia[0].url;
// }

function showData(stories) {
  stories.map((story) => console.log(story["book_details"][0].title));

  var looped = stories
    .map(
      (story) => `
    <div class="item">
      <h3><a href="${story.amazon_product_url}">${story["book_details"][0].title}</a></h3>
      <h4>Rank: ${story.rank}</h4>
      <p>${story["book_details"][0].description}</p>
    </div>
  `
    )
    .join("");

  //   var looped = stories
  //   .map(
  //     (story) => `
  //   <div class="item">
  //   <picture>
  //   <img src="${story.multimedia[0].url}" alt="" />
  //   <figcaption>${story.multimedia[0].caption}</caption>
  //   </picture>
  //     <h3><a href="${story.url}">${story.title}</a></h3>
  //     <p>${story.abstract}</p>
  //   </div>
  // `
  //   )
  //   .join("");

  document.querySelector(".stories").innerHTML = looped;
  setWithExpiry(storagePrefix, looped, 1000 * 60);

}

if (document.querySelector(".home")) {
  getStories();
}
