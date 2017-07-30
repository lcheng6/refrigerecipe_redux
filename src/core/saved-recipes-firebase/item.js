import { Record } from 'immutable';


export const Item = new Record({
  id: null, // the recipe ID.  Taken from spoonacular API.
  completed: false, // completed filter.
  title: null, //title of the recipe.
  //there are other details, too much to list here.
});
