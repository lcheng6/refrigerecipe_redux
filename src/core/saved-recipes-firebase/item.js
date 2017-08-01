import { Record, Array, Map } from 'immutable';


export const Item = new Record({
  id: null, // the recipe ID.  Taken from spoonacular API.
  completed: false, // completed filter.
  title: null, //title of the recipe.
  image: null,
  spoonacularSourceUrl:null,

  cookingMinutes:null,
  preparationMinutes: null,
  readyInMinutes: null,

  extendedIngredients: Array,
  analyzedInstructions:Array,

  vegan:null,

  sourceUrl: null,
  //there are other details, too much to list here.
  additionalFields: Map,
});
