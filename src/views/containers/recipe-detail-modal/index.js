import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import RecipeDetailModal from 'src/views/components/recipe-detail-modal';
import {recipeDetailCardInteractionActions} from 'src/core/get-recipe-detail';
import {savedRecipesActions} from 'src/core/saved-recipes-firebase';
//TODO: get the save recipe action.

export class RecipeDetailModalContainer extends Component {
  constructor (props) {
    super(...arguments);
    this.props = props;

  }

  //TODO: investigate whether declaring render is in container is
  //pattern or anti-pattern
  render() {

    //there are 2 places that recipes details could be persisted: 1 in saved recipes, and 2
    //in recipe_details (Spoonacular's recipe detail).  I want to take saved recipes as precedence

    if(this.props.currentRecipeId) {
      let recipeSummaryIndex = _.findIndex(this.props.recipeSummaries,
        function(elem) {
          return elem.id === this.props.currentRecipeId;
        }.bind(this)
      );

      //if recipeSummaryIndex is found, then just load it from recipeDetail.
      //if not, load it from the Saved Recipes
      if (recipeSummaryIndex && recipeSummaryIndex > 0) {
        return (
          <RecipeDetailModal
            title="Recipe Detail"
            recipeDetail={this.props.recipeDetails[this.props.currentRecipeId]}
            recipeSummary={this.props.recipeSummaries[recipeSummaryIndex]}
            cardToggle={this.props.cardToggle}
            modal={this.props.modal}
            saveRecipeInFirebase = {this.props.saveRecipeInFirebase }
          />
        );
      }else {
        //TODO: remove this line;
        console.log('stop here');
        let savedRecipeDetailIndex = -1;
        let index=0;
        for (index = 0; index < this.props.savedRecipes.size; index++) {
          if(this.props.savedRecipes.get(index).id === this.props.currentRecipeId) {
            savedRecipeDetailIndex = index;
          }
        }
        return (
          <RecipeDetailModal
            title="Recipe Detail"
            recipeDetail={this.props.savedRecipes.get(savedRecipeDetailIndex).toJS()}
            cardToggle={this.props.cardToggle}
            modal={this.props.modal}
            saveRecipeInFirebase = {this.props.saveRecipeInFirebase }
          />
        );
      }


    }else {
      return null;
    }
  }
}

const mapStateToProps= (state) => ({
  recipeDetails:state.recipe_details.recipeDetails,
  currentRecipeId:state.recipe_details.currentRecipeId,
  recipeSummaries:state.intro_recipes.recipes,
  modal:state.recipe_details.toggle,
  savedRecipes: state.saved_recipes.items,
});

const mapDispatchToProps= {
  cardToggle: recipeDetailCardInteractionActions.recipeDetailCardToggle,
  saveRecipeInFirebase: savedRecipesActions.createRecipeDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetailModalContainer);