const axios = require("axios");

export default class TypeA {
  // 1. Select DOM elements, and keep track of any useful data
  constructor() {
    this.btn = document.querySelector("#typeA");
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
        if (object.type == "typeA") {
          return `
             <div class="max-w-sm rounded overflow-hidden bg-green-500 shadow-lg m-3 px-6 py-4 text-center">
              <p class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-3">
                  ${object.id}
              </p>
              <h2 class="font-bold text-xl mb-2"> ${object.type}</h2>
            </div>
          `;
        } else {
          return `
            <div class="max-w-sm rounded overflow-hidden shadow-lg m-3 bg-white px-6 py-4 text-center">
              <p class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-3">
                  ${object.id}
              </p>
              <div class="font-bold text-xl mb-2"> ${object.type}</div>
            </div>
              `;
        }
      })
      .join("")}`;
  }
}
