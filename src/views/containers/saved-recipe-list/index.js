import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import PropTypes from 'prop-types';

import SavedRecipeCard from 'src/views/components/saved-recipe-card';
import { recipeDetailCardInteractionActions }  from "src/core/get-recipe-detail";

//TODO: remove this
import { getRecipeDetailActions }  from "src/core/get-recipe-detail";


class SavedRecipeList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var annyang = window.annyang;

    if (annyang) {
      const PING = 'PING';
      const PONG = 'PONG';

      const ping = () => ({ type: PING });
      // Let's define a command.
      var commands = {
        'hello': function () {
          this.props.recipeDetailCardShowModal(true);
        }.bind(this),
        'show recipe': function() {
          console.log("Show recipe");
        }.bind(this),
      };

      // Add our commands to annyang
      annyang.addCommands(commands);

      // Start listening.
      annyang.start();
    }
  }

  renderSavedRecipes() {
    return this.props.recipes.map((recipe, index) => {
      return (
        <SavedRecipeCard
          key={index}
          recipe={recipe}
          getRecipeDetail={this.props.getRecipeDetail}
          recipeDetailCardShowModal = {this.props.recipeDetailCardShowModal}
        />
      );
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
  recipeDetailCardShowModal:recipeDetailCardInteractionActions.recipeDetailCardToggle,
};

SavedRecipeList.propTypes = {
  recipes:PropTypes.instanceOf(List),
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedRecipeList);
