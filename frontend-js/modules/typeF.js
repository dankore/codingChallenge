const axios = require("axios");

export default class TypeF {
  // 1. Select DOM elements, and keep track of any useful data
  constructor() {
    this.btn = document.querySelector("#typeF");
    this.resultsArea = document.querySelector("#contents");
    this.color_me = document.querySelector("#color_me");
    this.events();
  }

  // 2. Events
  events() {
    this.btn.addEventListener("click", () => this.injectData());
  }
  // 3. Methods
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
    this.resultsArea.innerHTML = `${dataSet
      .map(object => {
        if (object.type == "typeF") {
          return `
            <div class="text-sm bg-blue-500 rounded-full shadow-lg m-1 p-1 text-white">
              <p>${object.type}</p>
            </div>
          `;
        } else {
          return `
            <div class="text-sm text-blue-400 rounded-full shadow-lg m-1 p-1 bg-white">
              <p>${object.type}</p>
            </div>
              `;
        }
      })
      .join("")}`;
  }
}
