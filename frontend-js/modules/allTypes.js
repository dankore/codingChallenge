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
        const data = response.data.filter(x => x);
        this.renderResultHTML(data);
      })
      .catch(() => {
        alert("Hello the request failed.");
      });
  }

  renderResultHTML(dataSet) {
    // this.hideResultsArea();
    this.resultsArea.innerHTML = `${dataSet
      .map(object => {
        return `
          <div class="text-l font-semibold text-blue-400 rounded-full shadow-lg m-2 p-2 bg-white">
            <p>${object.type}</p>
          </div>
            `;
      })
      .join("")}`;
  }
}
