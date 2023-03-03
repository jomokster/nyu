// const API = "http://localhost:3000/results";

const API = "https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=Tb5fBGclJuYZUydv6soIRa9ucureYf3m";


function getStories(event) {
  fetch(API)
    .then((response) => response.json())
    .then((data) => showData(data.results));
}

function showData(stories) {
  stories.map((story) => console.log(story))

  var looped = stories
    .map(
      (story) => `
    <div class="item">
    <picture>
    <img src="${story.multimedia[0].url}" alt="" />
    <figcaption>${story.multimedia[0].caption}</caption>
    </picture>
      <h3><a href="${story.url}">${story.title}</a></h3>
      <p>${story.abstract}</p>
    </div>
  `
    )
    .join("");

  document.querySelector(".stories").innerHTML = looped;
}

if (document.querySelector(".home")) {
  getStories();
}
