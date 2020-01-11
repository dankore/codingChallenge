const axios = require('axios');

export default class TypeA {
  // 1. Select DOM elements, and keep track of any useful data
  constructor() {
    this.btn_typeA = document.querySelector("#typeA");
    this.resultsArea = document.querySelector('#contents')
    this.events();
  }

  // 2. Events
  events() {
    this.btn_typeA.addEventListener("click", () => this.injectData());
  }


injectData() {
   axios
      .get("https://dankore.github.io/JSONCodingChallenge/elements")
      .then(response => {
        const typeA_Data = response.data.filter( x => x.type == "typeA");
        this.renderResultHTML(typeA_Data);
      })
      .catch(() => {
        alert("Hello the request failed.");
      });
  };

  renderResultHTML(dataSet){
    // this.hideResultsArea();
    this.resultsArea.innerHTML = (
    `${dataSet
        .map( object => {
          return`
          <div class="max-w-sm rounded overflow-hidden shadow-lg m-3 bg-white px-6 py-4">
            <p class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                ${ object.id }
            </p>
            <div class="font-bold text-xl mb-2"> ${ object.type }</div>
            <p class="">${ object.description }</p>
            <p class="">${ object.company }</p>
           </div>
            `
        }).join("")}`
    );
}

  hideResultsArea() {
    this.resultsArea.classList.add('contents_hide')
  }
}