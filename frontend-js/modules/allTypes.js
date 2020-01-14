const axios = require("axios");

export default class allTypes {
  // 1. Select DOM elements, and keep track of any useful data
  constructor() {
    this.btn = document.querySelector("#allTypes");
    this.resultsArea = document.querySelector("#contents");
    this.events();
  }

  // 2. Events
  events() {
    this.btn.addEventListener("click", () => this.injectData());
  }

  injectData() {
    axios
      .get("https://dankore.github.io/JSONCodingChallenge/elements")
      .then(response => {
        const data = this.sattoloShuffle(response.data);
        this.renderResultHTML(data);
      })
      .catch(() => {
        alert("Hello the request failed.");
      });
  }

  sattoloShuffle(array) {
    var m = array.length,
      t,
      i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  renderResultHTML(dataSet) {
    // this.hideResultsArea();
    this.resultsArea.innerHTML = `${dataSet
      .map(object => {
        return `
          <div class="text-sm text-blue-400 rounded-full shadow-lg m-1 p-1 bg-white">
            <p>${object.type}</p>
          </div>
            `;
      })
      .join("")}`;
  }
}
