var tabs = document.querySelectorAll('nav a');
var contentPara = document.querySelector('.content');

// when the hash changes
function setActiveTabAccordingToHash(type) {
  makeAllTabsInactive();
  var tabToActivate = document.querySelector(`a[href="#${type}"]`);
  tabToActivate.classList.add('active');
}

function makeAllTabsInactive() {
  tabs.forEach((tab) => tab.classList.remove('active'));
}

// runs on page load and whenever the hash changes
function setContentAccordingToHash() {
  const type = window.location.hash.substring(1);
  for (var item of data) {
    if (item.section === type) {
      // contentPara.innerHTML = item.story
      contentPara.innerHTML = `<h2>${item.section}</h2> <p>${item.story}</p>`;
      setActiveTabAccordingToHash(type);
    }
  }
}

// only runs once on page load
function initializePage() {
  if (!window.location.hash) {
    window.location.hash = 'cuisines';
    document.querySelector('[href="#cuisines"]').classList.add('active');
  }
  setContentAccordingToHash();
}

window.addEventListener('hashchange', setContentAccordingToHash);

// initializePage();
document.addEventListener('DOMContentLoaded', initializePage);
