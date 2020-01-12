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
          <div class="max-w-sm rounded overflow-hidden shadow-lg m-3 bg-white px-6 py-4 text-center">
              <p class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-3">
                  ${object.id}
              </p>
              <div class="font-bold text-xl mb-2"> ${object.type}</div>
            </div>
            `;
      })
      .join("")}`;
  }
}
