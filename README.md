## Instructions

1. You are given a JSON file with an array of Objects. Every element can be grouped together using the "type" property.
2. Your job is to import the data and arrange them in a way that the elements are evenly distributed.
3. You then have to create a server using node.js( micro or express) and serve this distribution upon request.
4. Create a frontend using either VanillaJS, React, Angular, Vue or Hyperapp that consumes this distribution and colors all the elements with similar type. For Example, if I click "typeA", it should color all the positions that this type exists at.
5. Provide buttons on the UI for each type so we can toggle between types. All unique types in the data should have buttons on the UI.
6. Sample pictures are in the "outputExamples" folder.
7. You can display the distribution in any similar way possible (get creative). Visualization is upto you (you can use libraries like D3.js).
8. Please add references to all the mathematical formulas or theorms used to achieve these results.
9. If you come up with your own algorithm please explain in brief how, why and when for the algorithm.
10. Create a branch from master and pull request when you're done.
11. Reach out to us if you have any questions and inform us when you're done.
12. Place the Frontend in the root folder "static".
13. Update the README.md file with the instructions on how to test the app.

## Bonus Points

1. If you deploy this app on a cloud(preferably on AWS).

## Notes

1. The output images are just the example visualizations we are expecting to see when we click a type
2. Output images do not necessarily represent even distribution

## Instructions To Test The App
## Backend ##
 * JSON file hosted on Github server [JSON File](https://github.com/dankore/JSONCodingChallenge)

## Frontend ##
 * Embedded JavaScript template (EJS) - Pure JavaScript that renders HTML. 75% file saving compared to React! 
 * Tailwind - CSS Utility library.

# HOW TO RUN THIS PROJECT
### Prerequisite software:
 * [Git](https://git-scm.com/downloads)
 * Visual Studio Code or any other IDE
 * [Node.js (8.x or 10.x)](https://nodejs.org/en/download/)

### Instructions:
 * Clone this git repository to your local computer `Git clone` [CodingChallenge --Master](https://github.com/dankore/codingChallenge.git)
 * Open the cloned project folder in Visual Studio Code
 * At the button left of VSCode, there is a little icon w/ the word `master` next to it.
   * Click that, and choose `+ Create New Branch` from the menu that pops up.
   * This allows you to change things independently.
 * Open the integrated terminal in VSCode (`ctrl + ~` or View -> Terminal).
 * Install dependencies: `npm install`
 * _(the above only has to be done once)_
 * Start development server: `npm run watch`
 * Open Chrome or Firefox to [http://localhost:8080](http://localhost:8080)
   * As you edit code, the browser will automatically refresh.

### Algorithm used
  * SattoloShuffle from [Source](https://bost.ocks.org/mike/shuffle/)
   
