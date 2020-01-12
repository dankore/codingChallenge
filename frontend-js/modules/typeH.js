const axios = require("axios");

export default class TypeH {
  // 1. Select DOM elements, and keep track of any useful data
  constructor() {
    this.btn = document.querySelector("#typeH");
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
        if (object.type == "typeH") {
          return `
            <div class="text-l font-bold bg-blue-500 rounded-full shadow-lg m-2 p-2 text-white">
              <p>${object.type}</p>
            </div>
          `;
        } else {
          return `
            <div class="text-l font-semibold text-blue-400 rounded-full shadow-lg m-2 p-2 bg-white">
              <p>${object.type}</p>
            </div>
              `;
        }
      })
      .join("")}`;
  }
}
