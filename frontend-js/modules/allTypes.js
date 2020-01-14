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
        const onlyTypes = response.data.map(x => x.type);
        const data = this.distributeEvely_And_Shuffle(onlyTypes);
        this.renderResultHTML(data);
      })
      .catch(() => {
        alert("Hello the request failed.");
      });
  }

  distributeEvely_And_Shuffle(array) {
    var m = array.length,
      t,
      i;
    // DISTRIBUTE ARRAY EVENLY
    const uniqueTypes = [...new Set(array)];

    const arrayOfTypes = uniqueTypes.map(outer =>
      array.filter(inner => outer === inner)
    );

    array
      .map((_, idx) => arrayOfTypes.map(el => el[idx]))
      .reduce((a, b) => a.concat(b))
      .filter(_ => _);

    // SHUFFLE ARRAY

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
            <p>${object}</p>
          </div>
            `;
      })
      .join("")}`;
  }
}
