import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import _ from "lodash";

import SavedRecipeCard from 'src/views/components/saved-recipe-card';
import { getRecipeDetailActions, recipeDetailCardInteractionActions }  from "src/core/get-recipe-detail";


class SavedRecipeList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
 
  }
  componentDidMount() {

  }

  showRecipeByIndex(index) {
    console.log("showRecipeByIndex: " + index);
    let recipesJS = this.props.recipes.toJS();
    let recipesIds = _.map(recipesJS, function(elem) {
      if (elem.isEasterEgg) {
        return null;
      }else {
        return elem.id;
      }
    });
    recipesIds = _.filter(recipesIds, function(id) {
      return (id);
    });

    console.log("recipesIds: " + recipesIds);

    let designatedRecipeId = recipesIds[index];
    this.props.getRecipeDetail(designatedRecipeId);
    this.props.recipeDetailCardShowModal(true);

  }
  closeRecipeModal() {
    this.props.recipeDetailCardShowModal(false);
  }

  showEasterEgg() {
    console.log("showEasterEgg ");
    let recipesJS = this.props.recipes.toJS();
    let easterEggIds = _.map(recipesJS, function(elem) {
      if (elem.isEasterEgg) {
        return elem.id;
      }else {
        return null;
      }
    });
    easterEggIds = _.filter(easterEggIds, function(id) {
      return (id);
    });

    //only display the first easter egg
    let designatedRecipeId = easterEggIds[0];
    this.props.setCurrentRecipeIdWithoutLoadingFromSpoonacular(designatedRecipeId);
    this.props.recipeDetailCardShowModal(true);

  }

  renderSavedRecipes() {
    return this.props.recipes.map((recipe, index) => {
      if(recipe.isEasterEgg) {
        //TODO: verify this part
        // return (
        //   <SavedRecipeCard
        //     key={index}
        //     recipe={recipe}
        //     getRecipeDetail={this.props.setCurrentRecipeIdWithoutLoadingFromSpoonacular}
        //     recipeDetailCardShowModal = {this.props.recipeDetailCardShowModal}
        //   />
        // );
        return null;
      }else {
        return (
          <SavedRecipeCard
            key={index}
            recipe={recipe}
            getRecipeDetail={this.props.getRecipeDetail}
            recipeDetailCardShowModal = {this.props.recipeDetailCardShowModal}
          />
        );
      }
    });
  }

  render() {
    return (
      // !this.props.fetching ? <PacmanLoader/> :
      <div>
        {this.renderSavedRecipes()}
      </div>
    );
  }
}

// This function maps a specific part of
// the state to the prop `recipes`.

// In larger apps it is often good
// to be more selective and only
// map the part of the state tree
// that is necessary.

function mapStateToProps(state) {
  // anything returned here will
  // end up as props on this container
  return {
    // recipes: state.intro_recipes.recipes,
    // fetching: state.intro_recipes.fetching,
    // items: state.fridge.items,
    // recipeDetails: state.recipe_details.recipeDetails
    recipes:state.saved_recipes.items,
  };

}

const mapDispatchToProps = {
  // whenever getRecipes is called, the result should
  // be passed to our reducers
  getRecipeDetail:getRecipeDetailActions.getRecipeDetail,
  setCurrentRecipeIdWithoutLoadingFromSpoonacular: recipeDetailCardInteractionActions.setCurrentRecipeId,
  recipeDetailCardShowModal:recipeDetailCardInteractionActions.recipeDetailCardToggle,
};

SavedRecipeList.propTypes = {
  recipes:PropTypes.instanceOf(List),
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedRecipeList);
