const axios = require("axios");

export default class TypeK {
  // 1. Select DOM elements, and keep track of any useful data
  constructor() {
    this.btn = document.querySelector("#typeK");
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
        const data = response.data.filter(x => x).sort((a, b) => a.id - b.id);
        this.renderResultHTML(data);
      })
      .catch(() => {
        alert("Hello the request failed.");
      });
  }

  renderResultHTML(dataSet) {
    this.resultsArea.innerHTML = `${dataSet
      .map(object => {
        if (object.type == "typeK") {
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
