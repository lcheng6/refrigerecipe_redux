// const API_KEY = 'PUkQ3poysFmsheozAr97ixdGtaG5p1Gf87kjsnzDPLfDddaOJn'
// const ROOT_URL = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1`
//
//
//
// export const GET_RECIPES = 'GET_RECIPES'
//
// export function getRecipesReducer(ingredients) {
//   return {
//     type: GET_RECIPES
//   }
// }
//
//
// / These code snippets use an open-source library. http://unirest.io/nodejs
// unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1")
// .header("X-Mashape-Key", "PUkQ3poysFmsheozAr97ixdGtaG5p1Gf87kjsnzDPLfDddaOJn")
// .header("Accept", "application/json")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });
// /*Response:*/

export default function () {
  return [
    { title: "Yummy Food" },
    { title: "Yum Yum Good Food" },
    { title: "Smelly Food" },
    { title: "Italian Food" },
    { title: "Long winded food from the Mediteranean Oceans of France" },
    { title: "Swell food from the South" },
    { title: "Yucky Food from the south that tastes ok" }
  ]
}
