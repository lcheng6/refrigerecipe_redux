https://market.mashape.com/spoonacular/recipe-food-nutrition

/*Request:*/

GET Search Recipes by Ingredients

Find recipes that use as many of the given ingredients as possible and have as little as possible missing ingredients. This is a whats in your fridge API endpoint.
URL PARAMETERS

fillIngredients
BOOLEAN

true

Add information about the used and missing ingredients in each recipe.
ingredients
STRING

chicken,corn,broccoli,red pepper,beans

A comma-separated list of ingredients that the recipes should contain.
limitLicense
BOOLEAN

false

Whether to only show recipes with an attribution license.
number
NUMBER

50

The maximal number of recipes to return (default = 5).
ranking
NUMBER

50

Whether to maximize used ingredients (1) or minimize missing ingredients (2) first.

1

*****This is request***

https://market.mashape.com/spoonacular/recipe-food-nutrition#search-recipes-by-ingredients

/ These code snippets use an open-source library. http://unirest.io/nodejs
unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1")
.header("X-Mashape-Key", "PUkQ3poysFmsheozAr97ixdGtaG5p1Gf87kjsnzDPLfDddaOJn")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
/*Response:*/


****To get the actual recipe*****
https://market.mashape.com/spoonacular/recipe-food-nutrition#get-recipe-information
// These code snippets use an open-source library. http://unirest.io/nodejs
unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/479101/information?includeNutrition=false")
.header("X-Mashape-Key", "PUkQ3poysFmsheozAr97ixdGtaG5p1Gf87kjsnzDPLfDddaOJn")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
